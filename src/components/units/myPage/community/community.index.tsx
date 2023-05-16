import { Button } from "antd";
import { Wrapper } from "../list/myPageList.styles";
import * as S from "./community.styles";

export default function Community() {
  return (
    <S.Wrapper>
      <S.ListNameIconWrapper>
        <S.ListName>내가 만든 클래스</S.ListName>
        <S.Icon src="/myPage/presentation.png" />
      </S.ListNameIconWrapper>
      <S.Line />
      <S.Box>
        <S.Emoji>🤔</S.Emoji>
        <S.Text>아직 만든 클래스가 없어요</S.Text>
        <S.MainText>클래스를 만들어 보실까요?</S.MainText>
        <S.Button>클래스 만들어보기</S.Button>
      </S.Box>
    </S.Wrapper>
  );
}
