import { IClass, IQuery } from "../../../../commons/types/generated/types";

export interface IClassWriteProps {
  data?: Pick<IQuery, "fetchClassDetail">;

  isEdit: boolean;
  // fulladdress: string;
}

export interface IFormData {
  title: string;
  content_summary: string;
  price: number;
  class_mNum: number;
  address: string;
  fulladdress: string;
  address_detail: string;
  category: string;
  address_category: string;
  total_time: string;
  content: string;
  accountNum: string;
  accountName: string;
  bankName: string;
  date: string;
  remain: string;

  images?: string[];
}
