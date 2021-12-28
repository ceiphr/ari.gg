import React from "react";
import { Curtains } from "react-curtains";

export const wrapRootElement = ({ element }) => (
    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
      {element}
    </Curtains>
);
