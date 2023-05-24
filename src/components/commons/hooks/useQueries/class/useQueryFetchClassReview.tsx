import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchClassReviewsArgs,
} from "../../../../../commons/types/generated/types";

// 후기
export const FETCH_CLASS_REVIEWS = gql`
  query fetchClassReviews($class_id: String!) {
    fetchClassReviews(class_id: $class_id) {
      cr_id
      content
      grade
      createdAt
      name
      # user_ {
      #   user_id
      #   name
      # }
    }
  }
`;

export const UseQueryFetchClassReview = () => {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchClassReviews">,
    IQueryFetchClassReviewsArgs
  >(FETCH_CLASS_REVIEWS, {
    variables: {
      // class_id: router.query.class_id,
      class_id: String(router.query.class_id),
    },
  });

  return { data, refetch };
};
