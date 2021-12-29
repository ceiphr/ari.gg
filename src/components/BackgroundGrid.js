import React from "react";

const BackgroundGrid = () => {
  let numRows = 6,
    rows = [];
  for (let i = 0; i < numRows; i++)
    rows.push(<div key={i} className="grid-lines__stroke" />);

  return <div className="grid-lines grid md:grid-cols-6">{rows}</div>;
};

export default BackgroundGrid;
