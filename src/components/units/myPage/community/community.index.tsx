import { useState } from "react";
import * as S from "./community.styles";
import { useQuery } from "@apollo/client";
import { FECTCH_BOARDS } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoards";
import { formatDateString } from "../../../../commons/libraries/utils";
import { FECTCH_BOARDS_OF_MINE } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardsOfMine";
import { LoadingOutlined } from "@ant-design/icons";

export default function ProposalClass() {
  const [Contents, setContents] = useState(false);
  const { data, loading, refetch } = useQuery(FECTCH_BOARDS_OF_MINE);
  return (
    <>
      <S.Wrapper>
        {loading ? (
          // 로딩 페이지 또는 대체 이미지를 보여줄 수 있는 JSX를 작성하세요
          // 예시: <div>로딩 중...</div>
          <div>
            <LoadingOutlined />
          </div>
        ) : !data || data.fetchBoardsOfMine.length === 0 ? (
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
              {data?.fetchBoardsOfMine.map((post: any, index: any) => (
                <div key={index}>
                  <S.PremiumPosts>
                    <S.PremiumPostBody>
                      <S.PremiumTemplate>
                        <S.PremiumPostImg src={post.url} />
                      </S.PremiumTemplate>
                      <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
                      <S.PremiumUser>{post.name}</S.PremiumUser>
                      <S.PremiumDate>
                        {formatDateString(post.createdAt)}
                      </S.PremiumDate>
                      <S.PremiumPostContent>
                        <S.PremiumPostInfo>
                          <S.PremiumAvatarContentTie></S.PremiumAvatarContentTie>
                        </S.PremiumPostInfo>
                        <S.PremiumPriceTie></S.PremiumPriceTie>
                      </S.PremiumPostContent>
                    </S.PremiumPostBody>
                  </S.PremiumPosts>
                </div>
              ))}
            </S.PremiumWrapper>
          </>
        )}
      </S.Wrapper>
    </>
  );
}
