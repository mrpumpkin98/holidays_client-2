import { useState } from "react";
import * as S from "./proposalClass.styles";
import { useQuery } from "@apollo/client";
import { FETCH_RESERVATIONS_OF_USER } from "../../../commons/hooks/useQueries/class/UseQueryFetchReservationsOfUser";
import { Money } from "../../../../commons/libraries/utils";

export default function MypagePoint() {
  const [Contents, setContents] = useState(false);
  const { data, refetch } = useQuery(FETCH_RESERVATIONS_OF_USER);

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
            {data?.fetchReservationsOfUser.map((post: any, index: any) => (
              <S.Posts key={index}>
                <S.PremiumPosts>
                  <S.PremiumPostBody>
                    <S.PremiumTemplate>
                      <S.PremiumPostImg src="/classPage/list.png" />
                    </S.PremiumTemplate>
                    <S.PremiumPostContent>
                      <S.PremiumPostTitle>
                        {post.class_.title}
                      </S.PremiumPostTitle>
                      <S.PremiumPostInfo>
                        <S.PremiumUser>
                          생성자명 :{" "}
                          <S.TextColor>{post.user_.name}</S.TextColor>
                        </S.PremiumUser>
                        <S.PremiumAvatarContentTie>
                          <S.PremiumContent>
                            신청날짜 : {post.res_date}
                          </S.PremiumContent>
                          <S.PremiumContent>
                            신청인원 : {post.personnel}명
                          </S.PremiumContent>
                          <S.PremiumContent>
                            예약승인 : <S.TextColor>{post.status}</S.TextColor>
                          </S.PremiumContent>
                        </S.PremiumAvatarContentTie>
                      </S.PremiumPostInfo>
                    </S.PremiumPostContent>
                    <S.PremiumPriceTie>
                      <S.PremiumPrice>
                        금액 : {Money(post.class_.price * post.personnel)}
                      </S.PremiumPrice>
                    </S.PremiumPriceTie>
                  </S.PremiumPostBody>
                </S.PremiumPosts>
              </S.Posts>
            ))}
          </S.PremiumWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
