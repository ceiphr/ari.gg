import React, { useEffect, useState, useRef } from "react";
import {
  ForceGraph3D,
  // @ts-ignore
  GraphNode,
  // @ts-ignore
  GraphData,
  // @ts-ignore
  ForceGraphInstance,
} from "react-force-graph";
import * as THREE from "three";

const SkillGraph = ({
  data,
  slideTrigger,
}: {
  data: GraphData;
  slideTrigger: boolean;
}) => {
  const fgRef = useRef<ForceGraphInstance>(),
    [offset, setOffset] = useState<number>(0),
    distance = 400;

  useEffect(() => {
    if (slideTrigger) setOffset(1000);

    fgRef.current.cameraPosition({ z: distance }, { x: 150, z: 150 });
    // fgRef.current.cameraPosition({ z: distance }, { x: 50, y: 500, z: 500 }, 200);

    // camera orbit
    let angle = 0,
      cameraAngle = -Math.PI / 1.3;
    const rotate = setInterval(() => {
      if (!fgRef.current) {
        clearInterval(rotate);
        return;
      }

      fgRef.current.cameraPosition(
        {
          x: distance * Math.sin(angle),
          z: distance * Math.cos(angle),
        },
        {
          x: distance * Math.sin(cameraAngle),
          z: distance * Math.cos(cameraAngle),
        }
      );
      angle += Math.PI / 1200;
      cameraAngle += Math.PI / 1200;
    }, 10);

    // if (slideTrigger) {
    //   console.log("HELLO")
    //   clearInterval(rotate);
    //   return;
    // }
  }, [slideTrigger, offset]);

  return (
    <div className="fixed top-0 -z-10 pointer-events-none dark:invert">
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
