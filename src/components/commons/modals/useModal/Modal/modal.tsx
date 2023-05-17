import React from "react";
import * as S from "./modal.styles";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <S.ModalWrapper>
      {children}
      <S.Button className="Cancel" onClick={onClose}>
        취소
      </S.Button>
    </S.ModalWrapper>
  );
};

export default Modal;
