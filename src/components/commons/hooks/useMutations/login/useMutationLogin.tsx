import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_LOGIN_USER } from "../../useQueries/user/UseQueryFetchLoginUser";

export const LOGIN = gql`
  mutation login($email: string!, $pwd: string!) {
    login(email: $email, pwd: $pwd)
  }
`;

export const UseMutationLogin = () => {
  const router = useRouter();

  const [login] = useMutation(LOGIN);

  const SubmitLogin = async (data: any) => {
    try {
      const result = await login({
        variables: {
          ...data,
        },
        refetchQueries: [{ query: FETCH_LOGIN_USER }],
      });

      alert("로그인이 완료되었습니다");
      void router.push(`/mainPage`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      alert("로그인에 실패했습니다");
    }
  };

  return { SubmitLogin };
};
