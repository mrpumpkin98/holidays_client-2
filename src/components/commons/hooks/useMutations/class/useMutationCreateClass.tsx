import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IFormData } from "../../../../units/classPage/write/classWrite.types";
import { getFirstTwoChars } from "../../../../../commons/libraries/utils";
import { ChangeEvent, useState } from "react";
import { useMutationUploadFile } from "./useMutationUploadFile";
import { UploadFile } from "antd";

export const CREATE_CLASS = gql`
  mutation createClass($createClassInput: CreateClassInput!) {
    createClass(createClassInput: $createClassInput)
    # {
    #   class_id
    #   title
    #   content_summary
    #   price
    #   class_mNum
    #   address
    #   address_detail
    #   category
    #   address_category
    #   total_time
    #   content
    #   accountNum
    #   accountName
    #   bankName
    #   is_ad
    # }
  }
`;

export const UseMutationCreateClass = () => {
  const [createClass] = useMutation(CREATE_CLASS);
  const router = useRouter();

  const [uploadFile] = useMutationUploadFile();

  // const [imageUrls, setImageUrls] = useState(["", "", "", "", ""]);
  // const [files, setFiles] = useState<File[]>([]);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // 등록하기 버튼
  const onClickClassSubmit = async (data: IFormData, address: string) => {
    try {
      const results = await Promise.all(
        fileList.map(
          (el) => el && uploadFile({ variables: { files: el.originFileObj } })
        )
      );

      const resultUrls = [];
      for (let i = 0; i < results.length; i++) {
        if (i === 0) {
          resultUrls.push({
            url: results[i].data.uploadFile[0],
            type: 1,
            is_main: 1,
          });
        } else {
          resultUrls.push({
            url: results[i].data.uploadFile[0],
            type: 1,
            is_main: 2,
          });
        }
      }

      console.log("^^^^^^^");
      console.log(resultUrls);
      console.log("^^^^^^^");

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
              date: "ddd",
              remain: 11,
            },
            imageInput: resultUrls,
          },
        },
      });

      alert("클래스 등록에 성공하였습니다.");

      console.log(result);
      // 클래스 디테일 페이지로 이동
      const class_id = result.data?.createClass;
      console.log(class_id);
      void router.push(`/classPage/${class_id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickClassSubmit, fileList, setFileList };
};
