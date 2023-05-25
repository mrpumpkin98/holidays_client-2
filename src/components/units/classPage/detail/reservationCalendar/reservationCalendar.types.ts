import {
  IQuery,
  IQueryFetchReservationsOfClassArgs,
} from "../../../../../commons/types/generated/types";

export interface IReservationCreateProps {
  // data?: Pick<IQuery, "fetchReservationsOfClass">;
  date: string;
  personnel: string;

  // isEdit: boolean;
}

export interface IFormData {
  res_date: string;
  personnel: string;
}
