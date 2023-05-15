import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const HIDDEN = ["/Login", "/Login/SignUp"];

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  return (
    <>
      {!isHidden && <LayoutHeader />}
      <>{props.children}</>
      {!isHidden && <LayoutFooter />}
    </>
  );
}
