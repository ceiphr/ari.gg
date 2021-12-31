import React from "react";

const BackgroundGrid = () => {
  let numRows = 6,
    rows = [];
  for (let i = 0; i < numRows; i++)
    rows.push(<div key={i} className="grid-lines__stroke" />);

  return (
    <div className="grid-lines grid md:grid-cols-6 pointer-events-none fixed z-10 top-0 left-0 opacity-20 w-full h-full">
      {rows}
    </div>
  );
};

export default BackgroundGrid;
