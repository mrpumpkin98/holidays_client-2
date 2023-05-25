import styled from "@emotion/styled";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1113px;
  display: flex;
  flex-direction: column;
  margin: auto; // 가운데 정렬
  margin-top: 70px;
`;

export const Wrapper_header = styled.div`
  width: 1113px;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
`;

export const Wrapper_header_top = styled.div`
  height: 59px;
  font-size: 24px;
  font-weight: 700;
`;

export const Wrapper_header_bottom = styled.div`
  font-size: 15px;
  font-weight: 400;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

// 후기 개수
export const Review_count = styled.div`
  font-size: 15px;
`;

export const Wrapper_header_bottom_left = styled.div``;

export const Wrapper_header_bottom_right = styled.div`
  width: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1040px;
`;

// 수정, 삭제 버튼
export const Btn = styled.div`
  font-size: 15px;
  cursor: pointer;
`;

export const Slick = styled.div`
  border: 1px solid black;
  width: 1113px;
  height: 466px;
  border-radius: 15px;
`;

export const Wrapper_body_left = styled.div`
  width: 711px;
`;

export const Wrapper_body_header = styled.div`
  width: 711px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: #000000;
  padding: 40px 0px 20px 0px;
`;

// 빈 하트(찜)
export const Heart = styled(HeartOutlined)`
  width: 18px;
  height: 20px;
  cursor: pointer;
`;

export const Heart_fill = styled(HeartFilled)`
  width: 18px;
  height: 20px;
  cursor: pointer;
`;

export const Wrapper_body_bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper_body_bottom_left = styled.div`
  width: 711px;
`;

// 달력 위치
export const Wrapper_body_bottom_right = styled.div``;

export const Remarks = styled.div`
  color: rgba(189, 189, 189, 1);
  font-size: 13px;
  /* background-color: darkblue; */
  padding: 25px 0px 25px 0px;
`;

export const ClassInfo_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  border-top: 1px solid rgba(189, 189, 189, 1);
  border-bottom: 1px solid rgba(189, 189, 189, 1);
`;

export const ClassInfo_container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 15px 0px 15px 0px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;

  margin-right: 17px;
`;

export const ClassInfo_container_right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 43px;
`;

export const Label = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

export const SubLabel = styled.div`
  font-size: 13px;

  color: rgba(189, 189, 189, 1);
`;

// 클래스 소개
export const Contents_wrapper = styled.div``;

export const Contents = styled.div`
  /* background-color: skyblue; */
  height: 1000px;
`;

// 클래스 위치
export const Wrapper_footer = styled.div`
  margin-top: 100px;
  padding-top: 30px;
  border-top: 1px solid rgba(189, 189, 189, 1);
`;

// 지도
export const Map = styled.div`
  width: 1113px;
  height: 478px;
  background-color: beige;
  border-radius: 5px;
`;

export const Address = styled.div`
  padding: 25px 0px 70px 0px;
  font-size: 17px;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
`;

export const AddressDetail = styled.div`
  font-size: 17px;
  margin-left: 10px;
`;

// ------
export const Wrapper_body_right = styled.div`
  margin-top: 20px;
`;

export const Wrapper_body = styled.div`
  display: flex;
  justify-content: space-between;
`;
