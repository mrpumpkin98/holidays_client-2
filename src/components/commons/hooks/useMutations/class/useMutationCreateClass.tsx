import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IFormData } from "../../../../units/classPage/write/classWrite.types";
import { getFirstTwoChars } from "../../../../../commons/libraries/utils";
import { ChangeEvent, useState } from "react";
import { useMutationUploadFile } from "./useMutationUploadFile";

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

  const [uploadFile] = useMutationUploadFile();

  const [imageUrls, setImageUrls] = useState(["", "", "", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  // 등록하기 버튼
  const onClickClassSubmit = async (data: IFormData, address: string) => {
    try {
      const results = await Promise.all(
        files.map((el) => el && uploadFile({ variables: { files: el } }))
      );
      console.log(results); // [resultFile0, resultFile1, resultFile2]

      const resultUrls = results.map((el) =>
        el ? el.data?.uploadFile.url : ""
      ); // [dog1.jpg, dog2.jpg, dog3.jpg]

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
            imageInput: {
              // url: resultUrls,
              url: "gg",
              type: 1,
              is_main: 2,
            },
            // imageInput: data.images?.map((image) => ({
            //   url: image.url,
            //   type: 1, // 클래스는 type 1
            //   is_main: 2, // 메인이미지: 1 , 서브이미지: 2
            // })),
          },
        },
      });

      alert("클래스 등록에 성공하였습니다.");

      console.log(result);
      // 클래스 디테일 페이지로 이동
      const class_id = result.data?.createClass.class_id;
      console.log(class_id);
      void router.push(`/classPage/${class_id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      console.log(file);

      // 2. 임시URL 생성 => (진짜URL - 다른 브라우저에서도 접근 가능)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          console.log(event.target?.result);

          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };
  return { onClickClassSubmit, onChangeFile };
};
