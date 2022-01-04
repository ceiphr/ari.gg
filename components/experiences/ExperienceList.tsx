import React, { useEffect, useState } from "react";
import anime from "animejs";

import Experience from "@components/experiences/Experience";

const ExperienceList = ({ trigger }: { trigger: boolean }) => {
  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    if (trigger) {
      // Must hide elements before animating them
      setTimeout(() => {
        setReveal(true);
      }, 1000);
      anime({
        targets: ".experience-fade",
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
      <div className="md:col-start-2 md:col-span-2 p-4 md:p-0 mb-10 z-30">
        <div className="backdrop--contrast mb-8">
          <h1 className="experience-fade tk-neue-haas-grotesk-display text-clamp-6xl uppercase md:-ml-3px mb-2">
            Experience
          </h1>
          <p className="experience-fade hidden md:inline text-stone-600 dark:text-stone-400 text-xl">
            Hover over an experience to view related skills.
          </p>
        </div>
        <div className="experience-fade">
          <Experience />
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
