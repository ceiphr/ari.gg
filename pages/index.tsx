import React, { useRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

import {
  AboutMe,
  GOL,
  BackgroundGrid,
  BackgroundMarquee,
  Hero,
  Navigation,
  SkillPrompt,
  ProjectList,
  ExperienceList,
  Footer,
} from "@components/index";
import { getExperiences, getGraph, getProjects } from "@utils/contentful";
const SkillGraph = dynamic(() => import("@components/skills/SkillGraph"), {
  ssr: false,
});

const Home: NextPage<{
  graphData: Graph;
  projects: any;
  experiences: any;
}> = ({ graphData, projects, experiences }) => {
  const mainRef = useRef<HTMLDivElement>(null),
    skillPromptRef = useRef<HTMLDivElement>(null),
    [favicon, setFavicon] = useState<string>("/favicon.ico"),
    [focusedNodes, setFocusedNodes] = useState<string[]>([]),
    [skillNodeReveal, setskillNodeReveal] = useState<Graph>({
      nodes: [],
      links: [],
    }),
    [skillTextReveal, setskillTextReveal] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // The graph has been scrolled into view. Time to reveal its nodes.
      if (
        !skillTextReveal &&
        window.pageYOffset + window.innerHeight - 300 >
          skillPromptRef!.current!.offsetTop
      ) {
        setTimeout(() => {
          setskillNodeReveal(graphData);
          setskillTextReveal(true);
        }, 1000);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skillTextReveal, graphData]);

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
        <meta property="og:image" content="htt[s://ari.gg/aribirnbaum.jpg" />
        <meta name="theme-color" content="var(--theme)" />
        <link rel="stylesheet" href="https://use.typekit.net/ihw7ajs.css" />
      </Head>

      <main ref={mainRef} className="dark:text-white">
        <BackgroundGrid />
        <Navigation />
        <SkillGraph data={skillNodeReveal} focusedNodes={focusedNodes} />
        <section className="h-screen overflow-hidden bg-white dark:bg-black">
          <BackgroundMarquee />
          <Hero />
        </section>
        <section className="bg-white dark:bg-black border-y border-black/20 dark:border-white/20">
          <div className="relative h-screen overflow-hidden">
            <AboutMe />
            <GOL />
          </div>
        </section>
        <section className="h-screen overflow-hidden" ref={skillPromptRef}>
          <SkillPrompt trigger={skillTextReveal} />
        </section>
        <div className="border-t md:border-0 pt-14 border-black/20 dark:border-white/20 bg-white/50 dark:bg-black/50 backdrop-blur-lg md:backdrop-blur-none md:bg-transparent">
          <section className="overflow-hidden">
            <ProjectList
              projects={projects}
              setFocusedNodes={setFocusedNodes}
            />
          </section>
          <section className="overflow-hidden">
            <ExperienceList
              experiences={experiences}
              setFocusedNodes={setFocusedNodes}
            />
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const graphData: Graph | null = await getGraph();
  const projects: Project[] | null = await getProjects();
  const experiences: Experience[] | null = await getExperiences();

  return {
    props: {
      graphData,
      projects,
      experiences,
    },
  };
}
