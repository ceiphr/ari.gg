import React, { useEffect, useState, useRef, FunctionComponent } from "react";
import anime from "animejs";

import random from "@utils/random";

const Hero: FunctionComponent = () => {
  const [reveal, setReveal] = useState<boolean>(false),
  possibleStatuses: String[] = [
    "Just chillin.",
    "Cruising.",
    "Sleeping.",
    "Not on Zoom.",
    "In office hours.",
    "Writing an article.",
    "In class.",
    "Scrolling through Hacker News.",
  ],
  statusText = useRef<String>(possibleStatuses[random(0, possibleStatuses.length - 1)]);

  useEffect(() => {
    statusText.current = possibleStatuses[random(0, possibleStatuses.length - 1)];

    // Hide the Hero contents for 1.2 seconds. This gives the naviagtion bar
    // time to fade in before the Hero's staggered animation starts.
    setTimeout(() => {
      setReveal(true);
    }, 1200);
    // Run staggered fade-in animation.
    anime({
      targets: ".hero-fade",
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 1200 }),
      duration: 800,
      easing: "easeOutQuart",
    });
  }, []);

  return (
    <div
      className={`${
        !reveal && "opacity-0"
      } grid md:grid-cols-6 2xl:grid-cols-7 relative -top-1/2 -translate-y-1/2`}
    >
      <div className="col-start-2 col-span-4 p-6 md:p-0">
        <h1 className="hero-fade will-change-transform tk-neue-haas-grotesk-display text-clamp-8xl uppercase">
          Ari Birnbaum
        </h1>
        <p className="hero-fade will-change-transform max-w-lg text-lg text-stone-600 dark:text-stone-400 my-4">
          I&rsquo;m a computer science student at Stevens Institute of
          Technology. I write technical articles and make polished online
          experiences.
        </p>
        <div className="hero-fade will-change-transform my-2 max-w-xs md:max-w-none rounded-full inline-block overflow-x-auto overflow-y-hidden whitespace-nowrap bg-white dark:bg-black border border-black/20 dark:border-white/20">
          <div className="py-2 pl-1 pr-3 inline-block translate-y-px font-medium text-emerald-600 dark:text-emerald-400 border-r border-black/20 dark:border-white/20">
            {/* <span className="warning-status inline-block align-middle m-3 -translate-y-px h-2 w-2 bg-amber-600 dark:bg-amber-400 rounded-full" /> */}
            <span className="warning-status inline-block align-middle m-3 -translate-y-px h-2 w-2 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
            Status
          </div>
          <p className="inline translate-y-px whitespace-nowrap text-stone-700 dark:text-stone-300 pl-3 pr-4">
            {statusText.current}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
