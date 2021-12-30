import React, { useRef, useState, useEffect } from "react";
import { ForceGraph2D } from "react-force-graph";
import graphData from "../utils/graphData";
import random from "../utils/random";

const SkillGraph = () => {
  const fgRef = useRef();

  const [data, setData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    const fg = fgRef.current;
    const N = 20;
    fg.d3Force("box", () => {
      const SQUARE_HALF_SIDE = N * 2;

      data.nodes.forEach((node) => {
        const x = node.x || 0,
          y = node.y || 0;

        // bounce on box walls
        if (Math.abs(x) > SQUARE_HALF_SIDE) {
          node.vx *= -1;
        }
        if (Math.abs(y) > SQUARE_HALF_SIDE) {
          node.vy *= -1;
        }
      });
    });

    const interval = () => {
      if (graphData.nodes.length === 0) return;

      // Add a new connected node every second
      setData(({ nodes, links }) => {
        nodes.push(graphData.nodes.pop());
        const newLinks = graphData.links.filter(
          (link) =>
            nodes.map((node) => node.id).includes(link.source) &&
            nodes.map((node) => node.id).includes(link.target)
        );
        const updatedLinks = links.concat(
          newLinks.filter((node) => links.indexOf(node) < 0)
        );

        return {
          nodes: [...nodes],
          links: [...updatedLinks],
        };
      });

      if (graphData.nodes.length !== 0) setTimeout(interval, random(10, 1000));
    };
    interval();
  }, [data.nodes]);

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={data}
      nodeLabel="id"
      linkColor={() => "rgba(0,0,0,0.6)"}
      linkWidth={0.5}
      enableZoomInteraction={false}
      nodeCanvasObject={({ img, x = 0, y = 0 }: any, ctx) => {
        const size = 12;
        ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
      }}
      cooldownTicks={100}
      onEngineTick={() => {
        fgRef.current.centerAt(-100, 0, 0);
      }}
      nodePointerAreaPaint={(node: any, color: any, ctx: any) => {
        const size = 12;
        ctx.fillStyle = color;
        ctx.fillRect(
          (node.x || 0) - size / 2,
          (node.y || 0) - size / 2,
          size,
          size
        ); // draw square as pointer trap
      }}
    />
  );
};

export default SkillGraph;
