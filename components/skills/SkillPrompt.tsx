import React, { useEffect, useState } from "react";
import anime from "animejs";
import Lottie from "react-lottie-player";

const SkillPrompt = ({ trigger }: { trigger: boolean }) => {
  const [reveal, setReveal] = useState<boolean>(false);
  const [animationData, setAnimationData] = useState<Object>();

  useEffect(() => {
    import("@utils/scroll.json").then(setAnimationData);
  }, []);

  useEffect(() => {
    if (trigger) {
      // Must hide elements before animating them
      setTimeout(() => {
        setReveal(true);
      }, 2000);
      anime({
        targets: ".skill-fade",
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(1400, { start: 2000 }),
        duration: 1000,
        easing: "easeOutQuart",
      });
    }
  }, [trigger]);

  return (
    <div
      className={`${
        !reveal && "opacity-0"
      } relative top-1/2 -translate-y-1/2 pointer-events-none backdrop--contrast`}
    >
      <div className="grid md:grid-cols-6">
        <div className="col-start-2 col-span-4 p-6 md:p-0 text-center pointer-events-auto my-8">
          <h1 className="skill-fade tk-neue-haas-grotesk-display text-clamp-6xl uppercase">
            The skills to pay the bills.
          </h1>
          <p className="skill-fade max-w-lg mx-auto mt-2 text-clamp-4xl">
            With projects to match.
          </p>
        </div>
      </div>
      <div className="relative left-1/2 -translate-x-1/2 w-50px">
        {animationData && (
          <Lottie
            className="skill-fade fill-theme"
            loop
            animationData={animationData}
            play
            speed={0.5}
            style={{ width: 50, height: 50 }}
          />
        )}
      </div>
    </div>
  );
};

export default SkillPrompt;
