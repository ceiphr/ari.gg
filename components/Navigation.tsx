import React, { useEffect, useState, FunctionComponent } from "react";
import anime from "animejs";

import ExternalLink from "@assets/external-link.svg";
import Email from "@assets/email.svg";

const Navigation: FunctionComponent = () => {
  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    // Delay animation reveal by 0.4 seconds.
    setTimeout(() => {
      setReveal(true);
    }, 400);
    // Run staggered fade-in animation when component mounts.
    anime({
      targets: ".nav-fade",
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 400 }),
      duration: 800,
      easing: "easeOutQuart",
    });
  }, []);

  return (
    <div className="fixed w-full pt-4 pb-8 px-4 z-50 pointer-events-none navigation-backdrop--contrast">
      <nav
        className={`${
          !reveal && "opacity-0"
        } flex sm:justify-center pointer-events-auto space-x-4`}
      >
        <a
          href="https://ceiphr.com"
          rel="noreferrer"
          target="_blank"
          className="icon-button nav-fade will-change-transform overflow-hidden whitespace-nowrap rounded-lg px-3 py-2 font-medium text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          Blog
          <ExternalLink className="inline-block -translate-y-px h-4 w-4 ml-1 fill-current" />
        </a>
        <a
          href="/ari-birnbaum-resume.pdf"
          rel="noreferrer"
          target="_blank"
          className="icon-button nav-fade will-change-transform overflow-hidden whitespace-nowrap rounded-lg px-3 py-2 font-medium text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          Résumé
          <ExternalLink className="inline-block -translate-y-px h-4 w-4 ml-1 fill-current" />
        </a>
        <a
          href="mailto:a@ari.gg"
          rel="noreferrer"
          target="_blank"
          className="icon-button nav-fade will-change-transform overflow-hidden whitespace-nowrap rounded-lg px-3 py-2 font-medium text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          Contact
          <Email className="inline-block -translate-y-px scale-75 ml-1 fill-current" />
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
