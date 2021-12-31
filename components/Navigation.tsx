import React from "react";

const Navigation = () => {
  return (
    <div className="fixed w-full p-4 z-10">
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Projects", "/dashboard"],
          ["Work", "/team"],
          ["Skills", "/projects"],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
