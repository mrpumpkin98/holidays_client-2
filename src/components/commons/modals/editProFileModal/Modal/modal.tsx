import React from "react";
import * as S from "./modal.styles";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <S.ModalWrapper>
      {children}
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>유저 정보 수정</S.Title>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.Labal>계정 ID</S.Labal>
          <S.Contents>sju4486@naver.com</S.Contents>
          <S.Labal>이름(닉네임)</S.Labal>
          <S.ContentsInput />
          <S.Labal>전화번호</S.Labal>
          <S.ContentsInputWrapper>
            <S.ContentsInput />
            <S.ContentsInputButton className="GetCertified">
              인증 받기
            </S.ContentsInputButton>
          </S.ContentsInputWrapper>
          <S.ContentsInputWrapper>
            <S.ContentsInput />
            <S.ContentsInputButton className="AuthenticationCheck">
              인증번호확인
            </S.ContentsInputButton>
          </S.ContentsInputWrapper>
          <S.ButtonWrapper>
            <S.Button className="Cancel" onClick={onClose}>
              취소
            </S.Button>
            <S.Button className="Edit">수정하기</S.Button>
          </S.ButtonWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
