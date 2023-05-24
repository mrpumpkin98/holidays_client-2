import { Button } from "antd";
import { Wrapper } from "../list/myPageList.styles";
import * as S from "./madeClass.styles";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FECTCH_CLASS_OF_MINE } from "../../../commons/hooks/useQueries/class/UseQueryFetchClassesOfMine";
import { Money } from "../../../../commons/libraries/utils";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function madeClass() {
  const router = useRouter();

  const [Contents, setContents] = useState(false);
  const { data, refetch } = useQuery(FECTCH_CLASS_OF_MINE);
  ///////////////////////////////////////////////////////////////
  //  게시물 이동
  //////////////////////////////////////////////////////////////

  const onClickSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`/paymentPage/${event.currentTarget.id}`);
    console.log(event.currentTarget.id);
  };

  ///////////////////////////////////////////////////////////////
  // 이미지 캐러셀
  //////////////////////////////////////////////////////////////

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <S.Wrapper>
      {Contents ? (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>내가 만든 클래스</S.ListName>
            <S.Icon src="/myPage/presentation.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.Box>
            <S.Emoji>🤔</S.Emoji>
            <S.Text>아직 만든 클래스가 없어요</S.Text>
            <S.MainText>클래스를 만들어 보실까요?</S.MainText>
            <S.Button>클래스 만들어보기</S.Button>
          </S.Box>
        </>
      ) : (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>내가 만든 클래스</S.ListName>
            <S.Icon src="/myPage/presentation.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.PremiumWrapper>
            <Slider {...settings}>
              {data?.fetchClassesOfMine.map((post: any, index: any) => (
                <div key={index}>
                  <S.PremiumPosts>
                    <S.PremiumPostBody>
                      <S.PremiumTemplate>
                        <S.PremiumPostImg src="/myPage/test.png" />
                      </S.PremiumTemplate>
                      <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
                      <S.PremiumPostContent>
                        <S.PremiumPostInfo>
                          <S.PremiumUserName>{post.address}</S.PremiumUserName>
                          <S.PremiumAvatarContentTie></S.PremiumAvatarContentTie>
                        </S.PremiumPostInfo>
                        <S.PremiumPriceTie>
                          <S.PremiumPrice>{Money(post.price)}</S.PremiumPrice>
                        </S.PremiumPriceTie>
                      </S.PremiumPostContent>
                      <S.ButtonTie>
                        {post.is_ad === 0 ? (
                          <S.AdButton
                            id={post.class_id}
                            onClick={onClickSubmit}
                          >
                            광고하기
                          </S.AdButton>
                        ) : (
                          <S.AdButton
                            className="Advertising"
                            id={post.class_id}
                          >
                            광고중
                          </S.AdButton>
                        )}
                        <S.DeleteButton>삭제하기</S.DeleteButton>
                      </S.ButtonTie>
                    </S.PremiumPostBody>
                  </S.PremiumPosts>
                </div>
              ))}
            </Slider>
          </S.PremiumWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
