import React, { FunctionComponent } from "react";
import Fade from "react-reveal/Fade";

import Experience from "@components/experiences/Experience";

type Props = {
  setFocusedNodes: (value: Set<string>) => void;
  experiences: Experience[];
};

const ExperienceList: FunctionComponent<Props> = ({
  setFocusedNodes,
  experiences,
}) => {
  return (
    <div className="grid md:grid-cols-6 2xl:grid-cols-7">
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
        {experiences.map((experience: any) => (
          <Fade key={experience.company} bottom distance="50px">
            <Experience
              className="will-change-transform"
              experience={experience}
              setFocusedNodes={setFocusedNodes}
            />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
