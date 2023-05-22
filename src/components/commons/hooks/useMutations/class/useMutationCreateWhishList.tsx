import { gql, useMutation } from "@apollo/client";

const CREATE_WISHLIST_MUTATION = gql`
  mutation createWishlist($class_id: String!) {
    createWishlist(class_id: $class_id) {
      wishlist_id
      user_ {
        user_id
        name
        phone
        email
        birth_date
        type
        deletedAt
      }
      class_ {
        class_id
        title
        content_summary
        price
        class_mNum
        address
        address_detail
        lat
        lon
        category
        address_category
        total_time
        content
        accountNum
        accountName
        bankName
        is_ad
        createdAt
        # deletedAt
        # user_ {
        #   user_id
        #   name
        #   phone
        #   email
        #   birth_date
        #   type
        #   deletedAt
        # }
      }
    }
  }
`;

export const UseMutationCreateWhishList = () => {
  const [createWishlist] = useMutation(CREATE_WISHLIST_MUTATION);

  // 찜 버튼
  const onClickWishlist = async (class_id: any) => {
    console.log("찜 버튼 누름");
    console.log("class_id: ", class_id);
    try {
      const { data } = await createWishlist({
        variables: {
          class_id: class_id,
        },
      });
      console.log(data);
      alert("찜 누르기 성공");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickWishlist };
};
