import { useState } from "react";
import * as S from "./reservation.styles";

const initialPremiumPost = {
  src: "/classPage/list.png",
  title: "사랑방 게시물 제목",
  date: "2023.5.17",
  content: "1",
  now: "10",
  user: "신재욱",
};

const initialPremiumPosts = Array(3).fill(initialPremiumPost);

// 리스트
const PremiumPost = ({ post }: any) => (
  <S.PremiumPosts>
    <S.PremiumPostBody>
      <S.PremiumTemplate>
        <S.PremiumPostImg src={post.src} />
      </S.PremiumTemplate>
      <S.PremiumPostContent>
        <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
        <S.PremiumUserTie>
          <S.PremiumUser>
            신청자명 : <S.TextColor>{post.user}</S.TextColor>
          </S.PremiumUser>
        </S.PremiumUserTie>
        <S.PremiumPostInfo>
          <S.PremiumDate>신청날짜 : {post.date}</S.PremiumDate>
          <S.PremiumAvatarContentTie>
            <S.PremiumContent>
              신청인원 : <S.TextColor>{post.content}</S.TextColor>명
            </S.PremiumContent>
            <S.PremiumContent>신청현황 : {post.now}명</S.PremiumContent>
          </S.PremiumAvatarContentTie>
        </S.PremiumPostInfo>
      </S.PremiumPostContent>
      <S.ButtonTie>
        <S.Approve>승인</S.Approve>
        <S.Cancel>취소</S.Cancel>
      </S.ButtonTie>
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
