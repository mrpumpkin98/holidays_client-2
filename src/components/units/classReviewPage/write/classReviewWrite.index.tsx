import { useForm } from "react-hook-form";
import { UseMutationClassReview } from "../../../commons/hooks/useMutations/class/useMutationReview";
import * as S from "./classReviewWrite.styles";
import {
  IClassReviewWriteProps,
  IFormData,
} from "../../classPage/review/classReview.types";

import { useState } from "react";

export default function ClassReviewWrite(props: IClassReviewWriteProps) {
  const [grade, setGrade] = useState<number>(0);

  // 등록
  const { onClickWrite, onClickUpdate } = UseMutationClassReview();

  const { register, handleSubmit, setValue } = useForm<IFormData>({
    defaultValues: {
      content: props.isEdit ? props.el?.content : "", // 초기값 설정
      grade: props.isEdit ? props.el?.grade : 0, // 초기값 설정
    },
    mode: "onChange",
  });

  // 등록하기, 수정하기 제출
  const onSubmitForm = async (data: IFormData) => {
    console.log(data.content);
    const { ...value } = data;

    if (!props.isEdit) {
      await onClickWrite(value, grade);
    } else {
      await onClickUpdate(value);
    }

    setGrade(0);

    setValue("content", ""); // content 필드 초기화
  };

  return (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Wrapper_body>
            <S.Wrapper_body_header>
              후기 {props.isEdit ? "수정" : "등록"}하기
            </S.Wrapper_body_header>

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
                // value=
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
