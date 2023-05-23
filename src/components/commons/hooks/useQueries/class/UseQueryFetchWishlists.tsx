import { gql, useQuery } from "@apollo/client";

export const FECTCH_CLASS_WISHLISTS = gql`
  query fetchWishlists {
    fetchWishlists {
      class_id
      title
      price
      address
      total_time
      url
    }
  }
`;
