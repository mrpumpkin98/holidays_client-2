import { useRouter } from "next/router";
import * as S from "./LayoutHeader.styles";
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
    { name: "사랑방", page: "/Market" },
    { name: "메거진", page: "/magazinePage" },
  ];

  const onClickMenu = (event: any): void => {
    void router.push(event.currentTarget.id);
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Logo src="/images/logo.png" />
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
            <S.InnerButton onClick={onClickLogOut}>로그아웃</S.InnerButton>
            <S.Icon src="/images/bell.png" />
            <S.Icon src="/images/user.png" />
            <S.InnerButton>마이페이지</S.InnerButton>
            <S.InnerButton className="OrangeButton">글쓰기</S.InnerButton>
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
