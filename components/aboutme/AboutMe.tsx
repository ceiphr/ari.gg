import React, { FunctionComponent } from "react";
// @ts-ignore types not provided :(
import Fade from "react-reveal/Fade";

const Hero: FunctionComponent = () => (
  <>
    <div className="hidden md:grid md:grid-cols-6 2xl:grid-cols-7 absolute top-1/2 -translate-y-1/2 w-screen h-screen">
      <Fade left distance="50px">
        <div className="will-change-transform relative col-start-2 col-span-2">
          <div className="absolute bottom-0 max-h-screen w-full pointer-events-none select-none">
            <img
              className="grayscale opacity-60"
              src="/me.png"
              alt="Ari Birnbaum"
              width={1689}
              height={3151}
            />
          </div>
        </div>
      </Fade>
    </div>
    <div className="grid md:grid-cols-6 2xl:grid-cols-7 w-full absolute top-1/2 -translate-y-1/2 z-10">
      <Fade right distance="50px">
        <div className="will-change-transform md:col-start-3 md:col-span-3 2xl:col-start-4 p-6 md:p-0 md:-mr-px text-right">
          <h1 className="tk-neue-haas-grotesk-display text-clamp-6xl md:-mr-px uppercase">
            A twenty-something studying CS.
          </h1>
          <p className="max-w-lg text-lg mt-6 text-stone-600 dark:text-stone-400 float-right">
            I&rsquo;m a computer science student with a strong background in
            systems, algorithms, and web development.
            <br />
            <br />
            Currently, I&rsquo;m interning at Jump Trading in Chicago, IL.
            I&rsquo;m on the TechOps Production Engineering team.
          </p>
        </div>
      </Fade>
    </div>
  </>
);

export default Hero;
