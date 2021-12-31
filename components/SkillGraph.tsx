import React, { useEffect, useRef } from "react";
// @ts-ignore
import { ForceGraph3D, GraphNode, GraphData, ForceGraphInstance } from "react-force-graph";
import * as THREE from "three";

const SkillGraph = ({ data }: GraphData) => {
  const fgRef = useRef<ForceGraphInstance>(),
    distance = 400;

  useEffect(() => {
    fgRef.current.cameraPosition({ z: distance });

    // camera orbit
    let angle = 0;
    const rotate = setInterval(() => {
      if (!fgRef.current) {
        clearInterval(rotate);
        return;
      }

      fgRef.current.cameraPosition({
        x: distance * Math.sin(angle),
        z: distance * Math.cos(angle),
      });
      angle += Math.PI / 900;
    }, 10);
  }, []);

  return (
    <div className="pointer-events-none">
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        backgroundColor={"#fff"}
        linkColor={() => "rgba(0,0,0,0.6)"}
        linkWidth={0.5}
        d3AlphaDecay={0.06}
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
    </div>
  );
};

export default SkillGraph;
