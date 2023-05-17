import { useRouter } from "next/router";
import * as S from "./communityWritePage.styles";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../../commons/uploads/01/Uploads01.container";
import { useEffect, useState } from "react";

export default function communityWritePage(props: any) {
  const router = useRouter();

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

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

  return (
    <div>
      <S.Wrapper>
        <S.Title>
          {props.isEdit ? "수정글" : "게시글"}
          등록
        </S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              type="text"
              placeholder="이름을 적어주세요."
              // onChange={props.onChangeWriter}
              // value={props.data?.fetchBoard.writer}
              // readOnly={props.data?.fetchBoard.writer}
              // ref={props.inputRef}
            />
            <S.Error>{/* {props.writerError} */}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>태그</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              // onChange={props.onChangePassword}
            />
            <S.Error>{/* {props.passwordError} */}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            placeholder="제목을 작성해주세요."
            // onChange={props.onChangeTitle}
            // defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{/* {props.titleError} */}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요."
            // onChange={props.onChangeContents}
            // defaultValue={props.data?.fetchBoard.contents}
          ></S.Contents>
          <S.Error>{/* {props.contentsError} */}</S.Error>
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
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
        <S.ButtonWrapper>
          <S.SubmitButton
          // onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
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
