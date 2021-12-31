import React, { useEffect, useState } from "react";
import anime from "animejs";

const SkillPrompt = ({ trigger }: { trigger: boolean }) => {
  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    if (trigger) {
      // Must hide elements before animating them
      setTimeout(() => {
        setReveal(true);
      }, 2000);
      anime({
        targets: ".skill-text",
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(2000, { start: 2000 }),
        duration: 1000,
        easing: "easeOutQuart",
      });
    }
  }, [trigger]);

  return (
    <div
      className={`${
        !reveal && "opacity-0"
      } grid md:grid-cols-6 relative -top-1/2 -translate-y-1/2 w-screen pointer-events-none backdrop--contrast`}
    >
      <div className="col-start-2 col-span-4 p-6 md:p-0 text-center pointer-events-auto my-8">
        <h1 className="skill-text tk-neue-haas-grotesk-display text-clamp-6xl uppercase">
          The skills to pay the bills.
        </h1>
        <p className="skill-text max-w-lg mx-auto mt-2 text-clamp-4xl">
          With projects to match.
        </p>
      </div>
    </div>
  );
};

export default SkillPrompt;
