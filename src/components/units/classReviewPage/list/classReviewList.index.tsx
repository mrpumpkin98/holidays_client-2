import { useState } from "react";
import { IFetchClassReviews } from "../../../../commons/types/generated/types";

import { UseQueryFetchClassReview } from "../../../commons/hooks/useQueries/class/useQueryFetchClassReview";
import * as S from "./classReviewList.styles";
import { useToggle } from "../write/useToggle";
import ClassReviewWrite from "../write/classReviewWrite.index";
import ClassReviewListEl from "./classReviewListEl.index";
import InfiniteScroll from "react-infinite-scroller";

export interface IClassReviewListProps {
  el?: IFetchClassReviews;
  data: any;
}

export default function ClassReviewList(props: IClassReviewListProps) {
  const { data, fetchMore } = UseQueryFetchClassReview();

  console.log("1====");
  console.log(props);
  console.log("2====");
  console.log(props.el);
  console.log("3====");
  console.log(props.data);
  console.log("4====");

  // 무한스크롤
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchClassReviews.length / 5) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchClassReviews === undefined) {
          return {
            fetchClassReviews: [...prev.fetchClassReviews],
          };
        }
        return {
          fetchClassReviews: [
            ...prev.fetchClassReviews,
            ...fetchMoreResult.fetchClassReviews,
          ],
        };
      },
    });
  };

  return (
    <>
      <S.Wrapper>
        <div
          style={{
            width: "1113px",
            height: "500px",
            overflow: "auto",
            margin: "auto",
            // background: "skyblue",
          }}
        >
          <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
            {props.data &&
              props.data.fetchClassReviews.map(
                (el: IFetchClassReviews, index) => (
                  // <div key={el.cr_id}>
                  <ClassReviewListEl el={el} index={index} />
                  // </div>
                )
              )}
          </InfiniteScroll>
        </div>
      </S.Wrapper>
    </>
  );
}
