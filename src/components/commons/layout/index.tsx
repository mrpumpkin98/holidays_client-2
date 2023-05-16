import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const HIDDEN = ["/Login", "/Login/SignUp"];

const Body = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  return (
    <>
      {!isHidden && <LayoutHeader />}
      <Body>{props.children}</Body>
      {!isHidden && <LayoutFooter />}
    </>
  );
}
