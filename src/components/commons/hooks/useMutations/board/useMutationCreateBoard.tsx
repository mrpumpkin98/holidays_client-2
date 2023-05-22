import { useMutation, gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      title
    }
  }
`;

export const UseMutationCreateBoard = (data: any) => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          title: data.title,
          content: data.content,
          email: data.email,
          imageInput: [
            {
              url: "테스트",
              type: 1,
              is_main: 1,
            },
          ],
        },
      },
    });
    alert("클래스 등록에 성공하였습니다.");
    console.log(result);
  };
};
