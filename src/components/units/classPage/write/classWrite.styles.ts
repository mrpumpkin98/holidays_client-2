import styled, { StyledComponent } from "@emotion/styled";
import { Input, Select, InputNumber, TimePicker, SelectProps } from "antd";
import { DatePicker, Space } from "antd";
import { DefaultOptionType } from "antd/es/cascader";
import { BaseOptionType } from "antd/es/select";
import { ReactNode, Ref } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export const Wrapper = styled.div`
  width: 728px;
  display: flex;
  flex-direction: column;
  margin: auto; // 가운데 정렬
`;

export const Wrapper_header = styled.div`
  width: 728px;

  margin-top: 150px;
  margin-bottom: 30px;
`;

export const Wrapper_header_left = styled.div`
  display: flex;
  align-items: center;

  font-size: 30px;
  font-weight: 700;
`;

// 예금주, 입금 은행
export const BankWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextInput2 = styled(Input)`
  width: 354px;
  height: 61px;
  margin-bottom: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 270px;
  justify-content: space-between;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
`;

// 취소 버튼
export const CancelBtn = styled.div`
  background: rgba(202, 190, 179, 1);

  /* width: 95px; */
  width: 120px;
  height: 50px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #ffffff;

  cursor: pointer;

  :hover {
    background: #bbb0a6;
  }
`;

// 등록 버튼
export const SubmitBtn = styled.button`
  background-color: #f28316;
  color: #ffffff;
  border-radius: 5px;

  /* width: 95px; */
  width: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;

  cursor: pointer;

  :hover {
    background-color: #e97100;
    color: #ffffff;
  }
`;

// 작성 시작
export const Wrapper_body = styled.div``;

export const Label = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 1);
  padding: 30px 0px 20px 0px;
`;

// type qqq = UseFormRegisterReturn;

// type IOptions = StyledComponent<
//   qqq &
//     SelectProps<unknown, BaseOptionType | DefaultOptionType> & {
//       children?: ReactNode;
//     } & {
//       ref?: Ref<BaseSelectRef> | undefined;
//     }
// >;

// 카테고리, 소요시간
export const Option = styled(Select)`
  /* width: 100px; */
  width: 150px;
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

  cursor: pointer;
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
export const DatelistWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Datelist = styled.div`
  margin-top: 5px;
  font-weight: 600;
`;

export const { RangePicker } = DatePicker;
