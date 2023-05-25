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

  const schedules = UseQueryFetchClassSchedules().data?.fetchClassSchedules;

  const router = useRouter();

  // 예약하기 버튼
  const onClickReservation = async (data: IFormData) => {
    console.log("예약 버튼 눌림");
    console.log(schedules);
    console.log(data.res_date);

    try {
      let is_schedule = false;
      for (let i = 0; i < schedules.length; i++) {
        if (schedules[i].date == data.res_date) {
          if (schedules[i].remain - Number(data.personnel) >= 0) {
            is_schedule = true;
          }
        }
      }
      if (is_schedule) {
        const result = await createReservation({
          variables: {
            createReservationInput: {
              class_id: router.query.class_id,
              res_date: data.res_date,
              // personnel: data.personnel,
              personnel: Number(data.personnel),
            },
          },
        });
        console.log("**********");
        console.log(result);
        console.log("**********");
        alert("예약 완료");
      } else {
        alert(
          "예약이 불가능한 날짜 입니다 자세한 사항은 문의하기를 이용하세요!"
        );
      }

      //   console.log(data, "~~~");
      //   console.log("data.res_date: ", data.res_date);
      //   console.log("schedules: ", schedules);

      //   alert("예약 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    onClickReservation,
  };
};
