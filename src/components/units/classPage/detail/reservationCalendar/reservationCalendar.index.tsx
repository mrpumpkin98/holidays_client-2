import { useEffect, useState } from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import * as S from "./reservationCalendar.styles";
import { Calendar, theme } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
// import { Modal } from "antd";
import type { Dayjs } from "dayjs";

import Modal from "./Modal/modal";
import Backdrop from "./Modal/Backdrop";
import { UseQueryFetchClassSchedules } from "../../../../commons/hooks/useQueries/class/useQueryFetchClassSchedules";
import { UseMutationReservation } from "../../../../commons/hooks/useMutations/class/useMutationCreateReservation";
import { useForm } from "react-hook-form";
import {
  IFormData,
  IReservationCreateProps,
} from "./reservationCalendar.types";
// import Calendar from "../../../../commons/calendar";

export default function CalendarUI(props: IReservationCreateProps) {
  const [date, setDate] = useState<string>();

  // -------
  const { data } = UseQueryFetchClassSchedules();
  console.log(data, "!!!!!!!");

  const { onClickReservation } = UseMutationReservation();

  const { register, handleSubmit, setValue } = useForm<IFormData>({
    defaultValues: {
      // res_date: "test!",
      // personnel: "99",

      res_date: date,
      personnel: props.personnel,
    },
    mode: "onChange",
    // mode: "onSubmit",
  });

  // 예약하기 제출
  const onSubmitForm = async (data: IFormData) => {
    const { ...value } = data;
    // setValue("res_date", date); // 추가
    console.log("res_date", data);
    console.log(headerRender, "1231242124");
    await onClickReservation(value);
    // await onClickReservation(data, date);
  };

  // ----------------

  // 예약하기 버튼 눌렀을 때 뜨는 모달
  // const [showModal, setShowModal] = useState(false);

  // const handleModalOpen = (): void => {
  //   setShowModal(true);
  // };

  // const handleModalClose = (): void => {
  //   setShowModal(false);
  // };

  // ----------------

  // // 달력 크기 지정
  // const [size] = useState<SizeType>("large");

  useEffect(() => {
    // date 변수가 변경될 때마다 defaultValues를 업데이트
    setValue("res_date", date);
  }, [date, setValue]);

  // 달력
  const { token } = theme.useToken();

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const wrapperStyle: React.CSSProperties = {
    width: 291,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  // -------
  // 달력 높이조정(추가 start)
  const headerStyle: React.CSSProperties = {
    height: "32px", // header 높이 조절
    lineHeight: "32px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const headerRender = ({ value, type, onChange, onTypeChange }: any) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    for (let i = start; i < end; i++) {
      monthOptions.push(<option key={`${i}`}>{i + 1}</option>);
    }

    const year = String(value.year()).slice(-2);
    const month = String(value.month() + 1).padStart(2, "0");
    const day = String(value.date()).padStart(2, "0");

    const date = year + month + day;

    setDate(date);

    return (
      <div style={headerStyle}>
        <div>
          {year}년 {month}월
        </div>
        <div>
          {/* <select value={date} onChange={(value: string) => setDate(value)}> */}
          <select value={date} onChange={(event) => setDate(date)}>
            {monthOptions}
          </select>
        </div>
      </div>
    );
  };

  // --------------

  return (
    <>
      <S.Wrapper>
        {/* ------------ */}

        {/* {showModal && <Modal onClose={handleModalClose} />}
        {showModal && <Backdrop onClick={handleModalClose} />} */}

        {/* ------------ */}

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Contents>
            <S.Text>
              <S.Text>요금을 확인하려면 날짜를</S.Text>
              <S.Text>선택하세요.</S.Text>
            </S.Text>

            {/* -----달력------- */}
            <S.Calendar style={wrapperStyle}>
              <Calendar
                fullscreen={false}
                onPanelChange={onPanelChange}
                // onChange={onChangeDate}
                headerRender={headerRender} // 추가(높이조정)
              />
            </S.Calendar>
            {/* -----달력------- */}

            <S.NumberBox>
              <S.Num>인원</S.Num>
              <S.Number
                type="int"
                placeholder="인원을 입력해주세요"
                {...register("personnel")}
                // defaultValue={props.data?.fetchClassDetail.class_mNum}
              />
              <S.Number2>명</S.Number2>
            </S.NumberBox>

            {/* <S.Row>
              <S.Num2>1명</S.Num2>
              <S.Price>₩ 625,730</S.Price>
            </S.Row> */}

            {/* <S.Line /> */}

            {/* <S.Row>
              <S.Sum>총 합계</S.Sum>
              <S.Price>₩ 714,065</S.Price>
            </S.Row> */}
          </S.Contents>

          <S.BtnWrapper
            // onClick={handleModalOpen}
            // onClick={onClickReservation}
            type="submit"
          >
            예약하기
          </S.BtnWrapper>
        </form>
      </S.Wrapper>
    </>
  );
}
