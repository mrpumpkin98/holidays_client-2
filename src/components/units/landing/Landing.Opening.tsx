import * as S from "./Landing.styles";
import { useInView } from "react-intersection-observer";
// import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

export default function LandingWebInfo() {
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    // rootMargin: "800px", //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0, // 0 - 1
  });

  const router = useRouter();

  const onClickLogo = () => {
    router.push("/classPage");
  };

  return (
    <S.OpenWrapper>
      <S.Wrapper1>
        <S.RightWrapper>
          <S.LogoWrap onClick={onClickLogo}>
            <S.MainLogo src="/images/logo.png" />
          </S.LogoWrap>
          <S.LogoInfo className={inView ? "isActive" : ""}>
            <span>나만의&nbsp; </span>
            <span> 새로운&nbsp; </span>
            <span> 길을&nbsp; </span>
            <span> 찾아&nbsp; </span>
            <span>보세요</span>
          </S.LogoInfo>
        </S.RightWrapper>
        <S.LeftWrapper>
          <S.LeftItem1 className={inView ? "isActive" : ""} ref={ref}>
            <S.Pick className={inView ? "isActive" : ""} ref={ref}>
              <div style={{ fontSize: "23px" }}>
                다양한 분야의
                <br />
                원데이 클래스를
                <br />
                만나보세요
              </div>
              <br />
            </S.Pick>
            <S.Content3 className={inView ? "isActive" : ""} ref={ref}>
              여러분에게도
              <br />
              강사님이
              <br />될 기회가 열려 있습니다
            </S.Content3>
          </S.LeftItem1>
          <S.LeftItem2 className={inView ? "isActive" : ""} ref={ref}>
            <S.Pick className={inView ? "isActive" : ""} ref={ref}>
              <div style={{ fontSize: "23px" }}>
                다양한 의견을
                <br />
                나눌 수 있는
                <br />
                사랑방
              </div>
              <br />
            </S.Pick>
            <S.Content3 className={inView ? "isActive" : ""} ref={ref}>
              하루에도 수만 건의
              <br />
              의견들이 <br />
              홀리데이즈를 <br /> 오가고 있습니다
            </S.Content3>
          </S.LeftItem2>
          <S.LeftItem3 className={inView ? "isActive" : ""} ref={ref}>
            <S.Pick className={inView ? "isActive" : ""} ref={ref}>
              <div style={{ fontSize: "23px" }}>
                여러 전문 지식을
                <br />
                맛볼 수 있는
                <br />
                홀리데이 매거진
              </div>
              <br />
            </S.Pick>
            <S.Content3 className={inView ? "isActive" : ""} ref={ref}>
              어떤 분야의 전문가라도
              <br />
              홀리데이 매거진에
              <br />
              기고할 수 있습니다
            </S.Content3>
          </S.LeftItem3>
        </S.LeftWrapper>
      </S.Wrapper1>
    </S.OpenWrapper>
  );
}
