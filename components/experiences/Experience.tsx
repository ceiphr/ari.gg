import React, { useState, useEffect } from "react";
import Image from "next/image";

import ExternalLink from "@assets/external-link.svg";
import Person from "@assets/person.svg";

const Experience = ({ className = "" }: { className?: string }) => {
  const [mQuery, setMQuery] = useState<string>("logo.png");

  useEffect(() => {
    async function setImage() {
      let mediaQuery = await window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        setMQuery(e.matches ? "logo-white.png" : "logo.png");
      });
      setMQuery(mediaQuery.matches ? "logo-white.png" : "logo.png");
    }

    setImage();
  }, [mQuery]);

  return (
    <div
      className={`experience overflow-hidden w-full mb-8 my-2 rounded-xl border bg-white dark:bg-black border-black/20 dark:border-white/20 ${className}`}
    >
      <div className="mt-4 mx-4">
        <div className="experience__img mr-24 py-4">
          <Image
            src={`/images/experience/eastech/${mQuery}`}
            height={77}
            width={875}
            layout="intrinsic"
            alt="Eastech"
          />
        </div>
        <h2 className="text-xl">Technical Writer and Web Developer Intern</h2>
        <div className="mt-2">
          <div className="grid grid-cols-2 italic">
            <p>Tulsa, Oklahoma</p>
            <p className="text-right">June 2021 - Oct. 2021</p>
          </div>
          <div className="timeline">
            <div className="ml-14">
              <div className="absolute p-2 rounded-full fill-current bg-white dark:bg-black left-0 border border-black/20 dark:border-white/20 z-20">
                <ExternalLink />
              </div>
              <h3 className="text-xl mb-2 pt-2">Next.js Commerce</h3>
              <p>
                Developed a Next.js e-commerce website for direct sales and
                customer service using TypeScript, Tailwind CSS and a Shopify
                backend.
              </p>
            </div>
            <div className="ml-14 mt-6">
              <div className="absolute p-2 rounded-full fill-current bg-white dark:bg-black left-0 border border-black/20 dark:border-white/20 z-20">
                <Person />
              </div>
              <h3 className="text-xl mb-2 pt-2">iTracker Documentation</h3>
              <p>
                Wrote internal technical documentation for the company&rsquo;s
                flagship iTracker product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
