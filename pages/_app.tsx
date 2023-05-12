import "../styles/globals.css";
import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Component />
          </>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}
