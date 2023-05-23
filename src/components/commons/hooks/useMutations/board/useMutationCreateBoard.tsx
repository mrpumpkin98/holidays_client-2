import { useMutation, gql } from "@apollo/client";
import { IMutation } from "../../../../../commons/types/generated/types";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput)
  }
`;

export const UseMutationCreateBoard = () => {
  const mutation = useMutation(CREATE_BOARD);
  return mutation;
};
