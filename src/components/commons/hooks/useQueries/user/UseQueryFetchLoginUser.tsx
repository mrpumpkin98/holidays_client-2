import { gql, useQuery } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      user_id
      name
      email
    }
  }
`;

export const UseQueryFetchLoginUser = () => {
  const queryUser = useQuery(FETCH_LOGIN_USER);

  return queryUser;
};
