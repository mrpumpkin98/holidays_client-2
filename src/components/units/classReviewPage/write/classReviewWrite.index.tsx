import * as S from "./classReviewWrite.styles";

export default function ClassReviewWrite() {
  return (
    <>
      <S.Wrapper>
        <S.Wrapper_body>
          <S.Wrapper_body_header>후기 작성하기</S.Wrapper_body_header>

          <S.Star />
          <S.ReviewBox>
            <S.TextAreaaa
              rows={10}
              maxLength={300}
              placeholder="후기를 작성해주세요"
            />
            <S.ButtonWrapper>
              <S.Length>77 / 300</S.Length>

              <S.ReviewWriteBtn>작성</S.ReviewWriteBtn>
            </S.ButtonWrapper>
          </S.ReviewBox>
        </S.Wrapper_body>
        <S.Error>에러</S.Error>
      </S.Wrapper>
    </>
  );
}
