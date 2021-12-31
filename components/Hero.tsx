import React from "react";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-6 relative -top-1/2 -translate-y-1/2 w-screen">
      <div className="col-start-2 col-span-4 p-6 md:p-0">
        <h1 className="tk-neue-haas-grotesk-display text-8xl uppercase">Ari Birnbaum</h1>
        <p className="max-w-lg text-lg mb-8 mt-2">
          I&rsquo;m a computer science student at Stevens Institute of
          Technology. I write technical articles and make polished online
          experiences.
        </p>
        <a
          className="rounded-full bg-black text-white py-4 px-8"
          href="https://google.com"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
