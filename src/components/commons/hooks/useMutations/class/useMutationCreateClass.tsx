import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

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

export interface IFormCreateClassData {
  title: string;
  content_summary: string;
  price: number;
  class_mNum: number;
  address: string;
  address_detail: string;
  category: string;
  address_category: string;
  total_time: string;
  content: string;
  accountNum: string;
  accountName: string;
  bankName: string;
  date: string;
  remain: string;

  images?: string[];
}

export const UseMutationCreateClass = () => {
  const [createClass] = useMutation(CREATE_CLASS);

  // 등록하기 버튼
  const createClassSubmit = async (data: IFormCreateClassData) => {
    const router = useRouter();

    console.log("등록하기 버튼 누름");
    try {
      const result = await createClass({
        variables: {
          createClassInput: {
            title: data.title,
            content_summary: data.content_summary,
            price: Number(data.price),
            class_mNum: Number(data.class_mNum),
            address: data.address,
            address_detail: data.address_detail,
            category: data.category,
            address_category: data.address_category,
            total_time: data.total_time,
            content: data.content,
            accountNum: data.accountNum,
            accountName: data.accountName,
            bankName: data.bankName,
            classSchedulesInput: {
              date: data.date,
              remain: data.remain,
            },
            imageInput: {
              // url,
              // type,
              // is_main,
            },
          },
        },
      });

      alert("클래스 등록에 성공하였습니다.");

      // 클래스 디테일 페이지로 이동
      const class_id = result.data?.createClass.class_id;
      void router.push(`/classPage/${class_id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return { createClassSubmit };
};
