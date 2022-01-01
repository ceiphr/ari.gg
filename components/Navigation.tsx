import React from "react";
import Link from "next/link";
import ExternalLink from "../public/external-link.svg";

const Navigation = () => {
  return (
    <div className="fixed w-full p-4 z-50 navigation-backdrop--contrast">
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Projects", "/dashboard"],
          ["Work", "/team"],
        ].map(([title, url]) => (
          <Link key={title} href={url} passHref>
            <div className="cursor-pointer rounded-lg px-3 py-2 font-medium text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">
              {title}
            </div>
          </Link>
        ))}
        <a
          href="/ari-birnbaum-resume.pdf"
          rel="noreferrer"
          target="_blank"
          className="button-w-icon overflow-hidden rounded-lg px-3 py-2 font-medium text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          Resume
          <ExternalLink className="inline-block -translate-y-px h-4 w-4 ml-1 fill-current" />
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
