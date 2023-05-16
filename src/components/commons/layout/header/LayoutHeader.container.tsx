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

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Logo src="/images/logo.png" />
        <S.MenuWrapper>
          <S.Menu>클래스</S.Menu>
          <S.Menu>사랑방</S.Menu>
          <S.Menu>메거진</S.Menu>
        </S.MenuWrapper>
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
