import { useForm } from "react-hook-form";
import { useMutationCreateInQuiry } from "../../commons/hooks/useMutations/class/useMutationCreateClassInQuiry";
import * as S from "./classQuestion.styles";

export interface IFormData {
  // class_id: string;
  content: string;
}

export default function ClassQuestionUI() {
  const { onClickClassInQuiry } = useMutationCreateInQuiry();

  const { register, handleSubmit, setValue } = useForm<IFormData>({
    mode: "onChange",
  });

  //  제출
  const onSubmitForm = async (data: IFormData) => {
    const { ...value } = data;

    onClickClassInQuiry(value);

    setValue("content", "");
  };

  return (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Wrapper_body>
            <S.Wrapper_body_header>문의하기</S.Wrapper_body_header>

            <S.ReviewBox>
              <S.TextArea7
                rows={10}
                maxLength={300}
                placeholder="문의 시 관리자에게 메세지로 전송됩니다."
                {...register("content")}
              />

              <S.ButtonWrapper>
                {/* <S.Length>77 / 300</S.Length> */}

                <S.ReviewWriteBtn>문의하기</S.ReviewWriteBtn>
              </S.ButtonWrapper>
            </S.ReviewBox>
          </S.Wrapper_body>
          {/* <S.Error>에러</S.Error> */}
        </form>
      </S.Wrapper>
    </>
  );
}
