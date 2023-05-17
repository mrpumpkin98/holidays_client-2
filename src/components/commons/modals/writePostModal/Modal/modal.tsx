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
          <S.Title>서비스</S.Title>
          <S.Close onClick={onClose} />
        </S.TitleWrapper>
        <S.DivideLine />
        <S.ContentsWrapper>
          <S.Contents>서비스 전체</S.Contents>
          <S.Contents>레슨</S.Contents>
          <S.Contents>홈/리빙</S.Contents>
          <S.Contents>이벤트</S.Contents>
          <S.Contents>비즈니스</S.Contents>
          <S.Contents>디자인/개발</S.Contents>
          <S.Contents>건강/미용</S.Contents>
          <S.Contents>기타</S.Contents>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
