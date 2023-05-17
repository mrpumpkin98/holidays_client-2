import styled from "@emotion/styled";
import { SlideBottom } from "../../../../commons/styles/keyframes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1215px;
  margin-top: 80px;
`;

export const Title = styled.h1`
  font-size: 25px;
  margin-top: 30px;
`;

export const InputBox = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  font-size: 15px;
  padding-left: 15px;
  margin-top: 20px;
  :focus {
    outline: none;
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  width: 1215px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-collapse: collapse;
  margin-top: 30px;
  margin-bottom: 100px;
  animation: ${SlideBottom} 0.7s ease-in-out both;
`;

export const Posts = styled.div`
  width: 288px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Template = styled.article`
  width: 287px;
  height: 177px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const PostImg = styled.img`
  width: 287px;
  height: 177px;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.08);
  }
`;

export const PostTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 3px;
  width: 240px;
`;

export const PostContent = styled.div``;

export const PostInfo = styled.div``;

export const Address = styled.div`
  color: #757575;
  font-size: 12px;
`;

export const AvatarContentTie = styled.div``;

export const Content = styled.div`
  font-size: 14px;
`;

export const PriceTie = styled.div``;

export const Price = styled.div`
  font-size: 12px;
  color: #757575;
`;
