import React from "react";

const SkillPrompt = () => {
  return (
    <div className="grid md:grid-cols-6 relative -top-1/2 -translate-y-1/2 w-screen backdrop--contrast">
      <div className="col-start-2 col-span-4 p-6 md:p-0 text-center my-8">
        <h1 className="tk-neue-haas-grotesk-display text-6xl uppercase">
          The skills to pay the bills.
        </h1>
        <p className="max-w-lg mx-auto mt-2 text-4xl">With projects to match.</p>
      </div>
    </div>
  );
};

export default SkillPrompt;
