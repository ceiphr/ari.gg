import React, { FunctionComponent } from "react";
// @ts-ignore types not provided :(
import Fade from "react-reveal/Fade";

import Project from "@components/projects/Project";

type Props = {
  setFocusedNodes: (value: Set<string>) => void;
  projects: Project[];
};

const ProjectList: FunctionComponent<Props> = ({
  setFocusedNodes,
  projects,
}) => (
  <div className="grid md:grid-cols-6 2xl:grid-cols-7">
    <div className="md:col-start-2 md:col-span-2 p-4 md:p-0 mb-12 z-30">
      <div className="mb-8">
        <Fade bottom>
          <h1 className="will-change-transform tk-neue-haas-grotesk-display text-clamp-5xl uppercase -ml-2px md:-ml-px mb-2">
            Projects
          </h1>
          <p className="will-change-transform hidden md:inline md:-ml-px text-stone-600 dark:text-stone-400 text-xl">
            Hover over a project to view related skills.
          </p>
        </Fade>
      </div>
      {projects.map((project: Project) => (
        <Fade key={project.title} bottom distance="50px">
          <Project
            className="will-change-transform"
            setFocusedNodes={setFocusedNodes}
            project={project}
          />
        </Fade>
      ))}
    </div>
  </div>
);

export default ProjectList;
