import { useState } from "react";
import { IFetchClassReviews } from "../../../../commons/types/generated/types";

import { UseQueryFetchClassReview } from "../../../commons/hooks/useQueries/class/useQueryFetchClassReview";
import * as S from "./classReviewList.styles";
import { useToggle } from "../write/useToggle";
import ClassReviewWrite from "../write/classReviewWrite.index";
import ClassReviewListEl from "./classReviewListEl.index";

export interface IClassReviewListProps {
  el?: IFetchClassReviews;
  data: any;
}

export default function ClassReviewList(props: IClassReviewListProps) {
  console.log("1====");
  console.log(props);
  console.log("2====");
  console.log(props.el);
  console.log("3====");
  console.log(props.data);
  console.log("4====");

  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = (cr_id: any) => {
    console.log("cr_id: ", cr_id);
    setIsEdit(true);
  };

  return (
    <>
      <S.Wrapper>
        <S.ReviewCount>후기 595개</S.ReviewCount>

        {props.data &&
          props.data.fetchClassReviews.map((el: IFetchClassReviews) => (
            <div key={el.cr_id}>
              <ClassReviewListEl
                el={el}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                handleEditClick={handleEditClick}
              />
            </div>
          ))}
      </S.Wrapper>
    </>
  );
}
