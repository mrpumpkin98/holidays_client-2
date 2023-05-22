import { gql, useQuery } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      name
      phone
      email
      birth_date
    }
  }
`;

export const UseQueryFetchLoginUser = () => {
  const queryUser = useQuery(FETCH_LOGIN_USER);

  return queryUser;
};
