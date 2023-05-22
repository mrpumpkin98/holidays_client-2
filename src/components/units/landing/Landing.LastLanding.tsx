import { useRouter } from "next/router";
import * as S from "./Landing.styles";
import { useInView } from "react-intersection-observer";

export default function LastLandingPage() {
  const router = useRouter();

  const onClickMoveToHome = () => {
    router.push("/classPage");
  };

  const [ref, inView] = useInView({
    root: null,
    rootMargin: "100px",
    threshold: 0.4,
  });

  return (
    <S.LastWrapper>
      <S.Wrapper className={inView ? "isActive" : ""} ref={ref}>
        <S.Logo
          src="/images/logo2.png"
          className={inView ? "isActive" : ""}
          ref={ref}
        />
        <div>
          <S.Text
            onClick={onClickMoveToHome}
            className={inView ? "isActive" : ""}
            ref={ref}
          >
            둘러보기
          </S.Text>
        </div>
      </S.Wrapper>
    </S.LastWrapper>
  );
}
