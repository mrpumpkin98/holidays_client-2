import { useQuery } from "@apollo/client";
import {
  FETCH_CLASS_DETAIL,
  UseQueryFetchClassDetail,
} from "../../../commons/hooks/useQueries/class/useQueryFetchClassDetail";
import CalendarUI from "../calendar/calendar.index";
import * as S from "./classDetail.styles";
import DOMPurify from "dompurify";
import { useMutationDeleteClass } from "../../../commons/hooks/useMutations/class/useMutationDeleteClass";
import { useMutationUpdateClass } from "../../../commons/hooks/useMutations/class/useMutationUpdateClass";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { UseMutationCreateWhishList } from "../../../commons/hooks/useMutations/class/useMutationCreateWhishList";

// 카카오지도
declare const window: typeof globalThis & {
  kakao: any;
};

export default function ClassDetail() {
  const router = useRouter();

  const { data } = UseQueryFetchClassDetail();
  console.log(data);

  // 카카오지도
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a9169f002991ce2cba289e84e705d4d4&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        let geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          `${data?.fetchClassDetail[0]?.address}`,

          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              var infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:270px;text-align:center;padding:6px 0;">${data?.fetchClassDetail[0]?.address}</div>`,
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [data?.fetchClassDetail[0]?.address]);

  // 삭제
  const { onClickClassDelete } = useMutationDeleteClass();

  // 찜
  const { onClickWishlist } = UseMutationCreateWhishList();

  // 수정 페이지로 이동
  const onClickMoveToClassEdit = () => {
    router.push(`/classPage/${router.query.class_id}/edit`);
  };

  return (
    <>
      <S.Wrapper>
        <S.Wrapper_header>
          <S.Wrapper_header_top>
            {data?.fetchClassDetail[0].title}
          </S.Wrapper_header_top>
          <S.Wrapper_header_bottom>
            <S.Review_count>후기 595개</S.Review_count>
            <S.Wrapper_header_bottom_right>
              <S.Btn onClick={onClickMoveToClassEdit}>수정</S.Btn>
              <S.Btn onClick={onClickClassDelete}>삭제</S.Btn>
            </S.Wrapper_header_bottom_right>
          </S.Wrapper_header_bottom>
        </S.Wrapper_header>
        <S.Slick />
        <S.Wrapper_body>
          <S.Wrapper_body_left>
            <S.Wrapper_body_header>
              <S.Title>{data?.fetchClassDetail[0].content_summary}</S.Title>
              <S.Heart
                onClick={() =>
                  onClickWishlist(data?.fetchClassDetail[0].class_id)
                }
              />

              {/* 찜을 했으면 검은 하트, 안했으면 빈 하트 보여주기 */}
              {/* {data?.fetchClassDetail.isWishlisted ? (
                <S.Heart_fill />
              ) : (
                <S.Heart />
              )} */}

              {/* <S.Heart_fill /> */}
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
                        {data?.fetchClassDetail[0].total_time}
                      </S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>

                  <S.ClassInfo_container>
                    <S.Icon src="/classPage/category.png" />
                    <S.ClassInfo_container_right>
                      <S.Label>카테고리</S.Label>
                      <S.SubLabel>
                        {data?.fetchClassDetail[0].category}
                      </S.SubLabel>
                    </S.ClassInfo_container_right>
                  </S.ClassInfo_container>
                </S.ClassInfo_wrapper>

                <S.Contents_wrapper>
                  <S.Title>클래스 소개</S.Title>
                  {typeof window !== "undefined" && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          data?.fetchClassDetail[0]?.content
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
          <S.Map id="map" />
          <S.Address>
            {data?.fetchClassDetail[0].address}
            <S.AddressDetail>
              {data?.fetchClassDetail[0].address_detail}
            </S.AddressDetail>
          </S.Address>
        </S.Wrapper_footer>
      </S.Wrapper>
    </>
  );
}
