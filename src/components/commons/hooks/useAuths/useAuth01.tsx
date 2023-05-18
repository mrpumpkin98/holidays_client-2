import { useRouter, NextRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

// 로그인 여부를 확인하고 로그인하지 않았을 시 로그인 창으로 router.push 하는 권한분기 함수
export const useAuth01 = (): void => {
  const router: NextRouter = useRouter();
  const [accessToken]: [string | undefined, any] =
    useRecoilState(accessTokenState);

  // 로그인 여부 확인
  if (accessToken === undefined) {
    alert("로그인 후 이용해 주세요");
    void router.push(`/loginPage`);
  }
};
