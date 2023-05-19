import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export const DELETE_CLASS = gql`
  mutation deleteClass($class_id: String!) {
    deleteClass(class_id: $class_id)
  }
`;

export const useMutationDeleteClass = () => {
  const router = useRouter();

  const [deleteClass] = useMutation(DELETE_CLASS);

  // 삭제하기 버튼
  //   const onClickClassDelete = async (e: React.MouseEvent) => {
  //     console.log("삭제하기 버튼 클릭 됨");
  //     try {
  //       const result = await deleteClass({
  //         variables: { class_id: String(e.currentTarget.id) },
  //       });
  //       console.log(result);
  //       alert("클래스 삭제가 완료되었습니다.");
  //     } catch (error) {
  //       if (error instanceof Error) console.log(error.message);
  //     }
  //   };

  // 삭제하기 버튼
  const onClickClassDelete = async () => {
    console.log("삭제하기 버튼 클릭 됨");
    try {
      void deleteClass({
        variables: { class_id: router.query.class_id },
      });

      alert("클래스 삭제가 완료되었습니다.");

      // 클래스 리스트 페이지로 이동
      void router.push(`/classPage`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickClassDelete };
};
