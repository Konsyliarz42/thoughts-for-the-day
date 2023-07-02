import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "@styles/globals.css";

export interface staticProps {
  title: string;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
