import * as yup from "yup";
// 클래스등록 스케마
export const classWriteSchema = yup.object({
  category: yup.string().required("카테고리를 선택해주세요."),
  title: yup.string().required("클래스 이름을 입력해주세요"),
  content_summary: yup.string().required("클래스 한줄요약을 입력해주세요"),
  total_time: yup.string().required("클래스 소요 시간을 입력해주세요"),
  class_mNum: yup.string().required("클래스 최대 인원을 입력해주세요"),
  price: yup.string().required("클래스 가격을 입력해주세요"),
  content: yup.string().required("세부내용을 입력해주세요."),
  contents: yup.string().required("세부내용을 입력해주세요."),
  accountNum: yup.string().required("입금 계좌를 입력해주세요."),
  accountName: yup.string().required("예금주를 입력해주세요."),
  bankName: yup.string().required("입금 은행을 입력해주세요."),
});
