import { useRouter, NextRouter } from "next/router";
import { UseQueryFetchLoginUser } from "../useQueries/user/UseQueryFetchLoginUser";

// 회원 정보에 phone 이 입력되어 있는지 여부를 확인하고 없을 시 myPage로 router.push하는 권한분기 함수
export const useAuth02 = (): void => {
  const router: NextRouter = useRouter();
  const { data: userData } = UseQueryFetchLoginUser();

  // 로그인 여부 확인
  if (!userData?.fetchLoginUser.phone) {
    alert("휴대전화 인증 후 이용하실 수 있습니다");
    void router.push(`/myPage`);
  }
};
