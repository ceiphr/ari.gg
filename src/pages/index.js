import React from "react";

import BackgroundMarquee from "../components/BackgroundMarquee";
import BackgroundGrid from "../components/BackgroundGrid";
import "../styles/index.scss";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <main>
      <BackgroundGrid />
      <div className="hero">
        <BackgroundMarquee />
        <h1 className="hero__title">Ari Birnbaum</h1>
      </div>
    </main>
  );
};

export default IndexPage;
