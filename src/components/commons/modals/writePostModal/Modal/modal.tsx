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
        <S.ContentsWrapper>
          <S.Contents>클래스 생성하기</S.Contents>
          <S.Contents>클래스 광고하기</S.Contents>
          <S.Contents>사랑방 글쓰기</S.Contents>
          <S.Contents>예약 관리</S.Contents>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
