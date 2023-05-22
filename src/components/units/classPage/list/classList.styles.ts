import styled from "@emotion/styled";
import { SlideBottom } from "../../../../commons/styles/keyframes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
`;

// Banner

export const Banner = styled.div`
  display: flex;
  margin: auto;
  height: 400px;
  width: 1000px;
  margin-top: 30px;
`;

export const Box = styled.div`
  width: 300px;
  height: 100%;
  opacity: 0.85;
  padding-top: 80px;
`;

export const SearchTitle = styled.div`
  font-weight: 700;
  font-size: 31px;
  cursor: pointer;
`;

export const ServiceAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Service = styled.div`
  width: 160px;
  height: 40px;
  border-radius: 35px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const ServiceText = styled.div`
  font-size: 14px;
`;

export const Expand = styled.img`
  width: 10px;
  height: 10px;
  margin-top: 2px;
  margin-left: 5px;
`;

export const Area = styled.div`
  width: 160px;
  height: 40px;
  border-radius: 35px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
`;

export const AreaText = styled.div`
  font-size: 14px;
`;

export const SearchBox = styled.input`
  margin-top: 40px;
  width: 100%;
  height: 45px;
  background-color: #f2f2f2;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 14px;
  padding-left: 20px;
  padding-bottom: 3px;
  border: none;
  border-radius: 4px;
  :focus {
    outline: none;
  }
`;

// Header

export const Header = styled.div`
  width: 1000px; /* 수정: 1200px에서 1000px로 변경 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 60px;
`;

export const Line = styled.div`
  border: 1px solid #f2f2f2;
  width: 100%;
  text-align: right;
  margin-top: 20px;
`;
export const Body = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  margin-bottom: 100px;
`;

export const PremiumAD = styled.div`
  width: 900px;
`;

export const Title = styled.div`
  font-weight: 700;
  margin-top: 10px;
  margin-left: 20px;
`;

export const PremiumWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  animation: ${SlideBottom} 0.7s ease-in-out both;
`;

export const PremiumPosts = styled.div`
  cursor: pointer;
  margin-top: 20px;
`;

export const PremiumPostBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const PremiumTemplate = styled.article`
  width: 350px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
`;

export const PremiumPostImg = styled.img`
  width: 350px;
  height: 200px;
  width: 101%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.08);
  }
`;

export const PremiumPostTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-top: 5px;
  margin-left: 2px;
`;

export const PremiumPostContent = styled.div`
  padding: 0px 2px;
`;

export const PremiumPostInfo = styled.div``;

export const PremiumAddress = styled.div`
  color: #4a4247;
  font-size: 15px;
  margin-top: 3px;
`;

export const PremiumAvatarContentTie = styled.div`
  margin-top: 3px;
`;

export const PremiumContent = styled.div`
  font-size: 14px;
`;

export const PremiumPriceTie = styled.div``;

export const PremiumPrice = styled.div`
  text-align: end;
  font-size: 18px;
`;

// 클래스

export const NewestPopularity = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
`;

export const Newest = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export const Popularity = styled.div`
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
`;

export const BodyWrapper = styled.div`
  display: flex;
  width: 725px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: 260px;
`;

export const Posts = styled.div`
  width: 725px;
  border-bottom: 1px solid #e1e1e1;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0.2, 0.2, 0.2, 0.2);
  }
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Template = styled.article`
  width: 150px;
  height: 150px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

export const PostImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  padding: 8px;
`;

export const PostTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const PostInfo = styled.div``;

export const Address = styled.div`
  color: #4a4247;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const AvatarContentTie = styled.div``;

export const Content = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const PriceTie = styled.div``;

export const Price = styled.div`
  font-size: 16px;
`;
