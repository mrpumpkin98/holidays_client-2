import { useState } from "react";
// import MultipleDatePicker from "react-multiple-datepicker";
import * as S from "../../units/classPage/write/classWrite.styles";

export default function Calendar() {
  // --------------------------------------------------------

  // 달력
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateSelect = (dates: any) => {
    setSelectedDates(dates);
    console.log(dates);
  };

  return (
    <>
      ^-^
      {/* <MultipleDatePicker
        onSubmit={handleDateSelect}
        minDate={new Date()} // 현재보다 이전 날짜 선택 불가
        // {...register("date")} // <- 이 register를 classWrite.index.tsx로 옮겨야하는데 어떻게 옮기지?????
      />

      <S.DatelistWrapper>
        {selectedDates.map((date) => (
          <S.Datelist key={date.toISOString()}>
            {date.toLocaleDateString()}
          </S.Datelist>
        ))}
      </S.DatelistWrapper> */}
    </>
  );
}
