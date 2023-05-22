import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import * as S from "./classWrite.styles";

import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

// import MultipleDatePicker from "react-multiple-datepicker";
import DaumPostcodeEmbed from "react-daum-postcode"; //  우편번호
import type { Address } from "react-daum-postcode";
import { UseMutationCreateClass } from "../../../commons/hooks/useMutations/class/useMutationCreateClass";
import { classWriteSchema } from "./classWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
// import MultipleDatePicker from "react-multiple-datepicker";
import "react-quill/dist/quill.snow.css";
import { useMutationUpdateClass } from "../../../commons/hooks/useMutations/class/useMutationUpdateClass";
import { IClassWriteProps, IFormData } from "./classWrite.types";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/class/useMutationUploadFile";

// 웹 에디터
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

// 카카오지도
declare const window: typeof globalThis & {
  kakao: any;
  geocoder: any;
};

export default function ClassWrite(props: IClassWriteProps) {
  // -------------

  // 이미지 등록
  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-2",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-3",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div>Upload</div>
    </div>
  );

  // -----------

  // 우편주소(카카오지도)
  const [fulladdress, setFulladdress] = useState("");

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a9169f002991ce2cba289e84e705d4d4&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        let geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          fulladdress !== ""
            ? fulladdress
            : props.data?.fetchClassDetail[0]?.address,

          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              var infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:270px;text-align:center;padding:6px 0;">${
                  fulladdress !== ""
                    ? fulladdress
                    : props.data?.fetchClassDetail[0]?.address
                }</div>`,
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [fulladdress]);

  // --------------------------------------------------------

  const [isOpen, setIsOpen] = useState(false);

  // 우편번호 모달창
  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data.address);

    onToggleModal();

    setValue("address", data.address);
    setFulladdress(data.address);
  };

  // --------------------------------------------------------

  // 달력
  // const [selectedDates, setSelectedDates] = useState([]);

  // const handleDateSelect = (dates: any) => {
  //   setSelectedDates(dates);
  //   console.log(dates);
  // };

  // --------------------------------------------------------

  // 등록
  const { onClickClassSubmit } = UseMutationCreateClass();

  // 수정
  const { onClickClassUpdate } = useMutationUpdateClass();

  const { register, setValue, trigger, handleSubmit } = useForm<IFormData>({
    // resolver: yupResolver(classWriteSchema),
    // mode: "onSubmit",
    mode: "onChange",
  });

  // 등록하기, 수정하기 제출
  const onSubmitForm = async (data: IFormData) => {
    const { ...value } = data;
    // value.images = imageUrls; // 추가함 5.21
    if (!props.isEdit) {
      await onClickClassSubmit(value, fulladdress);
    } else {
      await onClickClassUpdate(value, fulladdress);
    }
  };

  // 세부내용
  const onChangeContents = (value: string): void => {
    console.log(value);

    setValue("content", value === "<p><br></p>" ? "" : value);

    void trigger("content");
  };

  return (
    <>
      <S.Wrapper>
        {/* 우편번호 모달 */}
        {isOpen && (
          <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
            <DaumPostcodeEmbed onComplete={handleComplete} />
          </Modal>
        )}

        <S.Wrapper_header>
          <S.Wrapper_header_left>
            {props.isEdit ? "클래스 수정" : "신규 클래스 개설"}
          </S.Wrapper_header_left>
        </S.Wrapper_header>

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Wrapper_body>
            <S.Label>카테고리를 선택해주세요</S.Label>
            <select
              {...register("category")}
              // defaultValue={props.data?.category}
              defaultValue={props.data?.fetchClassDetail[0].category}
            >
              <option value="교육">교육</option>
              <option value="여가">여가</option>
              <option value="운동">운동</option>
              <option value="요리">요리</option>
            </select>
            {/* <S.Error>{formState.errors.category?.message}</S.Error> */}

            <S.Label>클래스 이름을 입력해주세요</S.Label>

            <input
              type="text"
              placeholder="클래스 이름을 입력해주세요"
              {...register("title")}
              defaultValue={props.data?.fetchClassDetail[0].title}
            />
            {/* <S.Error>{formState.errors.title?.message}</S.Error> */}

            <S.Label>클래스 한줄요약을 입력해주세요</S.Label>
            <input
              type="text"
              placeholder="클래스 한줄요약을 입력해주세요"
              {...register("content_summary")}
              defaultValue={props.data?.fetchClassDetail[0].content_summary}
            />
            {/* <S.Error>{formState.errors.content_summary?.message}</S.Error> */}

            {/* <S.Error>에러</S.Error> */}

            <S.Label>대표 이미지를 올려주세요</S.Label>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 5 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
            {/* <S.Img_box>
              <S.Img />
              <S.Img />
            </S.Img_box> */}
            {/* <S.Error>에러</S.Error> */}
            {/* ------- */}

            {/* <S.Error>에러</S.Error> */}
            <S.Wrapper_body_middle>
              <S.Wrapper_body_middle_left>
                <S.Label>클래스 소요 시간을 입력해주세요</S.Label>

                {/* <S.Time size="large" onChange={onChangeTime} /> */}
                <select
                  {...register("total_time")}
                  defaultValue={props.data?.fetchClassDetail[0].total_time}
                >
                  <option value="1시간">1시간</option>
                  <option value="2시간">2시간</option>
                  <option value="3시간">3시간</option>
                  <option value="4시간">4시간</option>
                </select>
                {/* <S.Error>{formState.errors.total_time?.message}</S.Error> */}
              </S.Wrapper_body_middle_left>
              <S.Wrapper_body_middle_right>
                <S.Label>클래스 최대 인원을 입력해주세요</S.Label>
                <input
                  type="int"
                  placeholder="클래스 최대 인원을 입력해주세요"
                  {...register("class_mNum")}
                  defaultValue={props.data?.fetchClassDetail[0].class_mNum}
                />
                {/* <S.Error>{formState.errors.class_mNum?.message}</S.Error> */}
              </S.Wrapper_body_middle_right>
            </S.Wrapper_body_middle>
            <S.Label>클래스 가격을 입력해주세요</S.Label>
            <input
              type="int"
              placeholder="숫자만 입력해주세요"
              {...register("price")}
              defaultValue={props.data?.fetchClassDetail[0].price}
            />
            {/* <S.Error>{formState.errors.price?.message}</S.Error> */}

            <S.Label>클래스 위치를 입력해주세요</S.Label>
            <S.Wrapper_body_map>
              <S.Map id="map" />

              <S.Wrapper_body_map_right>
                <S.Wrapper_body_map_right_top>
                  {/* <S.AddressInput /> */}
                  <input
                    type="text"
                    readOnly
                    value={
                      fulladdress !== ""
                        ? fulladdress ?? ""
                        : props.data?.fetchClassDetail[0].address ?? ""
                    }
                  />
                  <S.AddressBtn type="button" onClick={onToggleModal}>
                    주소 검색
                  </S.AddressBtn>
                </S.Wrapper_body_map_right_top>

                <S.Wrapper_body_map_right_bottom>
                  <S.AddressDetail_text>상세주소 입력</S.AddressDetail_text>
                  <input
                    type="text"
                    placeholder="상세주소를 입력해주세요"
                    {...register("address_detail")}
                    defaultValue={
                      props.data?.fetchClassDetail[0].address_detail
                    }
                  />
                </S.Wrapper_body_map_right_bottom>
              </S.Wrapper_body_map_right>
            </S.Wrapper_body_map>
            {/* <S.Error>에러</S.Error> */}
            <S.Label>클래스 세부내용을 입력해주세요</S.Label>
            <ReactQuill
              style={{
                width: "730px",
                height: "431px",
                marginBottom: "75px",
              }}
              onChange={onChangeContents}
              placeholder="클래스 세부내용을 입력해주세요"
              defaultValue={props.data?.fetchClassDetail[0].content}
            />
            {/* <S.Error>{formState.errors.content?.message}</S.Error> */}

            <S.Label>클래스 일정을 선택주해세요</S.Label>
            {/* ------------ */}

            {/* 달력 */}
            {/* <MultipleDatePicker
              onSubmit={handleDateSelect}
              minDate={new Date()} // 현재보다 이전 날짜 선택 불가
              {...register("date")}
            />

            <S.DatelistWrapper>
              {selectedDates.map((date) => (
                <S.Datelist key={date.toISOString()}>
                  {date.toLocaleDateString()}
                </S.Datelist>
              ))}
            </S.DatelistWrapper> */}
            {/* <S.Error>에러</S.Error> */}

            {/* ------------ */}
            {/* <S.Error>에러</S.Error> */}
            <S.Label>입금 계좌</S.Label>
            <input
              type="text"
              placeholder="'-' 빼고 숫자만 입력해주세요."
              {...register("accountNum")}
              defaultValue={props.data?.fetchClassDetail[0].accountNum}
            />
            {/* <S.Error>{formState.errors.accountNum?.message}</S.Error> */}

            <S.BankWrapper>
              <div>
                <S.Label>예금주</S.Label>
                <input
                  type="text"
                  placeholder="예금주를 작성해주세요"
                  {...register("accountName")}
                  defaultValue={props.data?.fetchClassDetail[0].accountName}
                />
                {/* <S.Error>{formState.errors.accountName?.message}</S.Error> */}
              </div>

              <div>
                <S.Label>입금 은행</S.Label>
                <input
                  type="text"
                  placeholder="입금 은행을 작성해주세요"
                  {...register("bankName")}
                  defaultValue={props.data?.fetchClassDetail[0].bankName}
                />
                {/* <S.Error>{formState.errors.bankName?.message}</S.Error> */}
              </div>
            </S.BankWrapper>
            <S.BtnWrapper>
              <S.CancelBtn>취소</S.CancelBtn>
              <S.SubmitBtn type="submit">
                {props.isEdit ? "수정" : "등록"}
              </S.SubmitBtn>
            </S.BtnWrapper>
          </S.Wrapper_body>
        </form>
      </S.Wrapper>
    </>
  );
}
