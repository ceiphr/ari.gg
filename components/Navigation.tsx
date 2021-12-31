import React from "react";

const Navigation = () => {
  return (
    <div className="fixed w-full p-4 z-20 navigation-backdrop--contrast">
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Projects", "/dashboard"],
          ["Work", "/team"],
          ["Resume", "/projects"],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="rounded-lg px-3 py-2 font-medium text-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
