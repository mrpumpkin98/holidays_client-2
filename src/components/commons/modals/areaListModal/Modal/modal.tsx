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
          <S.Title>지역</S.Title>
          <S.Close onClick={onClose} />
        </S.TitleWrapper>
        <S.DivideLine />
        <S.ContentsWrapper>
          <S.Contents>지역 전체</S.Contents>
          <S.Contents>서울</S.Contents>
          <S.Contents>세종</S.Contents>
          <S.Contents>강원</S.Contents>
          <S.Contents>인천</S.Contents>
          <S.Contents>경기</S.Contents>
          <S.Contents>충북</S.Contents>
          <S.Contents>충남</S.Contents>
          <S.Contents>경북</S.Contents>
          <S.Contents>대전</S.Contents>
          <S.Contents>대구</S.Contents>
          <S.Contents>전북</S.Contents>
          <S.Contents>경남</S.Contents>
          <S.Contents>울산</S.Contents>
          <S.Contents>광주</S.Contents>
          <S.Contents>부산</S.Contents>
          <S.Contents>전남</S.Contents>
          <S.Contents>제주</S.Contents>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
