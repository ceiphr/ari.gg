import "@styles/globals.css";
import "@styles/index.css";
import type { AppProps } from "next/app";
// @ts-ignore No TS definition found for module 'react-reveal'
import config from "react-reveal/globals";

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
