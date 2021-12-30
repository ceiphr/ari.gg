import React, { useRef, useState, useEffect } from "react";
// @ts-ignore
import { ForceGraph2D, GraphData, GraphNode } from "react-force-graph";
import graphData from "../utils/graphData";
import random from "../utils/random";

const SkillGraph = () => {
  const fgRef = useRef();
  const [data, setData] = useState<GraphData>({ nodes: [], links: [] });

  useEffect(() => {
    let init = 5,
      i = 0,
      nodesInCommon: (string | undefined)[] = [];

    function addNode() {
      if (graphData.nodes.length === 0) return;

      // @ts-ignore
      setData(({ nodes, links }) => {
        let newNode;
        if (nodesInCommon.length > 0) {
          const nodeName = nodesInCommon.pop();
          newNode = graphData.nodes.filter((node) => node.id === nodeName)[0];
          graphData.nodes = graphData.nodes.filter(
            (node) => node.id !== nodeName
          );
        } else newNode = graphData.nodes.pop();

        const newNodeList = [...nodes, newNode];
        const newNodeNames = newNodeList.map((node) => node?.id);
        const newLinks = graphData.links.filter(
          (link) =>
            newNodeNames.includes(link.source) &&
            newNodeNames.includes(link.target)
        );
        const updatedLinks = links.concat(
          newLinks.filter((node) => links.indexOf(node) < 0)
        );

        nodesInCommon = graphData.links.map((link) => {
          if (
            newNodeNames.includes(link.source) &&
            !newNodeNames.includes(link.target)
          )
            return link.target;
          if (
            newNodeNames.includes(link.target) &&
            !newNodeNames.includes(link.source)
          )
            return link.source;
        });
        nodesInCommon = nodesInCommon.filter((node) => node !== undefined);

        console.log(nodesInCommon);

        return {
          nodes: [...newNodeList],
          links: [...updatedLinks],
        };
      });

      if (i < init) setTimeout(addNode, 0);
      i++;
      setTimeout(addNode, random(1, 5) * 1000);
    }
    addNode();
  }, []);

  useEffect(() => {
    // @ts-ignore
    fgRef?.current?.d3Force("box", () => {
      data.nodes.forEach((node: GraphNode) => {
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
        // @ts-ignore
        fgRef?.current?.zoomToFit(0, 64);
        // fgRef.current.centerAt(-100, 0, 0);
      }}
      // d3VelocityDecay={0.1}
      // d3AlphaDecay={0}
      nodePointerAreaPaint={(node: GraphNode, color: any, ctx: any) => {
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
