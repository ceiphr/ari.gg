import React, { useEffect, useState } from "react";
import anime from "animejs";

const Hero = () => {
  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 1000);
    anime({
      targets: ".hero-fade",
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 1000 }),
      duration: 800,
      easing: "easeOutQuart",
    });
  }, []);

  return (
    <div
      className={`${
        !reveal && "opacity-0"
      } grid md:grid-cols-6 relative -top-1/2 -translate-y-1/2`}
    >
      <div className="col-start-2 col-span-4 p-6 md:p-0">
        <h1 className="hero-fade tk-neue-haas-grotesk-display text-clamp-8xl uppercase">
          Ari Birnbaum
        </h1>
        <p className="hero-fade max-w-lg text-lg text-stone-600 dark:text-stone-400 my-4">
          I&rsquo;m a computer science student at Stevens Institute of
          Technology. I write technical articles and make polished online
          experiences.
        </p>
        <div className="hero-fade my-2 max-w-xs md:max-w-none rounded-full -translate-y-px inline-block overflow-x-auto whitespace-nowrap bg-white dark:bg-black border border-black/20 dark:border-white/20">
          <div className="py-2 pl-1 pr-3 inline-block font-medium text-amber-600 dark:text-amber-400 border-r border-black/20 dark:border-white/20">
            <span className="animated-status inline-block align-middle m-3 -translate-y-px h-2 w-2 bg-amber-600 dark:bg-amber-400 rounded-full" />
            Status
          </div>
          <p className="inline -translate-y-px whitespace-nowrap text-stone-700 dark:text-stone-300 pl-3 pr-4">
            Looking for a Summer 2022 Internship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
