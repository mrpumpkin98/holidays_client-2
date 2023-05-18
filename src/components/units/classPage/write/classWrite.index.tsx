import { useState } from "react";
import * as S from "./classWrite.styles";
import type { SizeType } from "antd/es/config-provider/SizeContext";

import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

// import MultipleDatePicker from "react-multiple-datepicker";
import DaumPostcodeEmbed from "react-daum-postcode"; //  우편번호
import type { Address } from "react-daum-postcode";
import { UseMutationCreateClass } from "../../../commons/hooks/useMutations/class/useMutationCreateClass";

export default function ClassWrite() {
  // 우편 번호
  const [isOpen, setIsOpen] = useState(false);

  // 우편번호 모달창
  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    onToggleModal();
  };

  // -------------

  // // 달력
  // const [selectedDates, setSelectedDates] = useState([]);

  // const handleDateSelect = (dates: any) => {
  //   setSelectedDates(dates);
  //   console.log(dates);
  // };

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

  // -------------

  // 카테고리 onchange
  const onChangeCategory = (value: string) => {
    console.log("카테고리", value);
  };

  // 소요시간 onchange
  const onChangeTime = (value: string) => {
    console.log("소요시간", value);
  };

  // 최대인원 onchange
  const onChangeNumber = (value: number) => {
    console.log("최대인원", value);
  };

  // --------
  // 등록하기 버튼
  const { onClickSubmit } = UseMutationCreateClass();

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
          <S.Wrapper_header_left>신규 클래스 개설</S.Wrapper_header_left>
        </S.Wrapper_header>

        <S.Wrapper_body>
          <S.Label>카테고리를 선택해주세요</S.Label>
          <S.Option
            size="large"
            defaultValue="교육"
            // onChange={onChangeCategory}
            options={[
              { value: "1", label: "교육" },
              { value: "2", label: "여가" },
              { value: "3", label: "운동" },
              { value: "4", label: "요리" },
            ]}
          />
          {/* <S.Error>에러</S.Error> */}
          <S.Label>클래스 이름을 입력해주세요</S.Label>
          <S.TextInput type="text" placeholder="클래스 이름을 입력해주세요" />
          {/* <S.Error>에러</S.Error> */}
          <S.Label>클래스 한줄요약을 입력해주세요</S.Label>
          <S.TextInput
            type="text"
            placeholder="클래스 한줄요약을 입력해주세요"
          />
          {/* <S.Error>에러</S.Error> */}
          <S.Label>대표 이미지를 올려주세요</S.Label>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
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
          <S.Wrapper_body_middle>
            <S.Wrapper_body_middle_left>
              <S.Label>클래스 소요 시간을 입력해주세요</S.Label>
              {/* <S.Time size="large" onChange={onChangeTime} /> */}
              <S.Option
                size="large"
                defaultValue="1시간"
                // onChange={onChangeTime}
                options={[
                  { value: "1시간", label: "1시간" },
                  { value: "2시간", label: "2시간" },
                  { value: "3시간", label: "3시간" },
                  { value: "4시간", label: "4시간" },
                ]}
              />
              {/* <S.Error>에러</S.Error> */}
            </S.Wrapper_body_middle_left>
            <S.Wrapper_body_middle_right>
              <S.Label>클래스 최대 인원을 선택해주세요</S.Label>
              <S.Number
                size="large"
                min={1}
                max={100}
                defaultValue={1}
                // onChange={onChangeNumber}
              />
              {/* <S.Error>에러</S.Error> */}
            </S.Wrapper_body_middle_right>
          </S.Wrapper_body_middle>
          <S.Label>클래스 가격을 입력해주세요</S.Label>
          <S.TextInput type="int" placeholder="숫자만 입력해주세요" />
          {/* <S.Error>에러</S.Error> */}
          <S.Label>클래스 위치를 입력해주세요</S.Label>
          <S.Wrapper_body_map>
            <S.Map>map</S.Map>

            <S.Wrapper_body_map_right>
              <S.Wrapper_body_map_right_top>
                <S.AddressInput />
                <S.AddressBtn onClick={onToggleModal}>
                  우편번호 검색
                </S.AddressBtn>
              </S.Wrapper_body_map_right_top>

              <S.Wrapper_body_map_right_bottom>
                <S.AddressDetail_text>상세주소 입력</S.AddressDetail_text>
                <S.AddressDetail placeholder="상세주소를 입력해주세요" />
              </S.Wrapper_body_map_right_bottom>
            </S.Wrapper_body_map_right>
          </S.Wrapper_body_map>
          {/* <S.Error>에러</S.Error> */}
          <S.Label>클래스 세부내용을 입력해주세요</S.Label>
          <S.Contents />
          {/* <S.Error>에러</S.Error> */}
          <S.Label>클래스 일정을 선택주해세요</S.Label>
          {/* ------------ */}

          {/* 달력 */}
          {/* <MultipleDatePicker
            onSubmit={handleDateSelect}
            minDate={new Date()} // 현재보다 이전 날짜 선택 불가
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
          <S.TextInput type="int" placeholder="'-' 빼고 숫자만 입력해주세요." />
          {/* <S.Error>에러</S.Error> */}
          <S.BankWrapper>
            <div>
              <S.Label>예금주</S.Label>
              <S.TextInput2 type="text" placeholder="예금주를 작성해주세요" />
              {/* <S.Error>에러</S.Error> */}
            </div>

            <div>
              <S.Label>입금 은행</S.Label>
              <S.TextInput2
                type="text"
                placeholder="입금 은행을 작성해주세요"
              />
              {/* <S.Error>에러</S.Error> */}
            </div>
          </S.BankWrapper>
          <S.BtnWrapper>
            <S.CancelBtn>취소</S.CancelBtn>
            <S.SubmitBtn>등록</S.SubmitBtn>
          </S.BtnWrapper>
        </S.Wrapper_body>
      </S.Wrapper>
    </>
  );
}
