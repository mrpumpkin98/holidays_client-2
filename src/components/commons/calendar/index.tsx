import { SetStateAction, useState } from "react";
import MultipleDatePicker from "react-multiple-datepicker";
import * as S from "../../units/classPage/write/classWrite.styles";
import { Dispatch } from "@toast-ui/editor";

interface ICalendarProps {
  selectedDates: any[];
  setSelectedDates: React.Dispatch<React.SetStateAction<never[]>>;
}

export default function Calendar(props: ICalendarProps) {
  // const { selectedDates, setSelectedDates } = props;

  // 달력
  // const [selectedDates, setSelectedDates] = useState([]);

  const handleDateSelect = (dates: any) => {
    console.log("=======");
    const formattedDates = dates.map((date: any) => formatDate(date));
    for (let i = 0; i < formattedDates.length; i++) {
      props.selectedDates.push(formattedDates[i]);
    }
    console.log("formattedDates: ", formattedDates);
    console.log("props.selectedDates: ", props.selectedDates);
    console.log("=======");
  };

  const formatDate = (date: any) => {
    const year = date.getFullYear().toString().slice(2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}${month}${day}`;
  };

  // -------

  return (
    <>
      <MultipleDatePicker
        onSubmit={handleDateSelect}
        minDate={new Date()} // 현재보다 이전 날짜 선택 불가
      />

      <S.DatelistWrapper>
        {props.selectedDates.map((date) => (
          <S.Datelist key={date}>{date}</S.Datelist>
        ))}
      </S.DatelistWrapper>
    </>
  );
}
