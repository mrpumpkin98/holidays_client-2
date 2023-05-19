import React from "react";
import * as S from "./modal.styles";
import { selectService } from "../../../../../commons/stores/index";
import { useRecoilState } from "recoil";

interface ModalProps {
  onClose: () => void;
}

const regions = [
  "서비스 전체",
  "레슨",
  "홈/리빙",
  "이벤트",
  "비즈니스",
  "디자인/개발",
  "건강/미용",
  "기타",
];

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const [selectServiceRegion, setSelectServiceRegion] =
    useRecoilState(selectService);

  const handleRegionClick = (region: string) => {
    console.log(region);
    setSelectServiceRegion(region);
    onClose(); // 선택된 region 값을 onClose 함수와 함께 전달
  };

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
          {regions.map((region) => (
            <S.Contents
              key={region}
              onClick={() => handleRegionClick(region)}
              isSelected={selectServiceRegion === region}
            >
              {region}
            </S.Contents>
          ))}
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
