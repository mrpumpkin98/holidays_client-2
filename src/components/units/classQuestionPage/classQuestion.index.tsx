import * as S from "./classQuestion.styles";

export default function ClassQuestionUI() {
  return (
    <>
      <S.Wrapper>
        <S.Wrapper_body>
          <S.Wrapper_body_header>문의하기</S.Wrapper_body_header>

          <S.ReviewBox>
            <S.TextAreaaa
              rows={10}
              maxLength={300}
              placeholder="문의 시 관리자에게 카카오톡으로 전송됩니다."
            />
            <S.ButtonWrapper>
              <S.Length>77 / 300</S.Length>

              <S.ReviewWriteBtn>문의하기</S.ReviewWriteBtn>
            </S.ButtonWrapper>
          </S.ReviewBox>
        </S.Wrapper_body>
        {/* <S.Error>에러</S.Error> */}
      </S.Wrapper>
    </>
  );
}
