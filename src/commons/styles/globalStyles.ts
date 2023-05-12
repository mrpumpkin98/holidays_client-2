import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont"; //myfont라는 이름은 임의로 정한다.
    src: url("/fonts/scifibit.ttf");
  }
`;
