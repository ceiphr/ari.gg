// @ts-nocheck

import React, { useRef, useState, useEffect } from "react";
import { ForceGraph2D } from "react-force-graph";
import graphData from "../utils/graphData";
import random from "../utils/random";

const SkillGraph = () => {
  const fgRef = useRef();
  const [data, setData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    let init = 5,
      i = 0,
      decay = 1000,
      nodesInCommon = [];

    function addNode() {
      if (graphData.nodes.length === 0) return;

      setData(({ nodes, links }) => {
        const newNode = graphData.nodes.pop();
        const newNodeList = [...nodes, newNode];
        const newLinks = graphData.links.filter(
          (link) =>
            newNodeList.map((node) => node?.id).includes(link.source) &&
            newNodeList.map((node) => node?.id).includes(link.target)
        );
        const updatedLinks = links.concat(
          newLinks.filter((node) => links.indexOf(node) < 0)
        );

        nodesInCommon = graphData.links.map((link) => {
          if (newNodeList.map((node) => node?.id).includes(link.source))
            return link.target;
          if (newNodeList.map((node) => node?.id).includes(link.target))
            return link.source;
        });

        return {
          nodes: [...newNodeList],
          links: [...updatedLinks],
        };
      });
      if (i < init) {
        i++;
        setTimeout(addNode, 0);
      }
      decay -= 50;
      setTimeout(addNode, random(1, 5) * decay);
    }
    addNode();
  }, []);

  useEffect(() => {
    fgRef.current.d3Force("box", () => {
      data.nodes.forEach((node) => {
        const x = node.x || 0,
          y = node.y || 0;
        if (Math.abs(x) > 100) node.vx /= 6;
        if (Math.abs(y) > 50) node.vy /= 6;
      });
    });
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
      onEngineTick={() => {
        fgRef?.current?.zoomToFit(0, 64);
        // fgRef.current.centerAt(-100, 0, 0);
      }}
      // d3VelocityDecay={0.1}
      // d3AlphaDecay={0}
      nodePointerAreaPaint={(node: any, color: any, ctx: any) => {
        const size = 12;
        ctx.fillStyle = color;
        ctx.fillRect(
          (node.x || 0) - size / 2,
          (node.y || 0) - size / 2,
          size,
          size
        );
      }}
    />
  );
};

export default SkillGraph;
