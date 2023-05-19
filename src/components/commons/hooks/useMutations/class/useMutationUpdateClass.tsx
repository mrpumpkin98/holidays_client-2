import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { IFormData } from "../../../../units/classPage/write/classWrite.types";

// 클래스 수정하기
export const UPDATE_CLASS = gql`
  mutation updateClass($updateClassInput: UpdateClassInput!) {
    updateClass(updateClassInput: $updateClassInput) {
      class_id
    }
  }
`;

export const useMutationUpdateClass = () => {
  const [updateClass] = useMutation(UPDATE_CLASS);

  // 우편주소(카카오지도)
  const [fulladdress, setFulladdress] = useState("");

  // 수정하기 버튼
  const onClickClassUpdate = async (data: IFormData) => {
    try {
      const result = await updateClass({
        variables: {
          updateClassInput: {
            title: data.title,
            content_summary: data.content_summary,
            price: Number(data.price),
            class_mNum: Number(data.class_mNum),
            // address: data.address,
            address: fulladdress,
            address_detail: data.address_detail,
            category: data.category,
            // address_category: data.address_category,
            address_category: "Gggg",

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
      alert("클래스 수정이 완료되었습니다.");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickClassUpdate };
};
