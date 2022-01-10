import React, { useRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

import { getExperiences, getGraph, getProjects } from "@utils/contentful";
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
const SkillGraph = dynamic(() => import("@components/skills/SkillGraph"), {
  ssr: false,
});

type Props = {
  graphData: Graph;
  projects: Project[];
  experiences: Experience[];
};

const Home: NextPage<Props> = ({ graphData, projects, experiences }) => {
  const skillPromptRef = useRef<HTMLDivElement>(null),
    [skillPromptReveal, setSkillPromptReveal] = useState<boolean>(false),
    [favicon, setFavicon] = useState<string>("/favicon.ico"),
    [focusedNodes, setFocusedNodes] = useState<Set<string>>(new Set()),
    [graph, setGraph] = useState<Graph>({
      nodes: [],
      links: [],
    });

  useEffect(() => {
    const handleScroll = () => {
      // The graph has been scrolled into view.
      // Time to reveal it and the skill prompt.
      if (
        !skillPromptReveal &&
        window.pageYOffset + window.innerHeight - 300 >
          skillPromptRef!.current!.offsetTop
      ) {
        setTimeout(() => {
          setGraph(graphData);
          setSkillPromptReveal(true);
        }, 1000);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skillPromptReveal, graphData]);

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
        <SkillGraph data={graph} focusedNodes={focusedNodes} />
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
          <SkillPrompt trigger={skillPromptReveal} />
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
