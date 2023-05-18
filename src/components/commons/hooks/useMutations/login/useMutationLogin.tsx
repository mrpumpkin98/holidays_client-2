import { gql, useMutation, useQuery } from "@apollo/client";
import { access } from "fs";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores";
import { FETCH_LOGIN_USER } from "../../useQueries/user/UseQueryFetchLoginUser";

export const LOGIN = gql`
  mutation login($email: String!, $pwd: String!) {
    login(email: $email, pwd: $pwd)
  }
`;

export const UseMutationLogin = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [login] = useMutation(LOGIN);

  const { data: qqq } = useQuery(FETCH_LOGIN_USER);

  const SubmitLogin = async (data: any) => {
    try {
      const result = await login({
        variables: {
          ...data,
        },
        refetchQueries: [{ query: FETCH_LOGIN_USER }],
      });

      const accessToken = result.data?.login;

      if (accessToken === undefined) {
        alert("로그인 실패");
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      console.log(result);
      console.log(accessToken);
      alert("로그인이 완료되었습니다");
      void router.push(`/mainPage`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      alert("로그인에 실패했습니다");
    }
  };

  return { SubmitLogin };
};
