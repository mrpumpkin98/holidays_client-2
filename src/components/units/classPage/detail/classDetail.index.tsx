import CalendarUI from "../calendar/calendar.index";
import * as S from "./classDetail.styles";

export default function ClassDetail() {
  return (
    <>
      <S.Wrapper>
        <S.Wrapper_header>
          <S.Wrapper_header_top>클래스 이름ㅇㅇㅇ</S.Wrapper_header_top>
          <S.Wrapper_header_bottom>
            <S.Review_count>후기 595개</S.Review_count>
            <S.Wrapper_header_bottom_right>
              <S.Btn>수정</S.Btn>
              <S.Btn>삭제</S.Btn>
            </S.Wrapper_header_bottom_right>
          </S.Wrapper_header_bottom>
        </S.Wrapper_header>
        <S.Slick />
        <S.Wrapper_body>
          <S.Wrapper_body_left>
            <S.Wrapper_body_header>
              <S.Title>클래스 한줄 요약ㅇㅇㅇ</S.Title>
              <S.Heart />

              {/* <Heart_fill /> */}
            </S.Wrapper_body_header>

            <S.Wrapper_body_bottom>
              <S.Wrapper_body_bottom_left>
                <S.ClassInfo_wrapper>
                  <S.ClassInfo_container>
                    <S.Icon src="/classPage/calender.png" />
                    <S.ClassInfo_container_right>
                      <S.Label>클래스 진행</S.Label>
                      <S.SubLabel>매주 화, 목</S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>

                  <S.ClassInfo_container>
                    <S.Icon src="/classPage/clock.png" />
                    <S.ClassInfo_container_right>
                      <S.Label>진행 시간</S.Label>
                      <S.SubLabel>100시간</S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>

                  <S.ClassInfo_container>
                    <S.Icon src="/classPage/category.png" />
                    <S.ClassInfo_container_right>
                      <S.Label>카테고리</S.Label>
                      <S.SubLabel>운동</S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>
                </S.ClassInfo_wrapper>

                <S.Contents_wrapper>
                  <S.Title>클래스 소개</S.Title>
                  <S.Contents>ggg</S.Contents>
                </S.Contents_wrapper>
              </S.Wrapper_body_bottom_left>
            </S.Wrapper_body_bottom>
          </S.Wrapper_body_left>

          {/* 달력 */}
          <S.Wrapper_body_right>
            <CalendarUI />
          </S.Wrapper_body_right>
        </S.Wrapper_body>

        <S.Wrapper_footer>
          <S.Title>클래스 위치</S.Title>
          <S.Map />
          <S.AddressDetail>서울특별시 구로구 ㅇㅇㅇㅇㅇ</S.AddressDetail>
        </S.Wrapper_footer>
      </S.Wrapper>
    </>
  );
}
