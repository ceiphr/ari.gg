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
  const [mQuery, setMQuery] = useState<string>(`https:${experience.logo.logo}`),
    [hoverRef, isHovered] = useHover();

  useEffect(() => {
    if (isHovered) setFocusedNodes(new Set(experience.skills));
    else setFocusedNodes(new Set());
  }, [setFocusedNodes, isHovered, experience]);

  useEffect(() => {
    async function setImage() {
      let mediaQuery = await window.matchMedia("(prefers-color-scheme: dark)");

      if (experience.logo.logo) {
        mediaQuery.addEventListener("change", (e) => {
          setMQuery(
            e.matches
              ? `https:${experience.logo.logoDark}`
              : `https:${experience.logo.logo}`
          );
        });
        setMQuery(
          mediaQuery.matches
            ? `https:${experience.logo.logoDark}`
            : `https:${experience.logo.logo}`
        );
      }
    }

    setImage();
  }, [mQuery, experience]);

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
    startDate = dateParse(experience.dates.start),
    endDate = experience.dates.end
      ? dateParse(experience.dates.end)
      : new Date();
  return (
    <div
      ref={hoverRef}
      className={`experience link-card overflow-hidden w-full mb-8 my-2 rounded-xl border bg-white dark:bg-black border-black/20 dark:border-white/20 ${className}`}
    >
      <div className="mt-4 mx-4">
        {experience.logo.logo ? (
          <div className="experience__img relative h-24 md:w-2/3 mr-24 md:mr-0">
            <Image
              className="object-left"
              src={mQuery}
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
                <svg width="24" height="24" className="opacity-30 dark:invert">
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
