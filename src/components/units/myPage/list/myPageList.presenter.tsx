
import * as S from "./myPageList.styles";
import { ImyPageListUIProps } from "./myPageList.types";

export default function ClassListUI(props: ImyPageListUIProps) {
  return (
    <S.Wrapper>
      <S.MyBox>
        <S.WelcomeMessage>안녕하세요</S.WelcomeMessage>
        <S.UserName>홍길동님</S.UserName>
        <S.Labal>이메일</S.Labal>
        <S.Infor>sju4486@naver.com</S.Infor>
        <S.Labal>전화 번호</S.Labal>
        <S.Infor>01012341234</S.Infor>
        <S.Button>프로필 수정</S.Button>
      </S.MyBox>
      <S.Line />
      <S.MyPageList>
        {props.listItems.map((item: any, index: any) => (
          <S.MyPageListBox key={index}>
            <S.ListName>{item.name}</S.ListName>
            <S.ListDetailed>{item.detailed}</S.ListDetailed>
          </S.MyPageListBox>
        ))}
      </S.MyPageList>
    </S.Wrapper>
  );
}

