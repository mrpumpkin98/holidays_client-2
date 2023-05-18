import React from "react";
import { useAuth01 } from "../../../hooks/useAuths/useAuth01";
import { UseQueryFetchLoginUser } from "../../../hooks/useQueries/user/UseQueryFetchLoginUser";
import * as S from "./modal.styles";

declare const window: typeof globalThis & {
  IMP: any;
};

interface ModalProps {
  onClose: () => void;
}

const PayModal: React.FC<ModalProps> = ({ onClose, children }) => {
  useAuth01();

  const { data } = UseQueryFetchLoginUser();

  const onClickGeneralPay = () => {
    // 일반결제 (이니시스 or 나이스)
  };

  const onClickKakaoPay = () => {
    // 간편결제 (카카오페이)
  };

  return (
    <S.ModalWrapper>
      {children}
      <S.Wrapper>
        <S.Header>결제수단 선택</S.Header>
        <S.DivideLine />
        <S.PaymentWrapper>
          <S.PaymentBtn onClick={onClickGeneralPay}>일반결제</S.PaymentBtn>
          <S.PaymentBtn>카카오페이</S.PaymentBtn>
        </S.PaymentWrapper>
        <S.DivideLine />
        <S.Button className="Cancel" onClick={onClose}>
          취소
        </S.Button>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default PayModal;
