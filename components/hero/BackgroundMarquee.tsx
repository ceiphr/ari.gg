import React, { memo, useEffect, useState, FunctionComponent } from "react";
import Marquee from "react-fast-marquee";

import random from "@utils/random";

const BackgroundMarquee: FunctionComponent<{ error: boolean }> = memo(
  function BackgroundMarquee({ error = false }) {
    const [reveal, setReveal] = useState<boolean>(false);
    let numRows: number = 7,
      numCols: number = 8,
      rows: JSX.Element[] = [];

    // Generate a matrix of "Ari"s with different font weights.
    for (let i = 0; i < numRows; i++) {
      let cols: JSX.Element[] = [];
      for (let j = 0; j < numCols; j++) {
        let weight: number = random(1, 5),
          fontweight: string;

        switch (weight) {
          case 1:
            fontweight = "font-normal";
            break;
          case 2:
            fontweight = "font-medium";
            break;
          case 3:
            fontweight = "font-bold";
            break;
          case 4:
            fontweight = "font-extrabold";
            break;
          case 5:
            fontweight = "font-black";
            break;
          default:
            fontweight = "font-normal";
        }

        if (error)
          cols.push(
            <p
              key={`col-${j}`}
              aria-hidden
              className={`select-none mx-4 ${fontweight}`}
            >
              404
            </p>
          );
        else
          cols.push(
            <p
              key={`col-${j}`}
              aria-hidden
              className={`select-none mx-4 ${fontweight}`}
            >
              Ari
            </p>
          );
      }
      // Alternate the marquee direction.
      let direction: "left" | "right" = i % 2 === 0 ? "left" : "right";
      rows.push(
        <Marquee
          key={`row-${i}`}
          className="text-10xl uppercase tk-fort overflow-y-hidden"
          speed={random(10, 30)}
          aria-hidden
          direction={direction}
          gradient={false}
        >
          {cols}
        </Marquee>
      );
    }

    // Reveal the background three seconds after the component mounts.
    // The delay is because the marquee is the last thing revealed in the Hero component.
    useEffect(() => {
      setTimeout(() => {
        setReveal(true);
      }, 3000);
    }, []);

    return (
      <div
        className={`${
          !reveal ? "opacity-0" : "opacity-5 dark:opacity-10"
        } duration-700 h-screen w-screen overflow-hidden pointer-events-none`}
      >
        <div className="origin-center rotate-45 scale-175 transform-gpu w-marquee">
          {rows}
        </div>
      </div>
    );
  }
);

export default BackgroundMarquee;
