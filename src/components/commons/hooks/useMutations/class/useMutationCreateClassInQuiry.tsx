import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IFormData } from "../../../../units/classQuestionPage/classQuestion.index";

// 후기
export const CREATE_CLASS_INQUIRY = gql`
  mutation createClassInquiry($class_id: String!, $content: String!) {
    createClassInquiry(class_id: $class_id, content: $content)
  }
`;

export const useMutationCreateInQuiry = () => {
  const router = useRouter();

  const [createInQuiry] = useMutation(CREATE_CLASS_INQUIRY);

  //  문의하기 버튼
  const onClickClassInQuiry = async (data: IFormData) => {
    console.log("문의하기 버튼 클릭 됨");
    try {
      void createInQuiry({
        variables: { class_id: router.query.class_id, content: data.content },
      });

      alert("문의하기 완료");
      console.log(data);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickClassInQuiry };
};
