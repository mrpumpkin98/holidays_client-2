import { IFetchClassReviews } from "../../../../commons/types/generated/types";

export interface IClassReviewWriteProps {
  isEdit: boolean;
  setIsEdit: any; // 추가
  el?: IFetchClassReviews;
}

export interface IFormData {
  content: string;
  cr_id: string;
  grade: number;
}
