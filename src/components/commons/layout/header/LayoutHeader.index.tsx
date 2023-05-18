import { useRouter } from "next/router";
import * as S from "./LayoutHeader.styles";
import Backdrop from "../../../commons/modals/writePostModal/Backdrop/Backdrop";
import Modal1 from "../../../commons/modals/writePostModal/Modal/modal";
import Modal2 from "../../../commons/modals/myPageModal/Modal/modal";
import { useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const [userName, setContents] = useState(false);
  const onClickLogIn = () => {
    setContents(true);
  };
  const onClickLogOut = () => {
    setContents(false);
  };

  const NAVIGATION_MENUS = [
    { name: "클래스", page: "/classPage" },
    { name: "사랑방", page: "/communityPage" },
    { name: "메거진", page: "/magazinePage" },
  ];

  const onClickMenu = (event: any): void => {
    void router.push(event.currentTarget.id);
  };

  // 메인페이지 이동

  const onClickMain = (event: any): void => {
    void router.push("/");
  };

  // 글쓰기 모달기능

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  // 내정보 모달기능

  const [showModal2, setShowModal2] = useState(false);

  const handleModalOpen2 = (): void => {
    setShowModal2(true);
  };

  const handleModalClose2 = (): void => {
    setShowModal2(false);
  };

  return (
    <S.Wrapper>
      {showModal && <Modal1 onClose={handleModalClose} />}
      {showModal && <Backdrop onClick={handleModalClose} />}
      {showModal2 && (
        <Modal2 onClose={handleModalClose2} onLogout={onClickLogOut} />
      )}
      {showModal2 && <Backdrop onClick={handleModalClose2} />}
      <S.InnerWrapper>
        <S.Logo src="/images/logo.png" onClick={onClickMain} />
        <S.NaviWrapper>
          {NAVIGATION_MENUS.map((el) => (
            <S.MenuWrapper key={el.page}>
              <S.Menu id={el.page} onClick={onClickMenu}>
                {el.name}
              </S.Menu>
            </S.MenuWrapper>
          ))}
        </S.NaviWrapper>
        {userName ? (
          <S.ButtonTie>
            <S.Icon src="/images/bell.png" />
            <S.Icon src="/images/user.png" onClick={handleModalOpen2} />
            <S.InnerButton className="OrangeButton" onClick={handleModalOpen}>
              글쓰기
            </S.InnerButton>
          </S.ButtonTie>
        ) : (
          <S.ButtonTie>
            <S.InnerButton onClick={onClickLogIn}>로그인</S.InnerButton>
            <S.InnerButton className="OrangeButton">회원가입</S.InnerButton>
          </S.ButtonTie>
        )}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
