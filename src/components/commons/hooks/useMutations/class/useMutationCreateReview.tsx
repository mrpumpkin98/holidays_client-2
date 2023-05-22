// 클래스 후기

import { gql, useMutation } from "@apollo/client";

export const CREATE_CLASS_REVIEW = gql`
  mutation createClassReview($createClassReviewInput: CreateClassReviewInput!) {
    createClassReview(createClassReviewInput: $createClassReviewInput) {
      cr_id
      content
      grade
      createdAt
      deletedAt
      user_ {
        id
        name
      }
      class_ {
        id
        name
      }
    }
  }
`;

export const useMutationCreateBoardComment = () => {
  const [createClassReview] = useMutation(CREATE_CLASS_REVIEW);
};
