import { gql, useMutation } from "@apollo/client";

import { IFormData } from "../../../../units/classPage/write/classWrite.types";
import { FETCH_CLASS_DETAIL } from "../../useQueries/class/useQueryFetchClassDetail";
import { useRouter } from "next/router";
import { getFirstTwoChars } from "../../../../../commons/libraries/utils";

export const UPDATE_CLASS = gql`
  mutation updateClass($updateClassInput: UpdateClassInput!) {
    updateClass(updateClassInput: $updateClassInput)
  }
`;

export const useMutationUpdateClass = () => {
  const router = useRouter();

  const [updateClass] = useMutation(UPDATE_CLASS);

  // 수정하기 버튼
  const onClickClassUpdate = async (data: IFormData, address: string) => {
    try {
      if (typeof router.query.class_id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

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
            query: FETCH_CLASS_DETAIL,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("클래스 수정이 완료되었습니다.");
      console.log(result);

      // 클래스 디테일 페이지로 이동
      console.log("class_id: ", router.query.class_id);

      void router.push(`/classPage/${router.query.class_id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickClassUpdate };
};
