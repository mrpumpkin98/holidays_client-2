import * as S from "./withdrawal.styles";

export default function Withdrawal() {
  return (
    <div>
      <S.Wrapper>
        <S.Box>
          <S.TitleTextWrapper>
            <S.Title>작성 가이드</S.Title>
            <S.Text>
              클래스 혹은 제품 홍보 목적의 콘텐츠는 오픈이 불가합니다.
            </S.Text>
            <S.Text>
              사진 첨부 시 용량은 장당 최대 20MB까지 업로드 가능합니다.
            </S.Text>
            <S.Text>타인의 지식재산권을 침해하지 않도록 유의해주세요.</S.Text>
          </S.TitleTextWrapper>
        </S.Box>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Password
            type="text"
            // onChange={props.onChangePassword}
          />
          <S.Error>{/* {props.passwordError} */}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            // onChange={props.onChangeTitle}
            // defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{/* {props.titleError} */}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
          // onChange={props.onChangeContents}
          // defaultValue={props.data?.fetchBoard.contents}
          ></S.Contents>
          <S.Error>{/* {props.contentsError} */}</S.Error>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton>탈퇴하기</S.SubmitButton>
          {/* <B.CancelButton onClick={props.onClickCancel}> */}
          <S.CancelButton>취소하기</S.CancelButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
