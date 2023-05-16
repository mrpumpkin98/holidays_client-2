import * as S from "./classList.styles";
import { IClassListUIProps } from "./classList.types";
import { useState } from "react";

const initialPremiumPost = {
  src: "/classPage/list.png",
  title: "백세인생 관절운동",
  address: "서울시 / 구로구",
  content:
    "관절을 튼튼하게 도와주는 관절 운동 클래스 입니다!! 남녀노소 즐길 수 있어요",
  price: "55,000원",
};

const initialPremiumPosts = Array(3).fill(initialPremiumPost);

const initialPost = {
  src: "/classPage/list.png",
  title: "백세인생 관절운동",
  address: "서울시 / 구로구",
  content:
    "관절을 튼튼하게 도와주는 관절 운동 클래스 입니다!! 남녀노소 즐길 수 있어요",
  price: "55,000원",
};

const initialPosts = Array(12).fill(initialPost);

// 광고 클래스
const PremiumPost = ({ post }: any) => (
  <S.PremiumPosts>
    <S.PremiumPostBody>
      <S.PremiumTemplate>
        <S.PremiumPostImg src={post.src} />
      </S.PremiumTemplate>
      <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
      <S.PremiumPostContent>
        <S.PremiumPostInfo>
          <S.PremiumAddress>{post.address}</S.PremiumAddress>
          <S.PremiumAvatarContentTie>
            <S.PremiumContent>{post.content}</S.PremiumContent>
          </S.PremiumAvatarContentTie>
        </S.PremiumPostInfo>
        <S.PremiumPriceTie>
          <S.PremiumPrice>{post.price}</S.PremiumPrice>
        </S.PremiumPriceTie>
      </S.PremiumPostContent>
    </S.PremiumPostBody>
  </S.PremiumPosts>
);

// 클래스

const Post = ({ post }: any) => (
  <S.Posts>
    <S.PostBody>
      <S.Template>
        <S.PostImg src={post.src} />
      </S.Template>
      <S.PostTitle>{post.title}</S.PostTitle>
      <S.PostContent>
        <S.PostInfo>
          <S.Address>{post.address}</S.Address>
          <S.AvatarContentTie>
            <S.Content>{post.content}</S.Content>
          </S.AvatarContentTie>
        </S.PostInfo>
        <S.PriceTie>
          <S.Price>{post.price}</S.Price>
        </S.PriceTie>
      </S.PostContent>
    </S.PostBody>
  </S.Posts>
);

export default function ClassListUI(props: IClassListUIProps) {
  return (
    <S.Wrapper>
      <S.Banner>
        <S.Box>
          <S.SearchTitle>검색</S.SearchTitle>
          <S.ServiceAreaWrapper>
            <S.Service>
              <S.ServiceText>서비스</S.ServiceText>
              <S.Expand src="/classPage/expand-button.png" />
            </S.Service>
            <S.Area>
              <S.AreaText>지역</S.AreaText>
              <S.Expand src="/classPage/expand-button.png" />
            </S.Area>
          </S.ServiceAreaWrapper>
          <S.SearchBox placeholder="검색어를 입력해 주세요" />
        </S.Box>
      </S.Banner>
      <S.Header>
        <S.PremiumAD>
          <S.Title>Premium AD</S.Title>
          <S.PremiumWrapper>
            {initialPremiumPosts.map((post: any, index: any) => (
              <div key={index}>
                <PremiumPost post={post} />
              </div>
            ))}
          </S.PremiumWrapper>
        </S.PremiumAD>
      </S.Header>
      <S.Line />
      <S.Body>
        <S.NewestPopularity>
          <S.Newest>최신순</S.Newest>
          <S.Popularity>인기순</S.Popularity>
        </S.NewestPopularity>
        <S.BodyWrapper>
          {initialPosts.map((post: any, index: any) => (
            <div key={index}>
              <Post post={post} />
            </div>
          ))}
        </S.BodyWrapper>
      </S.Body>
    </S.Wrapper>
  );
}
