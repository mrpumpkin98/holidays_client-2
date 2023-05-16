import * as S from "./madeClass.styles";

export default function MypagePoint() {
  return (
    <S.Wrapper>
      <S.ListNameIconWrapper>
        <S.ListName>내가 신청한 클래스</S.ListName>
        <S.Icon src="/myPage/basket.png" />
      </S.ListNameIconWrapper>
      <S.Line />
      <S.Box>
        <S.Emoji>🤔</S.Emoji>
        <S.Text>아직 신청한 클래스가 없어요</S.Text>
        <S.MainText>클래스를 찾아 보실까요?</S.MainText>
        <S.Button>클래스 찾아보기</S.Button>
      </S.Box>
    </S.Wrapper>
  );
}
