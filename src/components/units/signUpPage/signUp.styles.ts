import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mobile} {
    width: 100vw;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 100px;
  width: 640px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 5px gray;

  @media ${mobile} {
    width: 90vw;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 52px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;

  @media ${mobile} {
    font-size: 2rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 40px;
`;

export const Label = styled.div`
  font-size: 24px;
  font-weight: 600px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.div`
  font-size: 0.7rem;
  color: #888888;
  margin-bottom: 0px;
`;

export const SubtitleLine = styled.div`
  width: 100%;
  border: 0.3px dotted #888888;
  margin-bottom: 1vh;
`;

export const defaultInput = styled.input`
  width: 100%;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border: none;
  background: #f5f5f5;
`;

export const BirthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Year = styled.input`
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border: none;
  background: #f5f5f5;
  width: calc(100% / 3.5);
`;

export const Month = styled.input`
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border: none;
  background: #f5f5f5;
  width: calc(100% / 3.5);
`;

export const Day = styled.input`
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border: none;
  background: #f5f5f5;
  width: calc(100% / 3.5);
`;

export const VerifyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px 10px 0px;
`;

export const VerifyNumber = styled.input`
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  margin-right: 10px;
  border: none;
  background: #f5f5f5;
  width: calc(100% / 2.7);
`;

export const VerifyButton = styled.button`
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: calc(100% / 3);
  cursor: pointer;
  &:hover {
    background: orange;
    color: white;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media ${mobile} {
    width: 65vw;
    margin-left: 12vw;
  }
`;

export const SignUpButton = styled.button`
  width: 485px;
  height: 50px;
  border: none;
  font-size: 24px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: orange;
    color: white;
  }
`;

export const VerifyFinished = styled.div`
  width: 485px;
  font-size: 16px;
  color: orange;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
