import { useRouter } from "next/router";
import * as S from "./communityWritePage.styles";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../../commons/uploads/01/Uploads01.container";
import { ChangeEvent, useEffect, useState } from "react";
import { CREATE_BOARD } from "../../../commons/hooks/useMutations/board/useMutationCreateBoard";
import { useMutation } from "@apollo/client";

export default function communityWritePage(props: any) {
  const router = useRouter();

  const [fileUrls, setFileUrls] = useState([""]);

  //  이미지 등록

  // const onChangeFileUrls = (fileUrl: string, index: number): void => {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   setFileUrls(newFileUrls);
  // };

  // useEffect(() => {
  //   const images = props.data?.fetchBoard.images;
  //   if (images !== undefined && images !== null) setFileUrls([...images]);
  // }, [props.data]);

  const [createBoard] = useMutation(CREATE_BOARD);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          title,
          content,
          email,
          imageInput: [
            {
              url: "테스트",
              type: 1,
              is_main: 1,
            },
          ],
        },
      },
    });
    alert("클래스 등록에 성공하였습니다.");
    console.log(result);
  };

  return (
    <div>
      <S.Wrapper>
        <S.Box>
          <S.TitleTextWrapper>
            <S.Title>작성 가이드</S.Title>
            <S.Text>
              클래스 혹은 제품 홍보 목적의 콘텐츠는 오픈이 불가합니다.
            </S.Text>
            <S.Text>
              사진 첨부 시 용량은 장당 최대 20MB까지 업로드 가능합니다.
            </S.Text>
            <S.Text>타인의 지식재산권을 침해하지 않도록 유의해주세요.</S.Text>
          </S.TitleTextWrapper>
        </S.Box>
        <S.ImageWrapper>
          <S.UploadButton>
            {fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.UploadButton>
        </S.ImageWrapper>
        <S.InputWrapper>
          <S.Label>이메일</S.Label>
          <S.Password type="text" onChange={onChangeEmail} />
          <S.Error>{/* {props.passwordError} */}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            onChange={onChangeTitle}
            // defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{/* {props.titleError} */}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            onChange={onChangeContent}
            // defaultValue={props.data?.fetchBoard.contents}
          ></S.Contents>
          <S.Error>{/* {props.contentsError} */}</S.Error>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={onClickSubmit}
            // Active={props.isEdit ? true : props.Active}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
          {/* <B.CancelButton onClick={props.onClickCancel}> */}
          <S.CancelButton>취소하기</S.CancelButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
