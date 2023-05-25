import * as S from "./Landing.styles";
import { useInView } from "react-intersection-observer";

export default function LandingCategory(): JSX.Element {
  const [ref, inView] = useInView({
    root: null,
    rootMargin: "100px",
    threshold: 0.4,
  });

  return (
    <S.FirstWrapper>
      <S.Wrap1>
        <S.Part1>
          <S.MidWrap>
            <S.MidPic1Wrap className={inView ? "isActive" : ""} ref={ref}>
              <S.Span1 className={inView ? "isActive" : ""} ref={ref}>
                새롭고 이로운 지식
              </S.Span1>
              <S.Span className={inView ? "isActive" : ""} ref={ref}>
                Education
              </S.Span>
              <S.MidPic
                src="/landingPage/lesson.png"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </S.MidPic1Wrap>
            <S.MidPic2Wrap className={inView ? "isActive" : ""} ref={ref}>
              <S.Span1 className={inView ? "isActive" : ""} ref={ref}>
                당신의 건강을 지켜줄
              </S.Span1>
              <S.Span className={inView ? "isActive" : ""} ref={ref}>
                WorkOut
              </S.Span>
              <S.MidPic
                src="/landingPage/golf.png"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </S.MidPic2Wrap>
            <S.MidPic3Wrap className={inView ? "isActive" : ""} ref={ref}>
              <S.Span1 className={inView ? "isActive" : ""} ref={ref}>
                끝없는 재미를 안겨줄
              </S.Span1>
              <S.Span className={inView ? "isActive" : ""} ref={ref}>
                Leisure
              </S.Span>
              <S.MidPic
                src="/landingPage/fishing.png"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </S.MidPic3Wrap>
            <S.MidPic4Wrap className={inView ? "isActive" : ""} ref={ref}>
              <S.Span1 className={inView ? "isActive" : ""} ref={ref}>
                수백가지 맛집 레시피
              </S.Span1>
              <S.Span className={inView ? "isActive" : ""} ref={ref}>
                Cooking
              </S.Span>
              <S.MidPic
                src="/landingPage/kfood.png"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </S.MidPic4Wrap>
          </S.MidWrap>
        </S.Part1>
      </S.Wrap1>
    </S.FirstWrapper>
  );
}
