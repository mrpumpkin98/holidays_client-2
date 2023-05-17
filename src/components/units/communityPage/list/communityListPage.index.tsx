import { useRouter } from "next/router";
import * as S from "./communityListPage.styles";

// 임시 게시물 데이터

const initialPost = {
  src: "/communityPage/exampleImage1.png",
  title: "자유 분방함 속에서 피오난 취향, 뉴욕 브루클린 라이프",
  address: "유저이름",
  date: "2021.02.18",
};

const initialPosts = Array(12).fill(initialPost);

export default function communityListPage() {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.Title>사랑방</S.Title>
      <S.InputBox placeholder="검색어를 입력해 주세요" />
      <S.BodyWrapper>
        {initialPosts.map((post: any, index: any) => (
          <div key={index}>
            <S.Posts>
              <S.PostBody>
                <S.Template>
                  <S.PostImg src={post.src} />
                </S.Template>
                <S.PostTitle>{post.title}</S.PostTitle>
                <S.PostContent>
                  <S.PostInfo>
                    <S.Address>{post.address}</S.Address>
                  </S.PostInfo>
                  <S.PriceTie>
                    <S.Price>Date : {post.date}</S.Price>
                  </S.PriceTie>
                </S.PostContent>
              </S.PostBody>
            </S.Posts>
          </div>
        ))}
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
