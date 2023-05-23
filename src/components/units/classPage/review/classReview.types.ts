import { IFetchClassReviews } from "../../../../commons/types/generated/types";

export interface IClassReviewWriteProps {
  isEdit: boolean;
  el?: IFetchClassReviews;
}

export interface IFormData {
  content: string;
  cr_id: string;
  grade: number;
}
