import React, { useEffect, FunctionComponent } from "react";
import Image from "next/image";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import useHover from "@utils/useHover";
import ExternalLink from "@assets/external-link.svg";

type Props = {
  className?: string;
  setFocusedNodes: (value: string[]) => void;
  project: any;
};

const Project: FunctionComponent<Props> = ({
  className = "",
  setFocusedNodes,
  project,
}) => {
  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    if (isHovered) setFocusedNodes(project.skills);
    else setFocusedNodes([]);
  }, [setFocusedNodes, isHovered, project]);

  return (
    <div
      // @ts-ignore Weird type issue with useHover. TODO: Fix.
      ref={hoverRef}
      className={`project overflow-hidden w-full mb-8 my-2 rounded-xl border bg-white dark:bg-black border-black/20 dark:border-white/20 ${className}`}
    >
      <div className="project__img">
        <Image
          src={`https:${project.img.src}`}
          height={project.img.height}
          width={project.img.width}
          alt={project.title}
        />
      </div>
      <div className="mx-4 mt-4">
        <h2 className="text-2xl">{project.title}</h2>
        <div
          className="mt-2 has-links"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(project.body),
          }}
        />
        <div className="grid grid-cols-3 py-6 text-center grid-lines">
          {project.stats.map((stat: any) => (
            <div key={stat.title} className="grid-lines__stroke--light px-2">
              <h3>{stat.title}</h3>
              <p>
                {stat.value}
                <svg
                  width="24"
                  height="24"
                  className="stat-icon inline-block ml-1 -translate-y-px opacity-30 scale-90 dark:invert"
                >
                  <image
                    xlinkHref={`https:${stat.icon}`}
                    width="24"
                    height="24"
                  />
                </svg>
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 pb-4 text-center">
          {project.links.map((link: any, index: number) => (
            <a
              key={link.title}
              href={link.link}
              rel="noreferrer"
              target="_blank"
              className={
                index
                  ? "icon-button overflow-hidden rounded-lg px-3 py-2 font-medium border border-black/20 dark:border-white/20 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black"
                  : "icon-button project__btn overflow-hidden rounded-lg px-3 py-2 font-medium"
              }
            >
              {link.title}
              <ExternalLink className="inline-block -translate-y-px h-4 w-4 ml-1 fill-current" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
