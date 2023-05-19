import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  /* height: 1000px;  */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  margin-top: 10vh;

  @media ${mobile} {
    /* width: max-content; */
    padding-top: 8rem;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 270px;
  height: 50px;
  margin-bottom: 10px;

  @media ${mobile} {
    width: 55vw;
    height: 10vh;
    margin-bottom: 1rem;
  }
`;
export const HeaderTitle = styled.div`
  font-size: 24px;

  @media ${mobile} {
    font-size: 1.2rem;
  }
`;
export const Editor = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  @media ${mobile} {
    width: 90vw;
    margin-top: 1.5rem;
  }
`;
export const divideLine = styled.div`
  width: 100vw;
  border: 1px solid;
  margin-bottom: 30px;

  @media ${mobile} {
    width: 90vw;
    border: 0.04em solid;
  }
`;
export const Body = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  @media ${mobile} {
    width: 95vw;
    padding-bottom: 3rem;
  }
`;
export const ContentsLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 100px;
  padding-left: 100px;

  @media ${mobile} {
    width: 95vw;
    padding-left: 0.5rem;
    margin-top: 5vh;
  }
`;
export const ContentsRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 100px;

  @media ${mobile} {
    width: 95vw;
    padding-left: 0rem;
    padding-right: 0rem;
    margin-top: 2rem;
    justify-content: center;
  }
`;
export const ContentsImageLeft = styled.img`
  width: 50vw;
  height: 40vh;
  margin-right: 100px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.008);
  }

  @media ${mobile} {
    width: 95vw;
    height: 40vh;
    padding-left: 0rem;
    margin-right: 0px;
    /* padding-right: 10vw; */
  }
`;
export const ContentsImageRight = styled.img`
  width: 30vw;
  height: 40vh;
  margin-left: 100px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }

  @media ${mobile} {
    width: 50vw;
    height: 70vh;
    margin-left: 0px;
    /* margin-right: 23vw; */
  }
`;
export const ContentsTextWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 700px; */
  justify-content: flex-end;
  padding-bottom: 50px;
  width: 30vw;

  @media ${mobile} {
    display: none;
  }
`;
export const ContentsTextWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 110px;
  width: 40vw;

  @media ${mobile} {
    display: none;
  }
`;
export const ContentsLabelLeft = styled.div`
  font-size: 48px;
`;
export const ContentsRemarksLeft = styled.div`
  font-size: 36px;
  margin-top: 20px;
  font-weight: 335;
`;
export const ContentsLabelRight = styled.div`
  font-size: 48px;
`;
export const ContentsRemarksRight = styled.div`
  font-size: 36px;
  margin-top: 20px;
  font-weight: 335;
`;
