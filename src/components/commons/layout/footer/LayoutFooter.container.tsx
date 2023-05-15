import { useRouter } from "next/router";
import LayoutFooterrUI from "./LayoutFooter.presenter";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export default function LayouFooter(): JSX.Element {
  const router = useRouter();

  return <LayoutFooterrUI />;
}
