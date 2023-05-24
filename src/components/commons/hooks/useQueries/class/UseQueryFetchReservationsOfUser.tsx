import { gql, useQuery } from "@apollo/client";

export const FETCH_RESERVATIONS_OF_USER = gql`
  query fetchReservationsOfUser {
    fetchReservationsOfUser {
      res_id
      res_date
      personnel
      status
      user_ {
        user_id
        name
        phone
        email
      }
      class_ {
        class_id
        title
        content_summary
        price
        address
      }
    }
  }
`;
