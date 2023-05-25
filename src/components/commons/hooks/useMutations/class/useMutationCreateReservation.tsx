import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { UseQueryFetchClassSchedules } from "../../useQueries/class/useQueryFetchClassSchedules";
import { IFormData } from "../../../../units/classPage/detail/reservationCalendar/reservationCalendar.types";
export const CREATE_RESERVATION = gql`
  mutation createReservation($createReservationInput: CreateReservationInput!) {
    createReservation(createReservationInput: $createReservationInput)
  }
`;

export const UseMutationReservation = () => {
  const [createReservation] = useMutation(CREATE_RESERVATION);

  const schedules = UseQueryFetchClassSchedules();
  console.log("schedules 배열: ", schedules.data?.fetchClassSchedules);

  console.log("=====1111======");

  const router = useRouter();

  // 예약하기 버튼
  const onClickReservation = async (data: IFormData) => {
    console.log("예약 버튼 눌림");
    try {
      //   const result = await createReservation({
      //     variables: {
      //       createReservationInput: {
      //         class_id: router.query.class_id,
      //         res_date: data.res_date,
      //         personnel: data.personnel,
      //       },
      //     },
      //   });
      //   console.log(result);
      console.log(data, "~~~");
      console.log("data.res_date: ", data.res_date);
      console.log("schedules: ", schedules);

      alert("예약 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    onClickReservation,
  };
};
