import { useState } from "react";
import * as S from "./wishList.styles";
import { useQuery } from "@apollo/client";
import { FECTCH_CLASS_WISHLISTS } from "../../../commons/hooks/useQueries/class/UseQueryFetchWishlists";
import { Money } from "../../../../commons/libraries/utils";

export default function WishList() {
  const [Contents, setContents] = useState(false);
  const { data, refetch } = useQuery(FECTCH_CLASS_WISHLISTS);
  const onClickWrite = () => {
    console.log(data);
  };
  return (
    <S.Wrapper>
      {Contents ? (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>위시리스트 </S.ListName>
            <S.Icon src="/myPage/love-heart.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.Box>
            <S.Emoji>🤔</S.Emoji>
            <S.Text>아직 워시리스트가 없어요</S.Text>
            <S.MainText>클래스를 찾아 보실까요?</S.MainText>
            <S.Button>클래스 찾아보기</S.Button>
          </S.Box>
        </>
      ) : (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>위시리스트 </S.ListName>
            <S.Icon src="/myPage/love-heart.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.PremiumWrapper>
            {data?.fetchWishlists.map((post: any, index: any) => (
              <div key={index}>
                <S.PremiumPosts>
                  <S.PremiumPostBody>
                    <S.PremiumTemplate>
                      <S.PremiumPostImg src="/classPage/list.png" />
                    </S.PremiumTemplate>
                    <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
                    <S.PremiumPostContent>
                      <S.PremiumTime>{post.total_time}</S.PremiumTime>
                      <S.PremiumPostInfo>
                        <S.PremiumUser>{post.address}</S.PremiumUser>
                      </S.PremiumPostInfo>
                      <S.PremiumPriceTie>
                        <S.PremiumPrice>{Money(post.price)}</S.PremiumPrice>
                      </S.PremiumPriceTie>
                    </S.PremiumPostContent>
                  </S.PremiumPostBody>
                </S.PremiumPosts>
              </div>
            ))}
          </S.PremiumWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
