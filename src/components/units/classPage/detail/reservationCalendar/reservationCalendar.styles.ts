import styled from "@emotion/styled";
import { InputNumber } from "antd";
import { DatePicker, Space } from "antd";

export const Wrapper = styled.div`
  width: 341px;

  /* height: 328px; */
  box-shadow: 0px 0px 7px gray;
  border-radius: 20px;
  position: sticky;
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents = styled.div`
  width: 291px;
  /* background-color: orange; */
  display: flex;
  flex-direction: column;
  padding: 30px 0px 30px 0px;
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 17px;
`;

// 클래스 일정(달력)
export const Spaced = styled(Space)`
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const { RangePicker } = DatePicker;

export const NumberBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  padding: 0px 0px 20px 0px;
  margin: 10px 0px 30px 0px;

  border-bottom: 1px solid rgba(189, 189, 189, 1);
  /* background-color: pink; */
`;

export const Num = styled.div`
  font-size: 15px;
  /* font-weight: 600; */
  margin-bottom: 5px;
  margin-right: 20px;
`;

export const Number = styled.input`
  margin-bottom: 10px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

export const Number2 = styled.div`
  font-size: 15px;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const Row = styled.div`
  /* background-color: pink; */
  width: 291px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div`
  border-top: 1px solid rgba(189, 189, 189, 1);
  margin: 30px 0px 30px 0px;
`;

export const Num2 = styled.div`
  font-size: 17px;
  /* font-weight: 600; */
`;

export const Price = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const Sum = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

// 달력
export const Calendar = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

// 예약하기 버튼
export const BtnWrapper = styled.button`
  background-color: #f28316;
  color: #ffffff;
  font-size: 15px;

  width: 291px;
  height: 50px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 0px 25px 0px;

  cursor: pointer;

  :hover {
    background-color: #e97100;
    color: #ffffff;
  }
`;

// -----------------------
// 모달 css
export const Modal_wrapper = styled.div`
  width: 400px;
  /* background-color: skyblue; */
  display: flex;
  flex-direction: column;
  margin: 25px 0px 25px 40px;
  /* margin: auto; */
`;

export const Modal_row = styled.div`
  /* background-color: yellowgreen; */
  display: flex;
  flex-direction: column;
  /* border: 1px solid gray; */
  padding: 10px 0px 10px 0px;
`;

export const RowText = styled.div`
  /* background-color: tomato; */
  /* width: 80px; */
  font-size: 17px;
  font-weight: 700;
`;

export const RowText2 = styled.div`
  font-size: 17px;
  border: 1px solid rgba(189, 189, 189, 1);
  border-radius: 10px;
  padding: 10px;
  padding-left: 15px;
  margin-top: 5px;
`;
