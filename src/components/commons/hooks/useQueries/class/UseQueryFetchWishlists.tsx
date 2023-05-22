import { gql, useQuery } from "@apollo/client";

export const FECTCH_CLASS_WISHLISTS = gql`
  query fetchWishlists {
    fetchWishlists {
      class_id
      title
      content_summary
      price
      total_time
      address
      address_detail
      url
    }
  }
`;
