import React, {FunctionComponent} from "react";

const BackgroundGrid: FunctionComponent = () => {
  let numRows: number = 6,
    rows: JSX.Element[] = [];
  for (let i = 0; i < numRows; i++)
    rows.push(<div key={i} className="grid-lines__stroke" />);

  return (
    <div className="grid-lines grid md:grid-cols-6 pointer-events-none fixed top-0 left-0 opacity-20 w-full h-full">
      {rows}
    </div>
  );
};

export default BackgroundGrid;
