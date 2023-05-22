import React, { ChangeEvent, useState } from "react";
import * as S from "./modal.styles";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "../../../hooks/useQueries/user/UseQueryFetchLoginUser";
import { UPDATE_USER } from "../../../hooks/useMutations/user/useMutationUpdateUser";
import { formatPhoneNumber } from "../../../../../commons/libraries/utils";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const { data, refetch } = useQuery(FETCH_LOGIN_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setPhone(formattedPhoneNumber);
  };

  // 회원 정보 업데이트
  const onClickUpdate = async () => {
    if (name === "" && phone === "") {
      alert("수정한 내용이 없습니다.");
      return;
    }
    const updateUserInput: { name?: string; phone?: string } = {};
    if (name !== "") updateUserInput.name = name;
    if (phone !== "") updateUserInput.phone = phone;

    await updateUser({
      variables: {
        updateUserInput,
      },
      refetchQueries: [{ query: FETCH_LOGIN_USER }],
    });
    onClose();
  };

  return (
    <S.ModalWrapper>
      {children}
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>유저 정보 수정</S.Title>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.Labal>계정 ID</S.Labal>
          <S.Contents>{data?.fetchLoginUser?.email}</S.Contents>
          <S.Labal>이름(닉네임)</S.Labal>
          <S.ContentsInput
            defaultValue={data?.fetchLoginUser.name}
            onChange={onChangeName}
          />
          <S.Labal>전화번호</S.Labal>
          <S.ContentsInputWrapper>
            <S.ContentsInput
              defaultValue={formatPhoneNumber(data?.fetchLoginUser.phone)}
              onChange={onChangePhone}
            />
            <S.ContentsInputButton className="GetCertified">
              인증 받기
            </S.ContentsInputButton>
          </S.ContentsInputWrapper>
          <S.ContentsInputWrapper>
            <S.ContentsInput />
            <S.ContentsInputButton className="AuthenticationCheck">
              인증번호확인
            </S.ContentsInputButton>
          </S.ContentsInputWrapper>
          <S.ButtonWrapper>
            <S.Button className="Cancel" onClick={onClose}>
              취소
            </S.Button>
            <S.Button className="Edit" onClick={onClickUpdate}>
              수정하기
            </S.Button>
          </S.ButtonWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
