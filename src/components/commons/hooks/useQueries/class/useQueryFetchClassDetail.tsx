import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FECTCH_CLASS_DETAIL = gql`
  query fetchClassDetail($class_id: String!) {
    fetchClassDetail(class_id: $class_id) {
      class_id
      title
      content_summary
      price
      class_mNum
      address
      address_detail
      category
      address_category
      total_time
      content
      accountNum
      accountName
      bankName
    }
  }
`;

export const UseQueryFetchClassDetail = () => {
  const router = useRouter();

  const query = useQuery(FECTCH_CLASS_DETAIL, {
    variables: { class_id: router.query.class_id },
  });
  console.log(query);

  return query;
};
