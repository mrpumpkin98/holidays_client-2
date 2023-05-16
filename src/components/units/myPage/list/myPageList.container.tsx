import { useState } from "react";
import MyPageListUI from "./myPageList.presenter";

export default function StaticRoutingPage() {
  const [listItems, setListItems] = useState([
    {
      name: "내가 만든 클래스",
      detailed: "내가 만든 클래스로 수익을 만들어보세요",
    },
    {
      name: "내가 신청한 클래스",
      detailed: "취향에 맞는 클래스를 추천해 드려요",
    },
    {
      name: "위시리스트",
      detailed: "내가 픽한 클래스",
    },
    {
      name: "내 사랑방 리스트",
      detailed: "내가 작성한 사랑방 리스트",
    },
    {
      name: "예약 관리",
      detailed: "클래스 예약 신청을 확인해주세요",
    },
    {
      name: "회원 탈퇴",
      detailed: "홀리데이즈 회원 탈퇴",
    },
  ]);

  return (
    <>
      <MyPageListUI listItems={listItems} />
    </>
  );
}
