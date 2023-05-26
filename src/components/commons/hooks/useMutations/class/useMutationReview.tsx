// 클래스 후기

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IUpdateClassReviewInput } from "../../../../../commons/types/generated/types";
import { IFormData } from "../../../../units/classPage/review/classReview.types";
import { useEffect, useState } from "react";
import { FETCH_CLASS_REVIEWS } from "../../useQueries/class/useQueryFetchClassReview";
import { result } from "lodash";
import { atom, useRecoilState } from "recoil";

// 작성
export const CREATE_CLASS_REVIEW = gql`
  mutation createClassReview($createClassReviewInput: CreateClassReviewInput!) {
    createClassReview(createClassReviewInput: $createClassReviewInput)
    # {
    #   content
    #   grade
    #   class_id
    # }
  }
`;

// 수정
export const UPDATE_CLASS_REVIEW = gql`
  mutation updateClassReview($updateClassReviewInput: UpdateClassReviewInput!) {
    updateClassReview(updateClassReviewInput: $updateClassReviewInput)
  }
`;

// 삭제
export const DELETE_CLASS_REVIEW = gql`
  mutation deleteClassReview($cr_id: String!) {
    deleteClassReview(cr_id: $cr_id)
  }
`;

export const UseMutationClassReview = () => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  console.log("++++");
  console.log(isEdit);
  console.log("++++");

  const [createClassReview] = useMutation(CREATE_CLASS_REVIEW);
  const [updateClassReview] = useMutation(UPDATE_CLASS_REVIEW);
  const [deleteClassReview] = useMutation(DELETE_CLASS_REVIEW);

  // 등록하기 버튼
  const onClickWrite = async (data: IFormData, grade: number) => {
    console.log("리뷰 등록버튼 클릭 됨");
    console.log("router.query.class_id: ", router.query.class_id);
    console.log(data);
    try {
      const result = await createClassReview({
        variables: {
          createClassReviewInput: {
            content: data.content,
            grade: grade,
            class_id: router.query.class_id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 작성 완료");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  // 수정하기 버튼
  const onClickUpdate = async (data: IFormData, grade: number) => {
    setIsEdit(false);
    // if (!data.content) {
    //   alert("내용이 수정되지 않았습니다.");
    //   return;
    // }

    // try {
    //   const result = await updateClassReview({
    //     variables: {
    //       updateClassReviewInput: {
    //         cr_id: data.cr_id,
    //         content: data.content,
    //         grade: data.grade,
    //       },
    //     },
    //     refetchQueries: [
    //       {
    //         query: FETCH_CLASS_REVIEWS,
    //         variables: { class_id: router.query.class_id },
    //       },
    //     ],
    //   });
    //   alert("리뷰 수정 완료");
    //   console.log(result);
    //   setIsEdit(false);
    // } catch (error) {
    //   console.warn(data, "0000");
    //   console.warn(data.content, "111");
    //   console.warn(data.grade, "222");
    //   if (error instanceof Error) console.log(error.message);
    // }
  };

  // 삭제하기 버튼
  const onClickDelete = async (data: any) => {
    console.log("리뷰 삭제버튼 클릭 됨");
    console.log("router.query.class_id: ", router.query.class_id);
    console.log("data: ", data);

    try {
      const result = await deleteClassReview({
        variables: {
          cr_id: data,
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 삭제 완료");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickWrite, onClickUpdate, onClickDelete, isEdit, setIsEdit };
};

export const UseMutationClassReviewSubmit = (propsSetIsEdit: any) => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  console.log("++++");
  console.log(isEdit);
  console.log("++++");

  const [createClassReview] = useMutation(CREATE_CLASS_REVIEW);
  const [updateClassReview] = useMutation(UPDATE_CLASS_REVIEW);
  const [deleteClassReview] = useMutation(DELETE_CLASS_REVIEW);

  // 등록하기 버튼
  const onClickWrite = async (data: IFormData, grade: number) => {
    console.log("리뷰 등록버튼 클릭 됨");
    console.log("router.query.class_id: ", router.query.class_id);
    console.log(data);
    try {
      const result = await createClassReview({
        variables: {
          createClassReviewInput: {
            content: data.content,
            grade: grade,
            class_id: router.query.class_id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 작성 완료");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  // 수정하기 버튼
  const onClickUpdate = async (data: IFormData, grade: number) => {
    propsSetIsEdit(false);
    if (!data.content) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }

    try {
      const result = await updateClassReview({
        variables: {
          updateClassReviewInput: {
            cr_id: data.cr_id,
            content: data.content,
            grade: data.grade,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 수정 완료");
      console.log(result);
      setIsEdit(false);
    } catch (error) {
      console.warn(data, "0000");
      console.warn(data.content, "111");
      console.warn(data.grade, "222");
      if (error instanceof Error) console.log(error.message);
    }
  };

  // 삭제하기 버튼
  const onClickDelete = async (data: any) => {
    console.log("리뷰 삭제버튼 클릭 됨");
    console.log("router.query.class_id: ", router.query.class_id);
    console.log("data: ", data);

    try {
      const result = await deleteClassReview({
        variables: {
          cr_id: data,
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 삭제 완료");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickWrite, onClickUpdate, onClickDelete, isEdit, setIsEdit };
};
