import React from "react";
import Image from "next/image";

import ExternalLink from "@assets/external-link.svg";
import Person from "@assets/person.svg";
import ShowChart from "@assets/show-chart.svg";
import Speed from "@assets/speed.svg";

const Project = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`project overflow-hidden w-full mb-8 my-2 rounded-xl border bg-white dark:bg-black border-black/20 dark:border-white/20 ${className}`}
    >
      <div className="project__img">
        <Image
          src="/images/wim.png"
          height={100}
          width={200}
          layout="responsive"
          alt="Where is Maurice?"
        />
      </div>
      <div className="mx-4 mt-4">
        <h2 className="text-2xl">Where is Maurice?</h2>
        <p className="mt-2">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </p>
        <div className="grid grid-cols-3 py-6 text-center grid-lines">
          <div className="grid-lines__stroke--light px-2">
            <h3>Visitors</h3>
            <p>
              62k
              <Person className="inline-block ml-1 opacity-50 scale-90 -translate-y-px fill-current" />
            </p>
          </div>
          <div className="grid-lines__stroke--light px-2">
            <h3>Page Views</h3>
            <p>
              94k
              <ShowChart className="inline-block ml-1 opacity-50 scale-90 -translate-y-px fill-current" />
            </p>
          </div>
          <div className="grid-lines__stroke--light px-2">
            <h3>PageSpeed</h3>
            <p>
              90
              <Speed className="inline-block ml-1 opacity-50 scale-90 -translate-y-px fill-current" />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-4 text-center">
          <a
            href="/ari-birnbaum-resume.pdf"
            rel="noreferrer"
            target="_blank"
            className="button-w-icon button--project overflow-hidden rounded-lg px-3 py-2 font-medium"
          >
            View Project
            <ExternalLink className="inline-block -translate-y-px h-4 w-4 ml-1 fill-current" />
          </a>
          <a
            href="/ari-birnbaum-resume.pdf"
            rel="noreferrer"
            target="_blank"
            className="button-w-icon overflow-hidden rounded-lg px-3 py-2 font-medium border border-black/20 dark:border-white/20 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black"
          >
            GitHub
            <ExternalLink className="inline-block -translate-y-px h-4 w-4 ml-1 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
