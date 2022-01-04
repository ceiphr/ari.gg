import React, { useState, useEffect } from "react";
import Image from "next/image";

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
      <div className="m-4">
        <div className="mr-8 pb-4 pt-2 w-1/2">
          <Image
            className="experience__img"
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
          <ul className="list-disc ml-4 my-2">
            <li>
              Next.js Commerce: Developed a Next.js e-commerce website for
              direct sales and customer service using TypeScript, Tailwind CSS
              and a Shopify backend.
            </li>
            <li>
              iTracker Documentation: Wrote internal technical documentation for
              the company&rsquo;s flagship iTracker product.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
