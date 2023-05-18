import { gql, useQuery } from "@apollo/client";
import { string } from "yup";

export const FETCH_CLASSES: any = gql`
  query fetchClasses(
    $category: String!
    $address_category: String!
    $search: String!
  ) {
    fetchClasses(
      category: $category
      address_category: $address_category
      search: $search
    ) {
      class_id
      title
      content_summary
      price
      class_mNum
      address
      address_detail
      lat
      lon
      category
      address_category
      total_time
      content
      accountNum
      accountName
      bankName
      is_ad
      createdAt
    }
  }
`;
