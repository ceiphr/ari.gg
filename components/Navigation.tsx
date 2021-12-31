import React from "react";

const Navigation = () => {
  return (
    <div className="fixed w-full p-4 z-20">
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Projects", "/dashboard"],
          ["Work", "/team"],
          ["Resume", "/projects"],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="rounded-lg px-3 py-2 text-black font-medium hover:bg-black hover:text-white"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
