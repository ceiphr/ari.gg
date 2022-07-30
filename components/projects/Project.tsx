import React, { useEffect, FunctionComponent } from "react";
import {
  documentToHtmlString,
  Options,
} from "@contentful/rich-text-html-renderer";
import { INLINES } from "@contentful/rich-text-types";

import { useHover } from "@mantine/hooks";
import ExternalLink from "@assets/external-link.svg";

type Props = {
  className?: string;
  setFocusedNodes: (value: Set<string>) => void;
  project: Project;
};

const options: Partial<Options> = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, next) =>
      `<a href="${node.data.uri}" rel="noreferrer" target="_blank">${next(
        node.content
      )}</a>`,
  },
};

const Project: FunctionComponent<Props> = ({
  className = "",
  setFocusedNodes,
  project,
}) => {
  // When a project card is hovered, it triggers a state update, sending a list
  // of nodes to color to @components/skills/SkillGraph.tsx.
  const { hovered, ref } = useHover();

  useEffect(() => {
    // The list of nodes to color is a Set for efficient lookup when re-rendering.
    if (hovered) setFocusedNodes(new Set(project.skills));
    else setFocusedNodes(new Set());
  }, [setFocusedNodes, hovered, project]);

  return (
    <div
      ref={ref}
      className={`project card overflow-hidden w-full mb-8 my-2 rounded-xl border bg-white dark:bg-black border-black/20 dark:border-white/20 ${className}`}
    >
      <div className="card__img project__img flex justify-center items-center opacity-75 duration-400 border-b border-black/20 dark:border-white/20">
        <img
          src={`https:${project.img.src}`}
          height={project.img.height}
          width={project.img.width}
          alt={project.title}
        />
      </div>
      <div className="mx-4 mt-4">
        <h2 className="text-2xl">{project.title}</h2>
        <div
          className="mt-2"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(project.body, options),
          }}
        />
        <div className="grid grid-cols-3 py-6 text-center grid-lines">
          {project.stats.map((stat: Stat) => (
            <div key={stat.title} className="grid-lines__stroke--light px-2">
              <h3>{stat.title}</h3>
              <p>
                {stat.value}
                <svg
                  width="24"
                  height="24"
                  className="card__icon inline-block ml-1 -translate-y-px opacity-30 scale-90 dark:invert"
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
          {project.links.map((link: Link, index: number) => (
            <a
              key={link.title}
              href={link.link}
              rel="noreferrer"
              target="_blank"
              className={
                index
                  ? "icon-button overflow-hidden rounded-lg px-3 py-2 font-medium border border-black/20 dark:border-white/20 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black"
                  : "icon-button card__btn overflow-hidden rounded-lg px-3 py-2 font-medium"
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
