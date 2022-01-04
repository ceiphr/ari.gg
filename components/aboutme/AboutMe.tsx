import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="absolute bottom-0 w-screen md:w-1/2 md:px-24 md:max-h-75vh -mb-1">
        <Image
          className="grayscale opacity-25 md:opacity-50 -scale-x-100"
          src="/images/me.png"
          alt="Ari Birnbaum"
          layout="responsive"
          width={281}
          height={402}
        />
      </div>
      <div className="grid md:grid-cols-6 absolute top-1/2 -translate-y-1/2">
        <div className="col-start-2 col-span-4 p-6 md:p-0 md:-mr-px text-right">
          <h1 className="tk-neue-haas-grotesk-display text-clamp-6xl md:-mr-px uppercase">
            A twenty-something studying CS.
          </h1>
          <p className="max-w-lg text-lg mt-6 text-stone-600 dark:text-stone-400 float-right">
            My name is Ari. I&rsquo;m a computer science student with a strong
            background in systems, algorithms, and web development.
            <br />
            <br />I write technical articles for DigitalOcean and Koyeb, a
            french start-up. Currently, I am a course assitant for two courses,
            graduate level Web Development II and Systems Programming.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
