import { useState } from "react";
import { IClassReview } from "../../../../commons/types/generated/types";
import { UseMutationCreateClassReview } from "../../../commons/hooks/useMutations/class/useMutationCreateReview";
import { UseQueryFetchClassReview } from "../../../commons/hooks/useQueries/class/useQueryFetchClassReview";
import * as S from "./classReviewList.styles";

export interface IClassReviewListProps {
  el?: IClassReview;
  data: any;
}

export default function ClassReviewList(props: IClassReviewListProps) {
  // const { data } = UseQueryFetchClassReview();
  // console.log(data);

  console.log(props.data);

  const [isEditing, setIsEditing] = useState(false);
  const [editedReview, setEditedReview] = useState(null);

  return (
    <>
      <S.Wrapper>
        <S.ReviewCount>후기 595개</S.ReviewCount>

        {props.data &&
          props.data.fetchClassReviews.map((review: IClassReview) => (
            <S.Row key={review.cr_id}>
              <S.Wrapper_header>
                <S.Wrapper_header_top>
                  <S.ReviewWriter>{review.user_.name}</S.ReviewWriter>
                  <S.Star value={review.grade} />
                  <S.BtnWrapper>
                    <S.UpdateBtn>수정</S.UpdateBtn>
                    <S.DeleteBtn>삭제</S.DeleteBtn>
                  </S.BtnWrapper>
                </S.Wrapper_header_top>
                <S.Date>{review.createdAt}</S.Date>
              </S.Wrapper_header>
              <S.Contents>{review.content}</S.Contents>
            </S.Row>
          ))}
      </S.Wrapper>
    </>
  );
}
