import styled from "@emotion/styled";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = styled(Slider)`
  .slick-dots {
    bottom: 25px;
  }

  .slick-dots li.slick-active button:before {
    color: white;
    /* color: black; */
  }

  .slick-dots li button:before {
    color: white;
    /* color: black; */
  }

  /* ---------------- */

  .slick-arrow {
    display: block;
    width: 40px;
    height: 40px;
  }
  .slick-prev {
    left: 5%;
    z-index: 999999;
  }

  .slick-next {
    right: 5%;
    z-index: 999999;
  }

  // --------------

  .slick-next:before,
  .slick-prev::before {
    content: "";
    display: block;
    width: 40px;
    height: 40px;
    background-color: #ddd;
    border-radius: 50%;
  }
  .slick-next:before {
    background-size: 10px;
    background-image: url("/classPage/next.png");
    background-position: center;
    background-repeat: no-repeat;
  }

  .slick-prev:before {
    background-size: 10px;
    background-image: url("/classPage/before.png");
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Wrapper = styled.div`
  width: 1113px;
  height: 466px;
  /* border: 1px solid black; */
  border-radius: 15px;
`;

// 이미지
const Img = styled.img`
  /* width: 480px; */
  width: 1113px;
  height: 466px;

  /* margin: 30px 0px 70px 0px; */
  /* background-color: beige; */
  border-radius: 15px;
`;

// -------

export const MarketImg = styled.div`
  /* border: 3px solid green; */
  width: 480px;
  background-position: center;
  height: 480px;
`;

// -------

export default function SlickPage(props: any) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("ggggggggg");
  console.log(props.src);
  console.log("ggggggggg");

  return (
    <Wrapper>
      <SliderComponent {...settings}>
        {props.src && props.src.map((el: any) => <Img src={`${el.url}`} />)}
      </SliderComponent>
    </Wrapper>
  );
}
