import React, { FunctionComponent } from "react";
// @ts-ignore types not provided :(
import Fade from "react-reveal/Fade";

import Logo from "@assets/logo.svg";
import Twitter from "@assets/twitter.svg";
import GitHub from "@assets/github.svg";
import LinkedIn from "@assets/linkedin.svg";

const Footer: FunctionComponent = () => (
  <div className="border-t border-black/20 dark:border-white/20 bg-white/50 dark:bg-black/50 backdrop-blur-lg">
    <Fade>
      <div className="grid md:grid-cols-6 2xl:grid-cols-7 p-4 md:p-0">
        <div className="md:col-start-2 md:col-span-2 mt-4 md:mb-12">
          <Logo className="fill-current mt-8 mb-4" height="48" width="48" />I
          hope you enjoyed this online experience. If you&apos;re curious, the
          source code is available on{" "}
          <a
            href="https://github.com/ceiphr/ari.gg"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 dark:text-blue-300 hover:underline"
          >
            GitHub
          </a>
          .
        </div>
        <div className="md:col-start-5 2xl:col-start-6 mt-12 mb-12 text-stone-600 dark:text-stone-400 md:text-right">
          <div className="grid grid-cols-3 w-28 md:float-right -translate-x-1 md:translate-x-2.5">
            <a
              href="https://github.com/ceiphr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="fill-current duration-200 hover:text-black dark:hover:text-white" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ari/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="fill-current duration-200 hover:text-black dark:hover:text-white" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/ceiphr"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="fill-current duration-200 hover:text-black dark:hover:text-white" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <p className="whitespace-nowrap md:float-right mt-4 md:mt-8">
            © 2022 Ari Birnbaum (Ceiphr).
            <br />
            <a
              href="https://github.com/ceiphr/ari.gg#acknowledgments"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 dark:text-blue-300 hover:underline"
            >
              Acknowledgments.
            </a>
          </p>
        </div>
      </div>
    </Fade>
  </div>
);

export default Footer;
