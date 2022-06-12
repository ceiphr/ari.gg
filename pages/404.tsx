import React, { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import {
  BackgroundGrid,
  BackgroundMarquee,
  Hero,
  Navigation,
} from "@components/index";

const Error: NextPage<{}> = () => {
  const [favicon, setFavicon] = useState<string>("/favicon.ico");

  // Change the favicon based on the prefers-color-scheme media query.
  useEffect(() => {
    async function setImage() {
      let mediaQuery = await window.matchMedia("(prefers-color-scheme: dark)");

      mediaQuery.addEventListener("change", (e) => {
        setFavicon(e.matches ? `/favicon-white.png` : `/favicon-black.png`);
      });
      setFavicon(
        mediaQuery.matches ? `/favicon-white.png` : `/favicon-black.png`
      );
    }
    setImage();
  }, [favicon]);

  return (
    <>
      <Head>
        <title>Ari Birnbaum</title>
        <meta
          name="description"
          content="I’m a computer science student at Stevens Institute of Technology. I write technical articles and make polished online experiences."
        />
        <link rel="icon" href={favicon} />
        <meta property="og:title" content="The Portfolio of Ari Birnbaum" />
        <meta
          property="og:description"
          content="I’m a computer science student at Stevens Institute of Technology. I write technical articles and make polished online experiences."
        />
        <meta property="og:url" content="https://ari.gg" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ari.gg/aribirnbaum.jpg" />
        <meta name="theme-color" content="var(--theme)" />
        <link rel="stylesheet" href="https://use.typekit.net/ihw7ajs.css" />
      </Head>
      <main className="dark:text-white">
        <BackgroundGrid />
        <Navigation />
        <section className="h-screen overflow-hidden bg-white dark:bg-black">
          <BackgroundMarquee error />
          <Hero error />
        </section>
      </main>
    </>
  );
};

export default Error;
