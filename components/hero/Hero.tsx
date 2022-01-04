import React from "react";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-6 relative -top-1/2 -translate-y-1/2">
      <div className="col-start-2 col-span-4 p-6 md:p-0">
        <h1 className="tk-neue-haas-grotesk-display text-clamp-8xl uppercase">
          Ari Birnbaum
        </h1>
        <p className="max-w-lg text-lg my-4">
          I&rsquo;m a computer science student at Stevens Institute of
          Technology. I write technical articles and make polished online
          experiences.
        </p>
        <div className="my-2 max-w-xs md:max-w-none rounded-full inline-block overflow-x-auto whitespace-nowrap bg-white dark:bg-black border border-black/20 dark:border-white/20">
          <div className="py-2 pl-1 pr-3 inline-block font-medium -translate-x-px text-amber-600 dark:text-amber-400 border-r border-black/20 dark:border-white/20">
            <span className="animated-status inline-block align-middle m-3 -translate-y-px h-2 w-2 bg-amber-600 dark:bg-amber-400 rounded-full" />
            Status
          </div>
          <p className="inline -translate-x-px whitespace-nowrap pl-3 pr-4">
            Looking for a Summer 2022 Internship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
