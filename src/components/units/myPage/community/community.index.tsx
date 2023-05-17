import { useState } from "react";
import * as S from "./community.styles";

const initialPremiumPost = {
  src: "/classPage/list.png",
  title: "사랑방 게시물 제목",
  user: "작성자 이름",
  content:
    "관절을 튼튼하게 도와주는 관절 운동 클래스 입니다!! 남녀노소 즐길 수 있어요",
  price: "55,000원",
  date: "2021.02.18",
};

const initialPremiumPosts = Array(3).fill(initialPremiumPost);

// 리스트
const PremiumPost = ({ post }: any) => (
  <S.PremiumPosts>
    <S.PremiumPostBody>
      <S.PremiumTemplate>
        <S.PremiumPostImg src={post.src} />
      </S.PremiumTemplate>
      <S.PremiumUser>{post.user}</S.PremiumUser>
      <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
      <S.PremiumDate>{post.date}</S.PremiumDate>
      <S.PremiumPostContent>
        <S.PremiumPostInfo>
          <S.PremiumAvatarContentTie></S.PremiumAvatarContentTie>
        </S.PremiumPostInfo>
        <S.PremiumPriceTie></S.PremiumPriceTie>
      </S.PremiumPostContent>
    </S.PremiumPostBody>
  </S.PremiumPosts>
);

export default function ProposalClass() {
  const [Contents, setContents] = useState(false);
  return (
    <>
      <S.Wrapper>
        {Contents ? (
          <>
            <S.ListNameIconWrapper>
              <S.ListName>내 사랑방 리스트</S.ListName>
              <S.Icon src="/myPage/options-list.png" />
            </S.ListNameIconWrapper>
            <S.Line />
            <S.Box>
              <S.Emoji>🤔</S.Emoji>
              <S.Text>아직 작성한 사랑방 게시물이 없어요</S.Text>
              <S.MainText>사랑방 게시물을 작성해 보실까요?</S.MainText>
              <S.Button>사랑방 게시물 작성해보기</S.Button>
            </S.Box>
          </>
        ) : (
          <>
            <S.ListNameIconWrapper>
              <S.ListName>내 사랑방 리스트</S.ListName>
              <S.Icon src="/myPage/options-list.png" />
            </S.ListNameIconWrapper>
            <S.Line />
            <S.PremiumWrapper>
              {initialPremiumPosts.map((post: any, index: any) => (
                <div key={index}>
                  <PremiumPost post={post} />
                </div>
              ))}
            </S.PremiumWrapper>
          </>
        )}
      </S.Wrapper>
    </>
  );
}
