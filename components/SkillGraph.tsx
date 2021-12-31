import React, { useEffect, useRef } from "react";
// @ts-ignore
import { ForceGraph3D, GraphNode, ForceGraphInstance } from "react-force-graph";
import * as THREE from "three";

import graphData from "../utils/graphData";

const SkillGraph = () => {
  const fgRef = useRef<ForceGraphInstance>(),
    distance = 400,
    N = 40;

  useEffect(() => {
    fgRef.current.cameraPosition({ z: distance });

    // Prevent nodes from flying away
    fgRef.current.d3Force("box", () => {
      const SQUARE_HALF_SIDE = N * 2;

      graphData.nodes.forEach((node: GraphNode) => {
        const x = node.x || 0,
          y = node.y || 0,
          z = node.z || 0;

        // increase resistance on box walls
        if (Math.abs(x) > SQUARE_HALF_SIDE) node.vx /= 3;
        if (Math.abs(y) > SQUARE_HALF_SIDE) node.vy /= 3;
        if (Math.abs(z) > SQUARE_HALF_SIDE) node.vz /= 3;
      });
    });

    // camera orbit
    let angle = 0;
    setInterval(() => {
      fgRef.current.cameraPosition({
        x: distance * Math.sin(angle),
        z: distance * Math.cos(angle),
      });
      angle += Math.PI / 900;
    }, 10);
  }, []);

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={graphData}
      backgroundColor={"#fff"}
      linkColor={() => "rgba(0,0,0,0.6)"}
      linkWidth={0.5}
      enableNodeDrag={false}
      enableNavigationControls={false}
      showNavInfo={false}
      nodeThreeObject={({ img }: GraphNode) => {
        const imgTexture = new THREE.TextureLoader().load(`${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);

        sprite.scale.set(12, 12, 1);
        return sprite;
      }}
    />
  );
};

export default SkillGraph;
