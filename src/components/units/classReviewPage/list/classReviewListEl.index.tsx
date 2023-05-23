import ClassReviewWrite from "../write/classReviewWrite.index";
import * as S from "./classReviewList.styles";
import { useState } from "react";

export default function ClassReviewListEl(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <S.Row>
          {/* Row 클릭 시 handleEditClick 함수 호출 */}
          <S.Wrapper_header>
            <S.Wrapper_header_top>
              <S.ReviewWriter>{props.el.name}</S.ReviewWriter>
              <S.Star value={props.el.grade} />
              <S.BtnWrapper>
                <S.UpdateBtn
                  onClick={() => props.handleEditClick(props.el.cr_id)}
                >
                  수정
                </S.UpdateBtn>
                <S.DeleteBtn>삭제</S.DeleteBtn>
              </S.BtnWrapper>
            </S.Wrapper_header_top>
            <S.Date>{props.el.createdAt}</S.Date>
          </S.Wrapper_header>
          <S.Contents>{props.el.content}</S.Contents>
        </S.Row>
      ) : (
        <ClassReviewWrite isEdit={true} el={props.el} />
      )}
    </div>
  );
}
