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
import ToastUIEditor from "../../../commons/toastUI";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { WriteProductSchema } from "./validation";
import { UseMutationCreateBoard } from "../../../commons/hooks/useMutations/board/useMutationCreateBoard";
import { UseMutationUploadFile } from "../../../commons/hooks/useMutations/uploadFile/UseMutationUploadFile";
import { FETCH_BOARD_DETAIL } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardsDetail";

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

export default function communityWritePage(props: any) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState([""]);
  const contentsRef = useRef<any>(null);
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

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file === undefined) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target.result);
        setFiles(file);
      }
    };
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setContent(text === "<p><br><p>" ? "" : text);
  };
  const onClickSubmit = async (data: ProductInput) => {
    // const resultFile = await uploadFile({ variables: { file: files } });
    // const url = resultFile.data?.uploadFile;
    // if (!url) return;
    await createBoard({
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
  };

  ///////////////////////////////////////////////////////////////
  //  취소하기
  //////////////////////////////////////////////////////////////

  const onClickCancel = async () => {
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
          <S.Label>이메일</S.Label>
          {/* <S.Password type="text" onChange={onChangeEmail} /> */}
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
          // onChange={onChangeContent}
          // defaultValue={props.data?.fetchBoard.contents}
          ></S.Contents>
          <S.WrapperReactQuill>
            <S.Label>상품설명 </S.Label>
            <ToastUIEditor
              contentsRef={contentsRef}
              onChangeContents={onChangeContents}
              // initialValue={data?.description}
            />
          </S.WrapperReactQuill>
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
          <S.CancelButton onClick={onClickCancel}>취소하기</S.CancelButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  );
}
