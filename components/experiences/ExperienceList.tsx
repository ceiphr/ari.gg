import React from "react";
import Fade from "react-reveal/Fade";

import Experience from "@components/experiences/Experience";

const ExperienceList = () => {
  return (
    <div className="grid md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-2 p-4 md:p-0 mb-12 z-30">
        <div className="mb-8">
          <Fade bottom>
            <h1 className="will-change-transform tk-neue-haas-grotesk-display text-clamp-5xl uppercase -ml-2px md:-ml-px mb-2">
              Experience
            </h1>
            <p className="will-change-transform hidden md:inline md:-ml-px text-stone-600 dark:text-stone-400 text-xl">
              Hover over an experience to view related skills.
            </p>
          </Fade>
        </div>
        <Fade bottom distance="50px">
          <Experience className="will-change-transform" />
        </Fade>
        <Fade bottom distance="50px">
          <Experience className="will-change-transform" />
        </Fade>
        <Fade bottom distance="50px">
          <Experience className="will-change-transform" />
        </Fade>
      </div>
    </div>
  );
};

export default ExperienceList;
