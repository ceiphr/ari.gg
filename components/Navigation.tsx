import React from "react";

import ExternalLink from "@assets/external-link.svg";
import Email from "@assets/email.svg";

const Navigation = () => {
  return (
    <div className="fixed w-full pt-4 pb-8 px-4 z-50 pointer-events-none navigation-backdrop--contrast">
      <nav className="flex sm:justify-center pointer-events-auto space-x-4">
        <a
          href="https://ceiphr.com"
          rel="noreferrer"
          target="_blank"
          className="icon-button overflow-hidden whitespace-nowrap rounded-lg px-3 py-2 font-medium text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          Blog
          <ExternalLink className="inline-block -translate-y-px h-4 w-4 ml-1 fill-current" />
        </a>
        <a
          href="/ari-birnbaum-resume.pdf"
          rel="noreferrer"
          target="_blank"
          className="icon-button overflow-hidden whitespace-nowrap rounded-lg px-3 py-2 font-medium text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          Résumé
          <ExternalLink className="inline-block -translate-y-px h-4 w-4 ml-1 fill-current" />
        </a>
        <a
          href="mailto:a@ari.gg"
          rel="noreferrer"
          target="_blank"
          className="icon-button overflow-hidden whitespace-nowrap rounded-lg px-3 py-2 font-medium text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          Contact
          <Email className="inline-block -translate-y-px scale-75 ml-1 fill-current" />
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
