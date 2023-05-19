import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UseMutationCreateUser } from "../../commons/hooks/useMutations/signup/UseMutationCreateUser";
import * as S from "./signUp.styles";
import { SignUpSchema } from "./signUp.validation";

interface IFormSignUpData {
  email: string;
  pwd: string;
  name: string;
  birth_date?: string;
  passwordCheck?: string;
  phone?: string;
}

export default function SignUp(): JSX.Element {
  const [verify, SetVerify] = useState(false);
  const [verified, SetVerified] = useState(false);

  const onClickVerify = (event: React.MouseEvent<HTMLButtonElement>): void => {
    SetVerify(true);
  };

  const onClickVerified = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    SetVerified(true);
  };

  const handleVerify = verify ? onClickVerified : onClickVerify;

  const { register, handleSubmit, formState } = useForm<IFormSignUpData>({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });

  const { SubmitCreateUser } = UseMutationCreateUser();

  const onSubmitForm = (data: IFormSignUpData) => {
    const { passwordCheck, ...value } = data;
    void SubmitCreateUser(value);
  };

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <S.HeaderTitle>회원 가입</S.HeaderTitle>
            <S.InputWrapper>
              <S.Label>아이디</S.Label>
              <S.defaultInput
                placeholder="이메일을 입력해 주세요"
                type="text"
                {...register("email")}
              />
              {verified ? (
                <S.VerifyFinished>
                  이메일 인증이 완료되었습니다
                </S.VerifyFinished>
              ) : (
                <S.VerifyWrapper>
                  {verify && <S.VerifyNumber placeholder="인증번호 입력" />}
                  <S.VerifyButton onClick={handleVerify}>
                    {verify ? "인증 완료" : "인증번호 발송"}
                  </S.VerifyButton>
                </S.VerifyWrapper>
              )}
            </S.InputWrapper>
            <S.Errors>{formState.errors.email?.message}</S.Errors>
            <S.InputWrapper>
              <S.Label>이름</S.Label>
              <S.defaultInput
                type="text"
                placeholder="이름을 입력해 주세요"
                {...register("name")}
              />
            </S.InputWrapper>
            <S.Errors>{formState.errors.name?.message}</S.Errors>
            <S.InputWrapper>
              <S.Label>비밀번호</S.Label>
              <S.defaultInput
                placeholder="영문+숫자 조합 8~16자리의 비밀번호를 입력해 주세요"
                type="password"
                {...register("pwd")}
              />
            </S.InputWrapper>
            <S.Errors>{formState.errors.pwd?.message}</S.Errors>
            <S.InputWrapper>
              <S.Label>비밀번호 확인</S.Label>
              <S.defaultInput
                placeholder="비밀번호를 다시 입력해 주세요"
                type="password"
                {...register("passwordCheck")}
              />
            </S.InputWrapper>
            <S.Errors>{formState.errors.passwordCheck?.message}</S.Errors>
            <S.InputWrapper>
              <S.Subtitle>선택 입력 사항</S.Subtitle>
              <S.SubtitleLine />
              <S.Label>휴대전화 등록</S.Label>
              <S.defaultInput
                {...register("phone")}
                placeholder="- 없이 휴대폰 번호를 입력해 주세요"
              />
            </S.InputWrapper>
            <S.Errors>{formState.errors.phone?.message}</S.Errors>
            <S.InputWrapper>
              <S.Label>생년월일</S.Label>
              <S.defaultInput
                placeholder="주민등록번호 앞 6자리를 입력해 주세요"
                {...register("birth_date")}
              />
            </S.InputWrapper>
            <S.Errors>{formState.errors.birth_date?.message}</S.Errors>
            <S.ButtonWrapper>
              <S.SignUpButton type="submit">가입하기</S.SignUpButton>
            </S.ButtonWrapper>
          </form>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
