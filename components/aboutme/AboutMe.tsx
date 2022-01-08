import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <>
      <div className="hidden md:grid md:grid-cols-6 absolute top-1/2 -translate-y-1/2 w-screen h-screen">
        <Fade left distance="50px">
          <div className="will-change-transform relative col-start-2 col-span-2">
            <div className="absolute bottom-0 translate-y-2 w-full pointer-events-none select-none">
              <Image
                className="grayscale opacity-25 md:opacity-50 -scale-x-100"
                src="/images/me.png"
                alt="Ari Birnbaum"
                layout="responsive"
                width={281}
                height={402}
              />
            </div>
          </div>
        </Fade>
      </div>
      <div className="grid md:grid-cols-6 w-full absolute top-1/2 -translate-y-1/2 z-10">
        <Fade right distance="50px">
          <div className="will-change-transform col-start-3 col-span-3 p-6 md:p-0 md:-mr-px text-right">
            <h1 className="tk-neue-haas-grotesk-display text-clamp-6xl md:-mr-px uppercase">
              A twenty-something studying CS.
            </h1>
            <p className="max-w-lg text-lg mt-6 text-stone-600 dark:text-stone-400 float-right">
              In the game of life, my cell is doing pretty swell! I&rsquo;m a
              computer science student with a strong background in systems,
              algorithms, and web development.
              <br />
              <br />I write technical articles for DigitalOcean and Koyeb, a
              French start-up. Currently, I am a course assistant for two
              courses, graduate level Web Programming II and Systems
              Programming.
            </p>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Hero;
