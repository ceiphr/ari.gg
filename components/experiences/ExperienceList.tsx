import React, { useEffect, useState } from "react";
import anime from "animejs";
import { useMediaQuery } from "react-responsive";

import Experience from "@components/experiences/Experience";

const ExperienceList = ({ trigger }: { trigger: boolean }) => {
  const [reveal, setReveal] = useState<boolean>(false),
    isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  useEffect(() => {
    if (trigger) {
      // Must hide elements before animating them
      setTimeout(() => {
        setReveal(true);
      }, 1000);
      anime({
        targets: ".project-fade",
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(300, { start: 1000 }),
        duration: 500,
        easing: "easeOutQuart",
      });
    }
  }, [trigger]);

  return (
    <div className={`${!reveal && "opacity-0"} grid md:grid-cols-6`}>
      <div className="md:col-start-2 md:col-span-2 p-4 md:p-0 mb-20 z-30">
        <h1 className="project-fade tk-neue-haas-grotesk-display text-clamp-6xl uppercase -ml-3px mb-2">
          Experience
        </h1>
        <p className="mb-8">
          {isTabletOrMobile ? `Tap on` : `Hover over`} an experience to view related
          skills.
        </p>
        <Experience className="project-fade" />
        <Experience className="project-fade" />
        <Experience className="project-fade" />
      </div>
    </div>
  );
};

export default ExperienceList;
