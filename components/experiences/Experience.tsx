import React, { useState, useEffect, FunctionComponent } from "react";
import Image from "next/image";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import useHover from "@utils/useHover";
import dateParse from "@utils/dateParse";

type Props = {
  className?: string;
  setFocusedNodes: (value: Set<string>) => void;
  experience: Experience;
};

const Experience: FunctionComponent<Props> = ({
  className = "",
  setFocusedNodes,
  experience,
}) => {
  const [logo, setLogo] = useState<string>(`https:${experience.logo.logo}`),
    // When an experience card is hovered, it triggers a state update, sending a list
    // of nodes to color to @components/skills/SkillGraph.tsx.
    [hoverRef, isHovered] = useHover();

  useEffect(() => {
    // The list of nodes to color is a Set for efficient lookup when re-rendering.
    if (isHovered) setFocusedNodes(new Set(experience.skills));
    else setFocusedNodes(new Set());
  }, [setFocusedNodes, isHovered, experience]);

  useEffect(() => {
    // The logo has a dark and light variant. The variant type is picked by
    // the prefers-color-scheme media query.
    async function setImage() {
      let mediaQuery = await window.matchMedia("(prefers-color-scheme: dark)");

      // Logo is an optional field.
      if (experience.logo.logo) {
        // Listen for changes to the media query.
        mediaQuery.addEventListener("change", (e) => {
          setLogo(
            e.matches
              ? `https:${experience.logo.logoDark}`
              : `https:${experience.logo.logo}`
          );
        });
        // Set the initial logo.
        setLogo(
          mediaQuery.matches
            ? `https:${experience.logo.logoDark}`
            : `https:${experience.logo.logo}`
        );
      }
    }

    setImage();
  }, [logo, experience]);

  // Month is a number. I want it to be a string.
  const monthNames = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec.",
    ],
    // new Date()'s parser doesn't work correctly for Contentful dates.
    // I'm using a custom parser.
    startDate = dateParse(experience.dates.start),
    // End date is optional, since the experience could be active.
    endDate = experience.dates.end
      ? dateParse(experience.dates.end)
      : new Date();
  return (
    <div
      ref={hoverRef}
      className={`experience card link-card overflow-hidden w-full mb-8 my-2 rounded-xl border bg-white dark:bg-black border-black/20 dark:border-white/20 ${className}`}
    >
      <div className="mt-4 mx-4">
        {experience.logo.logo ? (
          <div className="experience__img card__img relative h-24 md:w-2/3 mr-24 md:mr-0">
            <Image
              className="object-left"
              src={logo}
              layout="fill"
              objectFit="contain"
              alt={experience.company}
            />
          </div>
        ) : (
          <h1 className="text-3xl mb-6 mt-9 tk-neue-haas-grotesk-display">
            {experience.company}
          </h1>
        )}
        <h2 className="text-xl">{experience.position}</h2>
        <div className="grid grid-cols-2 italic">
          <p>{experience.location}</p>
          <p className="text-right">
            {`${
              monthNames[startDate.getMonth()]
            } ${startDate.getFullYear()} - ${
              experience.dates.active
                ? "Present"
                : monthNames[endDate.getMonth()] + " " + endDate.getFullYear()
            }`}
          </p>
        </div>
        <div className="timeline">
          {experience.items.map((item: ExperienceItem, index: number) => (
            <div key={item.title} className={`ml-14 ${index > 0 && "mt-6"}`}>
              <div className="absolute p-2 rounded-full fill-current bg-white dark:bg-black left-0 border border-black/20 dark:border-white/20 z-20">
                <svg width="24" height="24" className="card__icon opacity-30 dark:invert">
                  <image
                    xlinkHref={`https:${item.icon}`}
                    width="24"
                    height="24"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-2 pt-1">{item.title}</h3>
              <div
                className="has-links"
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(item.body),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
