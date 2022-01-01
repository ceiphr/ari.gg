import React from "react";

const Project = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full my-2 p-4 rounded-lg border bg-white dark:bg-black border-black/20 dark:border-white/20 ${className}`}>
      <div className=" bg-gray-200 dark:bg-black px-4 py-1 rounded-full border-white">Featured</div>
      <h1>Where is Maurice?</h1>
    </div>
  );
};

export default Project;
