import {
  AppType,
  Provider as GadgetProvider,
} from "@gadgetinc/react-shopify-app-bridge";
import { BaseProvider } from "baseui";
import { HeadingLevel } from "baseui/heading";
import "modern-css-reset";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { api } from "../lib/api";
import { styletron } from "../lib/styletron";

const apiKey = process.env["NEXT_PUBLIC_API_KEY"] || "not-a-key";

function GadgetApp({ Component, pageProps }: AppProps) {
  return (
    <GadgetProvider type={AppType.Embedded} shopifyApiKey={apiKey} api={api}>
      <StyletronProvider value={styletron}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeadingLevel>
          <Component {...pageProps} />
        </HeadingLevel>
      </StyletronProvider>
    </GadgetProvider>
  );
}
export default GadgetApp;
