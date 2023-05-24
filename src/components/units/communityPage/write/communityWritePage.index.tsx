import { useRouter } from "next/router";
import * as S from "./communityWritePage.styles";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../../commons/uploads/01/Uploads01.container";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CREATE_BOARD } from "../../../commons/hooks/useMutations/board/useMutationCreateBoard";
import { useMutation, useQuery } from "@apollo/client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UPLOAD_FILE } from "../../../commons/hooks/useMutations/uploadFile/UseMutationUploadFile";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { WriteProductSchema } from "./validation";
import { UseMutationCreateBoard } from "../../../commons/hooks/useMutations/board/useMutationCreateBoard";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/uploadFile/UseMutationUploadFile";
import { FETCH_BOARD_DETAIL } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardsDetail";
import dynamic from "next/dynamic";

const ToastEditor = dynamic(
  async () => await import("../../../commons/toastUI"),
  {
    ssr: false,
  }
);

interface ProductInput {
  name: string;
  productCategoryId: string;
  description: string;
  discountRate: number;
  image: string;
  price: number;
  quantity: number;
  veganLevel: number;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  productOption?: {
    option6?: string;
    option7?: string;
    option8?: string;
    option9?: string;
    option10?: string;
    option11?: string;
  };
}

export default function CommunityWritePage(props: any) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState([""]);
  const contentsRef = useRef(null);
  const [createBoard] = UseMutationCreateBoard();
  const [uploadFile] = UseMutationUploadFile();
  const { data } = useQuery(FETCH_BOARD_DETAIL, {
    variables: { board_id: router.query.board_id },
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { register, handleSubmit, setValue, formState } = useForm<ProductInput>(
    {
      resolver: yupResolver(WriteProductSchema),
      mode: "onChange",
    }
  );

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (text: any) => {
    const editorInstance = contentsRef.current?.getInstance().getHTML();
    setContent(text === "<p><br><p>" ? "" : editorInstance);
  };

  const onClickSubmit = async (data: ProductInput) => {
    console.log(content);
    const result = await createBoard({
      variables: {
        createBoardInput: {
          title: title,
          content: content,
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
    void router.push("/seller");
    console.log(result);
  };

  const onClickCancel = () => {
    router.push(`/communityPage`);
  };

  return (
    <div>
      <S.Wrapper>
        <S.TitleMain>사랑방 글쓰기</S.TitleMain>
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
          <S.Label>제목</S.Label>
          <S.Subject type="text" onChange={onChangeTitle} />
          <S.Error>{/* {props.titleError} */}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          {/* <S.Contents onChange={onChangeTitle} /> */}
          <S.ToastEditorWrapper>
            <ToastEditor
              contentsRef={contentsRef}
              onChangeContents={onChangeContents}
              initialValue={data?.fetchBoard.contents}
            />
          </S.ToastEditorWrapper>
          <S.Error>{/* {props.contentsError} */}</S.Error>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton onClick={onClickSubmit}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
          <S.CancelButton onClick={onClickCancel}>취소하기</S.CancelButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
