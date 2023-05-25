import { useState } from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import * as S from "./reservationCalendar.styles";
import { Calendar, theme } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
// import { Modal } from "antd";
import type { Dayjs } from "dayjs";

import Modal from "./Modal/modal";
import Backdrop from "./Modal/Backdrop";
// import Calendar from "../../../../commons/calendar";

export default function CalendarUI() {
  // 예약하기 버튼 눌렀을 때 뜨는 모달
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  // ----------------

  // // 달력 크기 지정
  // const [size] = useState<SizeType>("large");

  // // 일정 onchange
  // const onChangeDate = (dates: any, dateStrings: [string, string]) => {
  //   console.log("Selected Range:", dates);
  //   console.log("Range Strings:", dateStrings);
  // };

  // 인원 onchange
  const onChangeNumber = (value: number) => {
    console.log("인원", value);
  };

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

    const year = value.year();
    const month = value.month() + 1;

    return (
      <div style={headerStyle}>
        <div>
          {year}년 {month}월
        </div>
        <div>
          <select
            value={String(month)}
            onChange={(e) => onChange(value.month(Number(e.target.value)))}
          >
            {monthOptions}
          </select>
        </div>
      </div>
    );
  };

  // 달력 높이조정(추가 end)
  // --------------

  return (
    <>
      <S.Wrapper>
        {/* ------------ */}

        {showModal && <Modal onClose={handleModalClose} />}
        {showModal && <Backdrop onClick={handleModalClose} />}

        {/* ------------ */}

        <S.Contents>
          <S.Text>
            <S.Text>요금을 확인하려면 날짜를</S.Text>
            <S.Text>입력하세요.</S.Text>
          </S.Text>

          {/* -----달력------- */}
          <S.Calendar style={wrapperStyle}>
            <Calendar
              fullscreen={false}
              onPanelChange={onPanelChange}
              headerRender={headerRender} // 추가(높이조정)
            />
          </S.Calendar>
          {/* -----달력------- */}

          <S.NumberBox>
            <S.Num>인원</S.Num>
            {/* <S.Number
              size="large"
              min={1}
              max={100}
              defaultValue={1}
              // onChange={onChangeNumber}
            /> */}
            <S.Number
              type="int"
              placeholder="인원을 입력해주세요"
              // {...register("class_mNum")}
              // defaultValue={props.data?.fetchClassDetail.class_mNum}
            />
            <S.Number2>명</S.Number2>
          </S.NumberBox>

          <S.Row>
            <S.Num2>1명</S.Num2>
            <S.Price>₩ 625,730</S.Price>
          </S.Row>

          <S.Line />

          <S.Row>
            <S.Sum>총 합계</S.Sum>
            <S.Price>₩ 714,065</S.Price>
          </S.Row>
        </S.Contents>

        <S.BtnWrapper onClick={handleModalOpen}>예약하기</S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
