import { useForm } from "react-hook-form";
import { UseMutationCreateClassReview } from "../../../commons/hooks/useMutations/class/useMutationCreateReview";
import * as S from "./classReviewWrite.styles";
import {
  IClassReviewWriteProps,
  IFormData,
} from "../../classPage/review/classReview.types";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ClassReviewWrite(props: IClassReviewWriteProps) {
  const [grade, setGrade] = useState<number>(0);

  // 등록
  const { onClickWrite, onClickUpdate } = UseMutationCreateClassReview();

  const { register, handleSubmit } = useForm<IFormData>({
    // defaultValues: {
    //   cr_id: router.query.class_id,
    //   content: props.isEdit ? props.el?.content : "",
    //   grade: 0,
    // },
    mode: "onChange",
  });

  // 등록하기, 수정하기 제출
  const onSubmitForm = async (data: IFormData) => {
    const { ...value } = data;

    if (!props.isEdit) {
      await onClickWrite(value, grade);
    } else {
      await onClickUpdate(value);
    }
  };

  return (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Wrapper_body>
            <S.Wrapper_body_header>후기 작성하기</S.Wrapper_body_header>

            <S.Star
              allowHalf
              defaultValue={0}
              value={grade}
              onChange={(value: number) => setGrade(value)}
            />

            <S.ReviewBox>
              <S.TextArea7
                rows={10}
                maxLength={300}
                placeholder="후기를 작성해주세요"
                {...register("content")}
              />
              <S.ButtonWrapper>
                <S.Length>77 / 300</S.Length>

                <S.ReviewWriteBtn type="submit">
                  {props.isEdit ? "수정" : "등록"}
                </S.ReviewWriteBtn>
              </S.ButtonWrapper>
            </S.ReviewBox>
          </S.Wrapper_body>
          <S.Error>에러</S.Error>
        </form>
      </S.Wrapper>
    </>
  );
}
