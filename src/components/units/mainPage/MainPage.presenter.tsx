import * as S from "./MainPage.style";
import { IMainPageUIProps } from "./MainPage.types";

export default function MainPageUI(props: IMainPageUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.MainBanner src="/mainPage/Mainimage.png" />
          <S.MainButtonWrapper>
            <S.MainCategoryWrapper onClick={props.onClickEducation}>
              <S.MainCategoryIcon src="/mainPage/education.png" />
              <S.MainCategoryLabel>교육</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
            <S.MainCategoryWrapper onClick={props.onClickCooking}>
              <S.MainCategoryIcon src="/mainPage/cook.png" />
              <S.MainCategoryLabel>요리</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
            <S.MainCategoryWrapper onClick={props.onClickWorkout}>
              <S.MainCategoryIcon src="/mainPage/workout.png" />
              <S.MainCategoryLabel>운동</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
            <S.MainCategoryWrapper onClick={props.onClickLeisure}>
              <S.MainCategoryIcon src="/mainPage/hobbies.png" />
              <S.MainCategoryLabel>여가</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
            <S.MainCategoryWrapper onClick={props.onClickMagazine}>
              <S.MainCategoryIcon src="/mainPage/magazine.png" />
              <S.MainCategoryLabel>매거진</S.MainCategoryLabel>
            </S.MainCategoryWrapper>
          </S.MainButtonWrapper>
        </S.Header>
        <S.Body>
          <S.MainContentsLeft>
            <S.MainContentsImageLeft
              src="/mainPage/메인목공이미지.jpeg"
              onClick={props.onClickMainClass}
            />
            <S.MainContentsTextWrapperLeft>
              <S.MainContentsLabelLeft>원데이 클래스</S.MainContentsLabelLeft>
              <S.MainContentsRemarksLeft>
                새로운 취미를 찾아보세요
              </S.MainContentsRemarksLeft>
              <S.MainContentsButtonLeft
                onClick={props.onClickMainClass}
                src="/mainPage/right-arrow.png"
              />
            </S.MainContentsTextWrapperLeft>
          </S.MainContentsLeft>
          <S.MainContentsRight>
            <S.MainContentsTextWrapperRight>
              <S.MainContentsLabelRight>매거진</S.MainContentsLabelRight>
              <S.MainContentsRemarksRight>
                새로운 지식을 얻어보세요
              </S.MainContentsRemarksRight>
              <S.MainContentsButtonRight
                onClick={props.onClickMainMagazine}
                src="mainPage/right-arrow.png"
              />
            </S.MainContentsTextWrapperRight>
            <S.MainContentsImageRight
              onClick={props.onClickMainMagazine}
              src="/mainPage/매거진메인.png"
            />
          </S.MainContentsRight>
          <S.MainContentsLeft>
            <S.MainContentsImageLeft
              onClick={props.onClickMainCommunity}
              src="/mainPage/메인사랑방.png"
            />
            <S.MainContentsTextWrapperLeft>
              <S.MainContentsLabelLeft>사랑방</S.MainContentsLabelLeft>
              <S.MainContentsRemarksLeft>
                다양한 의견을 나누어 보세요
              </S.MainContentsRemarksLeft>
              <S.MainContentsButtonLeft
                onClick={props.onClickMainCommunity}
                src="/mainPage/right-arrow.png"
              />
            </S.MainContentsTextWrapperLeft>
          </S.MainContentsLeft>
        </S.Body>
      </S.Wrapper>
    </>
  );
}
