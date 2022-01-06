import React from "react";
import Fade from "react-reveal/Fade";

import Project from "@components/projects/Project";

const ProjectList = () => {
  return (
    <div className="grid md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-2 p-4 md:p-0 mb-12 z-30">
        <div className="backdrop--contrast mb-8">
          <Fade bottom>
            <h1 className="tk-neue-haas-grotesk-display text-clamp-5xl uppercase md:-ml-px mb-2">
              Projects
            </h1>
            <p className="hidden md:inline md:-ml-px text-stone-600 dark:text-stone-400 text-xl">
              Hover over a project to view related skills.
            </p>
          </Fade>
        </div>
        <Fade bottom distance="100px">
          <Project />
        </Fade>
        <Fade bottom distance="100px">
          <Project />
        </Fade>
        <Fade bottom distance="100px">
          <Project />
        </Fade>
      </div>
    </div>
  );
};

export default ProjectList;
