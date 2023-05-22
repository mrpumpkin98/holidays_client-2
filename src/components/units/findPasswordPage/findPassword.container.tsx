import { ChangeEvent, MouseEventHandler, useState } from "react";
import * as S from "./findPassword.styles";

export default function FindPassword() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onClickFind: MouseEventHandler<HTMLButtonElement> = (): void => {
    console.log("비밀번호 찾기");

    alert("등록된 이메일로 임시비밀번호가 발급되었습니다.");
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event?.currentTarget.value);
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event?.currentTarget.value);
  };

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.HeaderTitle>비밀번호 찾기</S.HeaderTitle>
          <S.InputWrapper>
            <S.Label>이름</S.Label>
            <S.defaultInput
              placeholder="가입시 등록한 이름을 입력해 주세요"
              onChange={onChangeName}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.defaultInput
              placeholder="가입시 등록한 아이디를 입력해 주세요"
              onChange={onChangeEmail}
            />
          </S.InputWrapper>
          <S.FindButtonWrapper>
            <S.FindButton onClick={onClickFind}>비밀번호 찾기</S.FindButton>
          </S.FindButtonWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
