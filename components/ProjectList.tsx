import React, { useEffect, useState } from "react";
import anime from "animejs";
import Project from "./Project";

const ProjectList = ({ trigger }: { trigger: boolean }) => {
  const [reveal, setReveal] = useState<boolean>(false);

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
    <div
      className={`${
        !reveal && "opacity-0"
      } grid md:grid-cols-6`}
    >
      <div className="col-start-2 col-span-2 z-30">
        <Project className="project-fade" />
        <Project className="project-fade" />
        <Project className="project-fade" />
        <Project className="project-fade" />
        <Project className="project-fade" />
        <Project className="project-fade" />
      </div>
    </div>
  );
};

export default ProjectList;
