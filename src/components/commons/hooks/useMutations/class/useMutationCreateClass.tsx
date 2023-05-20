import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IFormData } from "../../../../units/classPage/write/classWrite.types";
import { getFirstTwoChars } from "../../../../../commons/libraries/utils";

export const CREATE_CLASS = gql`
  mutation createClass($createClassInput: CreateClassInput!) {
    createClass(createClassInput: $createClassInput) {
      class_id
      title
      content_summary
      price
      class_mNum
      address
      address_detail
      category
      address_category
      total_time
      content
      accountNum
      accountName
      bankName
      is_ad
    }
  }
`;

export const UseMutationCreateClass = () => {
  const [createClass] = useMutation(CREATE_CLASS);
  const router = useRouter();

  // 등록하기 버튼
  const onClickClassSubmit = async (data: IFormData, address: string) => {
    try {
      const result = await createClass({
        variables: {
          createClassInput: {
            title: data.title,
            content_summary: data.content_summary,
            price: Number(data.price),
            class_mNum: Number(data.class_mNum),
            address: address,
            address_detail: data.address_detail,
            category: data.category,
            address_category: getFirstTwoChars(address),
            total_time: data.total_time,
            content: data.content,
            accountNum: data.accountNum,
            accountName: data.accountName,
            bankName: data.bankName,
            classSchedulesInput: {
              // date: data.date,
              // remain: data.remain,
              date: "ddd",
              remain: 11,
            },
            imageInput: {
              url: "111",
              type: 1,
              is_main: 1,
            },
          },
        },
      });

      alert("클래스 등록에 성공하였습니다.");

      console.log(result);
      // 클래스 디테일 페이지로 이동
      const class_id = result.data?.createClass.class_id;
      void router.push(`/classPage/${class_id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return { onClickClassSubmit };
};
