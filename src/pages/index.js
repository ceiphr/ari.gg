import React from "react";

import BackgroundMarquee from "../components/BackgroundMarquee";
import BackgroundGrid from "../components/BackgroundGrid";
import SkillGraph from "../components/SkillGraph";
import Chevron from "../../static/chevron.svg";
import "../styles/index.scss";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <main>
      <BackgroundGrid />
      <div className="track">
        <div className="item">
          <BackgroundMarquee />
          <div className="item__content grid md:grid-cols-6">
            <div className="col-start-2 col-span-4">
              <h1 className="item__title">Ari Birnbaum</h1>
              <p className="item__body font-medium max-w-lg py-4">
                I'm a computer science student at Stevens Institute of
                Technology. I write technical articles and make polished online
                experiences.
              </p>
              <a className="button" href="https://google.com">
                About Me
                <Chevron />
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <SkillGraph />
          <div className="item__content grid md:grid-cols-6 ignore-pointer-events">
            <div className="col-start-2 col-span-2 allow-pointer-events">
              <h1 className="item__subtitle">Skills</h1>
              <p className="item__body font-medium max-w-lg py-4">
                I love web deleopment and Linux. I've developed React projects
                for start ups and have written technical articles for DigitalOcean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
