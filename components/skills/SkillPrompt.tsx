import React, { useEffect, useState, FunctionComponent } from "react";
import anime from "animejs";
import Lottie from "react-lottie-player";
import { useReducedMotion } from '@mantine/hooks';

type Props = {
  trigger: boolean;
};

const SkillPrompt: FunctionComponent<Props> = ({ trigger }) => {
  const [reveal, setReveal] = useState<boolean>(false);
  const [animationData, setAnimationData] = useState<Object>();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    import("@assets/scroll.json").then(setAnimationData);
  }, []);

  useEffect(() => {
    if (trigger && !reduceMotion) {
      // Hide the prompt for 1.5 seconds. The graph will be revealed
      // in this time frame.
      setTimeout(() => {
        setReveal(true);
      }, 1500);
      // Run staggered fade-in animation when component mounts.
      anime({
        targets: ".skill-fade",
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(1000, { start: 1500, easing: "easeOutQuad" }),
        duration: 800,
        easing: "easeOutQuart",
      });
    }
  }, [trigger, reduceMotion]);

  return (
    <div
      className={`${
        !reveal && "opacity-0"
      } relative top-1/2 -translate-y-1/2 pointer-events-none backdrop--contrast`}
    >
      <div className="grid md:grid-cols-6 2xl:grid-cols-7">
        <div className="col-start-2 col-span-4 p-6 md:p-0 text-center md:text-left pointer-events-auto my-8">
          <h1 className="skill-fade will-change-transform tk-neue-haas-grotesk-display text-clamp-6xl uppercase">
            The skills to pay the bills.
          </h1>
          <p className="skill-fade will-change-transform mt-2 text-clamp-4xl">
            With projects to match.
          </p>
          <div className="w-31px ml-px mt-6 relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">
            {animationData && (
              // https://lottiefiles.com/5944-scroll-down
              <Lottie
                className="skill-fade will-change-transform fill-theme"
                loop
                animationData={animationData}
                play
                speed={0.5}
                style={{ width: 31, height: 50 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPrompt;
