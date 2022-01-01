import React from "react";

const Project = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`project w-full mb-8 my-2 p-4 rounded-lg border bg-white dark:bg-black border-black/20 dark:border-white/20 ${className}`}>
      <div className="bg-gray-100 dark:bg-gray-900 inline-block px-4 py-1 rounded-full border border-black/20 dark:border-white/20">Featured</div>
      <h1 className="text-xl mt-2">Where is Maurice?</h1>
    </div>
  );
};

export default Project;
