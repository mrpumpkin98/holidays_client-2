import { useQuery } from "@apollo/client";
import {
  FECTCH_CLASS_DETAIL,
  UseQueryFetchClassDetail,
} from "../../../commons/hooks/useQueries/class/useQueryFetchClassDetail";
import CalendarUI from "../calendar/calendar.index";
import * as S from "./classDetail.styles";
import DOMPurify from "dompurify";
import { useMutationDeleteClass } from "../../../commons/hooks/useMutations/class/useMutationDeleteClass";

export default function ClassDetail() {
  const { data } = UseQueryFetchClassDetail();
  console.log(data);

  const { onClickClassDelete } = useMutationDeleteClass();

  return (
    <>
      <S.Wrapper>
        <S.Wrapper_header>
          <S.Wrapper_header_top>
            {data?.fetchClassDetail.title}
          </S.Wrapper_header_top>
          <S.Wrapper_header_bottom>
            <S.Review_count>후기 595개</S.Review_count>
            <S.Wrapper_header_bottom_right>
              <S.Btn>수정</S.Btn>
              <S.Btn onClick={onClickClassDelete}>삭제</S.Btn>
            </S.Wrapper_header_bottom_right>
          </S.Wrapper_header_bottom>
        </S.Wrapper_header>
        <S.Slick />
        <S.Wrapper_body>
          <S.Wrapper_body_left>
            <S.Wrapper_body_header>
              <S.Title>{data?.fetchClassDetail.content_summary}</S.Title>
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
                      <S.SubLabel>
                        {data?.fetchClassDetail.total_time}
                      </S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>

                  <S.ClassInfo_container>
                    <S.Icon src="/classPage/category.png" />
                    <S.ClassInfo_container_right>
                      <S.Label>카테고리</S.Label>
                      <S.SubLabel>{data?.fetchClassDetail.category}</S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>
                </S.ClassInfo_wrapper>

                <S.Contents_wrapper>
                  <S.Title>클래스 소개</S.Title>
                  {typeof window !== "undefined" && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          data?.fetchClassDetail?.content
                        ),
                      }}
                    />
                  )}
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
          <S.AddressDetail>
            {data?.fetchClassDetail.address}
            {data?.fetchClassDetail.address_detail}
          </S.AddressDetail>
        </S.Wrapper_footer>
      </S.Wrapper>
    </>
  );
}
