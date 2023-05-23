import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_CLASS_DETAIL } from "../../useQueries/class/useQueryFetchClassDetail";

// 찜 추가
const CREATE_WISHLIST = gql`
  mutation createWishlist($class_id: String!) {
    createWishlist(class_id: $class_id)
  }
`;

// 찜 취소
const DELETE_WISHLIST = gql`
  mutation deleteWishlist($class_id: String!) {
    deleteWishlist(class_id: $class_id)
  }
`;

export const UseMutationWishList = () => {
  const [createWishlist] = useMutation(CREATE_WISHLIST);
  const [deleteWishlist] = useMutation(DELETE_WISHLIST);

  const [isWishlistActive, setIsWishlistActive] = useState(false);

  // 찜 추가
  const onClickCreateWishlist = async (class_id: any) => {
    console.log("찜 버튼 누름");
    console.log("class_id: ", class_id);
    try {
      const { data } = await createWishlist({
        variables: {
          class_id: class_id,
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_DETAIL,
            variables: { class_id: class_id },
          },
        ],
      });
      console.log(data);
      // alert("찜 누르기 성공");
      setIsWishlistActive(true);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  // 찜 취소
  const onClickDeleteWishlist = async (class_id: any) => {
    console.log("찜 취소 onClickDeleteWishlist 클릭됨");
    console.log("class_id: ", class_id);
    try {
      const { data } = await deleteWishlist({
        variables: {
          class_id: class_id,
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_DETAIL,
            variables: { class_id: class_id },
          },
        ],
      });
      console.log(data);
      // alert("찜 취소 성공");
      setIsWishlistActive(false);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    onClickCreateWishlist,
    onClickDeleteWishlist,
    isWishlistActive,
    setIsWishlistActive,
  };
};
