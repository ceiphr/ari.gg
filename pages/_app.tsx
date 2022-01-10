import "@styles/globals.css";
import "@styles/index.css";
import type { AppProps } from "next/app";
import Script from "next/script";

// @ts-ignore No TS definition found for module 'react-reveal'
import config from "react-reveal/globals";

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
}

export default MyApp;
