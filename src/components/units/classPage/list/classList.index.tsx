import { useState } from "react";
import Backdrop from "../../../commons/modals/classListModal/Backdrop/Backdrop";
import Modal from "../../../commons/modals/classListModal/Modal/modal";
import ModalComponent from "../../../commons/modals/areaListModal/Modal/modal";
import * as S from "./classList.styles";
import { useQuery } from "@apollo/client";
import { FETCH_CLASSES } from "../../../commons/hooks/useQueries/class/UseQueryFetchClasses";
import { useRecoilValue } from "recoil";
import {
  selectedRegionState,
  selectService,
} from "../../../../commons/stores/index";

const initialPremiumPost = {
  src: "/classPage/list.png",
  title: "백세인생 관절운동",
  address: "서울시 / 구로구",
  content:
    "관절을 튼튼하게 도와주는 관절 운동 클래스 입니다!! 남녀노소 즐길 수 있어요",
  price: "55,000원",
};

const initialPremiumPosts = Array(2).fill(initialPremiumPost);

export default function StaticRoutingPage() {
  // 카테고리 및 검색

  const selectedRegion = useRecoilValue(selectedRegionState);
  const selectServiceRegion = useRecoilValue(selectService);
  const [writer, setWriter] = useState("");

  const addressCategory = selectedRegion === "지역 전체" ? "" : selectedRegion;
  const category =
    selectServiceRegion === "서비스 전체" ? "" : selectServiceRegion;

  const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("입력된 내용:", writer);
      setWriter("");
    }
  };
  const { data, refetch } = useQuery(FETCH_CLASSES, {
    variables: {
      category: category,
      address_category: addressCategory,
      search: writer,
    },
  });
  const prefetchByLevel = () => {
    console.log(data);
  };

  // 서비스 모달기능

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  // 지역 모달기능

  const [showModal2, setShowModal2] = useState(false);

  const handleModalOpen2 = (): void => {
    setShowModal2(true);
  };

  const handleModalClose2 = (): void => {
    setShowModal2(false);
  };

  return (
    <S.Wrapper>
      {showModal && (
        <Modal
          onClose={(selectServiceRegion) => {
            handleModalClose();
          }}
        />
      )}
      {showModal && <Backdrop onClick={handleModalClose} />}
      {showModal2 && (
        <ModalComponent
          onClose={(selectedRegion) => {
            handleModalClose2();
          }}
        />
      )}
      {showModal2 && <Backdrop onClick={handleModalClose2} />}
      <S.Banner>
        <S.Box>
          <S.SearchTitle>검색</S.SearchTitle>
          <S.ServiceAreaWrapper>
            <S.Service onClick={handleModalOpen}>
              <S.ServiceText>
                {category !== "" ? category : "서비스"}
              </S.ServiceText>
            </S.Service>
            <S.Area onClick={handleModalOpen2}>
              <S.AreaText>
                {addressCategory !== "" ? addressCategory : "지역"}
              </S.AreaText>
            </S.Area>
          </S.ServiceAreaWrapper>
          <S.SearchBox
            placeholder="검색어를 입력해 주세요"
            value={writer}
            onChange={onChangeWriter}
            onKeyPress={handleKeyPress}
          />
        </S.Box>
        <S.PremiumAD>
          <S.Title>프리미엄 AD</S.Title>
          <S.PremiumWrapper>
            {initialPremiumPosts.map((post: any, index: any) => (
              <div key={index}>
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
              </div>
            ))}
          </S.PremiumWrapper>
        </S.PremiumAD>
      </S.Banner>
      <S.Line />
      <S.Body>
        <S.NewestPopularity>
          <S.Newest>최신순</S.Newest>
          <S.Popularity>인기순</S.Popularity>
        </S.NewestPopularity>
        <S.BodyWrapper>
          {data?.fetchClasses.map((post: any, index: any) => (
            <div key={index}>
              <S.Posts>
                <S.PostBody>
                  <S.Template>
                    <S.PostImg src="/classPage/list.png" />
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
            </div>
          ))}
        </S.BodyWrapper>
      </S.Body>
    </S.Wrapper>
  );
}
