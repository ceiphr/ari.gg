import React from "react";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-6 relative -top-1/2 -translate-y-1/2">
      <div className="col-start-2 col-span-4 p-6 md:p-0 text-right">
        <h1 className="tk-neue-haas-grotesk-display text-clamp-6xl uppercase">
          A twenty-something studying CS.
        </h1>
        <p className="max-w-lg text-lg mt-6 float-right">
          My name is Ari. I&rsquo;m a computer science student with a strong
          background in systems, algorithms, and web development.
          <br />
          <br />I write technical articles for DigitalOcean and Koyeb, a french
          start-up. Currently, I am a course assitant for two courses, graduate
          level Web Development II and Systems Programming.
        </p>
      </div>
    </div>
  );
};

export default Hero;
