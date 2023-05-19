import { gql, useMutation } from "@apollo/client";

import { IFormData } from "../../../../units/classPage/write/classWrite.types";
import { FECTCH_CLASS_DETAIL } from "../../useQueries/class/useQueryFetchClassDetail";
import { useRouter } from "next/router";
import { getFirstTwoChars } from "../../../../../commons/libraries/utils";

// 클래스 수정하기
export const UPDATE_CLASS = gql`
  mutation updateClass($updateClassInput: UpdateClassInput!) {
    updateClass(updateClassInput: $updateClassInput) {
      class_id
    }
  }
`;

export const useMutationUpdateClass = () => {
  const router = useRouter();

  const [updateClass] = useMutation(UPDATE_CLASS);

  // 수정하기 버튼
  const onClickClassUpdate = async (data: IFormData, address: string) => {
    console.log("수정하기버튼 클릭 됨");
    try {
      const result = await updateClass({
        variables: {
          updateClassInput: {
            class_id: router.query.class_id,
            title: data.title,
            content_summary: data.content_summary,
            price: Number(data.price),
            class_mNum: Number(data.class_mNum),
            address: address,
            address_detail: data.address_detail,
            category: data.category,
            address_category: getFirstTwoChars(address),
            // address_category: "ggg",

            total_time: data.total_time,
            content: data.content,
            accountNum: data.accountNum,
            accountName: data.accountName,
            bankName: data.bankName,
            classSchedulesInput: {
              // date: data.date,
              // remain: data.remain,
              date: "ddd수정",
              remain: 77,
            },
            imageInput: {
              url: "111",
              type: 1,
              is_main: 1,
            },
          },
        },
        refetchQueries: [
          {
            query: FECTCH_CLASS_DETAIL,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("클래스 수정이 완료되었습니다.");
      console.log(result);

      // 클래스 디테일 페이지로 이동
      const class_id = result.data?.updateClass.class_id;

      console.log("ggg");
      void router.push(`/classPage/${class_id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickClassUpdate };
};
