import { useState } from "react";
import * as S from "./proposalClass.styles";

const initialPremiumPost = {
  src: "/classPage/list.png",
  title: "클래스 이름",
  user: "생성자 이름",
  content: "관절을 튼튼하게 도와주는 관절 운동...",
  price: "55,000원",
};

const initialPremiumPosts = Array(3).fill(initialPremiumPost);

// 리스트
const PremiumPost = ({ post }: any) => (
  <S.PremiumPosts>
    <S.PremiumPostBody>
      <S.PremiumTemplate>
        <S.PremiumPostImg src={post.src} />
      </S.PremiumTemplate>
      <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
      <S.PremiumPostContent>
        <S.PremiumPostInfo>
          <S.PremiumUser>{post.user}</S.PremiumUser>
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

export default function MypagePoint() {
  const [Contents, setContents] = useState(false);
  return (
    <S.Wrapper>
      {Contents ? (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>내가 신청한 클래스</S.ListName>
            <S.Icon src="/myPage/basket.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.Box>
            <S.Emoji>🤔</S.Emoji>
            <S.Text>아직 신청한 클래스가 없어요</S.Text>
            <S.MainText>클래스를 찾아 보실까요?</S.MainText>
            <S.Button>클래스 찾아보기</S.Button>
          </S.Box>
        </>
      ) : (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>내가 신청한 클래스</S.ListName>
            <S.Icon src="/myPage/basket.png" />
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
  );
}
