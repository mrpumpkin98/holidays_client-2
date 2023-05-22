import { gql, useQuery } from "@apollo/client";

export const FECTCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      board_id
      title
      content
      createdAt
      user_ {
        name
      }
    }
  }
`;
