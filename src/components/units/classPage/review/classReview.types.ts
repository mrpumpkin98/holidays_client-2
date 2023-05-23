import { IClassReview } from "../../../../commons/types/generated/types";

export interface IClassReviewWriteProps {
  isEdit: boolean;
  el?: IClassReview;
}

export interface IFormData {
  content: string;
  cr_id: string;
  grade: number;
}
