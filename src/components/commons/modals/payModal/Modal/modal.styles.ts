import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 9999;
`;

export const Wrapper = styled.div`
  width: 40vw;
  /* height: 60vh; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  width: 35vw;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

export const DivideLine = styled.div`
  width: 35vw;
  border: 0.01rem solid;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const PaymentWrapper = styled.div`
  width: 35vw;
  display: flex;
  justify-content: space-between;
`;

export const PaymentBtn = styled.button`
  width: 15vw;
  height: 3vh;

  border-radius: 3px;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 10vw;
  height: 5vh;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background: #f2f2f2;
  }
`;
