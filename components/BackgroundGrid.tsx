import React, { FunctionComponent } from "react";

const BackgroundGrid: FunctionComponent = () => {
  let numCols: number = 7,
    cols: JSX.Element[] = [];

  // Create grid columns. The last column is hidden on smaller displays.
  // All grid columns are hidden on mobile
  for (let i = 0; i < numCols; i++) {
    if (i === 6)
      cols.push(
        <div key={i} className="grid-lines__stroke hidden 2xl:block" />
      );
    else cols.push(<div key={i} className="grid-lines__stroke" />);
  }

  return (
    <div className="grid-lines grid md:grid-cols-6 2xl:grid-cols-7 pointer-events-none fixed top-0 left-0 opacity-20 w-full h-full">
      {cols}
    </div>
  );
};

export default BackgroundGrid;
