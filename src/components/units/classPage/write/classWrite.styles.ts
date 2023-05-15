import styled from "@emotion/styled";
import { Input, Select, InputNumber, TimePicker } from "antd";
import { DatePicker, Space } from "antd";

export const Wrapper = styled.div`
  width: 728px;
  display: flex;
  flex-direction: column;
  margin: auto; // 가운데 정렬
`;

export const Wrapper_header = styled.div`
  background-color: white;
  width: 728px;
  padding-top: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
`;

export const Wrapper_header_left = styled.div`
  display: flex;
  align-items: center;

  font-size: 30px;
  font-weight: 700;
`;

export const Wrapper_header_right = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// 취소 버튼
export const CancelBtn = styled.div`
  background: rgba(202, 190, 179, 1);

  width: 95px;
  height: 50px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #ffffff;

  cursor: pointer;

  :hover {
    background: rgba(203, 200, 185, 1);
  }
`;

// 등록 버튼
export const SubmitBtn = styled.div`
  background: rgba(242, 131, 22, 1);
  border-radius: 5px;

  width: 95px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #ffffff;

  cursor: pointer;

  :hover {
    background: rgba(255, 148, 44, 1);
  }
`;

// 작성 시작
export const Wrapper_body = styled.div`
  /* background-color: beige; */
  padding-top: 150px;
`;

export const Label = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 1);
  padding: 30px 0px 20px 0px;
`;

// 카테고리, 소요시간
export const Option = styled(Select)`
  width: 100px;
  margin-bottom: 10px;
`;

export const TextInput = styled(Input)`
  width: 728px;
  height: 61px;
  margin-bottom: 10px;
`;

export const Error = styled.div`
  font-size: 16px;
  color: red;
  padding-left: 10px;
  padding-bottom: 30px;
  /* border: 2px solid red; */
`;

// 대표 이미지
export const Img_box = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 250px;
  height: 180px;
  border-radius: 5px;
  margin-right: 17px;
  border: 1px solid rgba(189, 189, 189, 1);
`;

// 클래스 소요 시간, 클래스 최대 인원
export const Wrapper_body_middle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const Wrapper_body_middle_left = styled.div`
  width: 340px;
`;

export const Time = styled(TimePicker)`
  width: 200px;
  margin-bottom: 10px;
`;

export const Number = styled(InputNumber)`
  /* width: 200px; */
  margin-bottom: 10px;
`;

export const Wrapper_body_middle_right = styled.div`
  width: 360px;
`;

// 클래스 위치
export const Wrapper_body_map = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Map = styled.div`
  width: 340px;
  height: 201px;
  border: 1px solid blue;
  border-radius: 5px;
`;

export const Wrapper_body_map_right = styled.div`
  width: 366px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Wrapper_body_map_right_top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddressInput = styled(Input)`
  width: 258px;
  height: 56px;
`;

export const AddressBtn = styled.button`
  width: 106px;
  height: 56px;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
`;

export const Wrapper_body_map_right_bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressDetail_text = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 1);
  padding-bottom: 10px;
`;

export const AddressDetail = styled(Input)`
  height: 56px;
`;

// 클래스 세부 내용
export const Contents = styled.div`
  /* width: 366px; */
  height: 300px;
  border: 1px solid rgba(189, 189, 189, 1);
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
`;

// 클래스 일정(달력)
export const Spaced = styled(Space)`
  margin-bottom: 10px;
`;

export const { RangePicker } = DatePicker;
