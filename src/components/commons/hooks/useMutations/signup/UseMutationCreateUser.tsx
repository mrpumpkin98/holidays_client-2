import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
    }
  }
`;

interface IFormSignUpData {
  email: string;
  password: string;
  passwordCheck?: string;
  name: string;
  birth_data?: string;
}

export const UseMutationCreateUser = () => {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const SubmitCreateUser = async (data: IFormSignUpData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      alert("회원가입이 완료되었습니다");
      void router.push(`/loginPage`);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      alert("회원가입에 실패했습니다.");
    }
  };

  return SubmitCreateUser;
};
