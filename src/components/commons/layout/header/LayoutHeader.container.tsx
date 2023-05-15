import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const [userName, setContents] = useState(false);
  const onClickLogIn = () => {
    setContents(true);
  };
  const onClickLogOut = () => {
    setContents(false);
  };

  return (
    <LayoutHeaderUI
      userName={userName}
      onClickLogIn={onClickLogIn}
      onClickLogOut={onClickLogOut}
    />
  );
}
