import { useState } from "react";
import * as S from "./reservation.styles";

const initialPremiumPost = {
  src: "/classPage/list.png",
  title: "사랑방 게시물 제목",
  address: "작성자 이름",
  content:
    "관절을 튼튼하게 도와주는 관절 운동 클래스 입니다!! 남녀노소 즐길 수 있어요",
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

export default function Reservation() {
  const [Contents, setContents] = useState(false);
  return (
    <S.Wrapper>
      {Contents ? (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>예약 관리</S.ListName>
            <S.Icon src="/myPage/user-options.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.Box>
            <S.Emoji>🤔</S.Emoji>
            <S.Text>받은 클래스 예약이 없어요</S.Text>
            <S.MainText>내가 만든 클래스에 들어가 보실까요?</S.MainText>
            <S.Button>클래스 찾아보기</S.Button>
          </S.Box>
        </>
      ) : (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>예약 관리</S.ListName>
            <S.Icon src="/myPage/user-options.png" />
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
