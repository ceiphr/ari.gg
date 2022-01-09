import React, {
  memo,
  useEffect,
  useRef,
  useState,
  FunctionComponent,
} from "react";
// @ts-ignore Types are not exported from react-force-graph
// prettier-ignore
import { ForceGraph3D, GraphNode, GraphData, ForceGraphInstance } from "react-force-graph";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";

type Props = {
  data: GraphData;
  focusedNodes: string[];
};

const SkillGraph: FunctionComponent<Props> = memo(function SkillGraph({
  data,
  focusedNodes,
}) {
  const fgRef = useRef<ForceGraphInstance>(),
    angle = useRef<number>(0),
    isTabletOrMobile = useMediaQuery({ maxWidth: 1224 }),
    cameraAngle = useRef<number>(-Math.PI / (isTabletOrMobile ? 1 : 1.3)),
    [spriteMap, setSpriteMap] = useState<Map<string, any>>(new Map()),
    distance = 400;

  useEffect(() => {
    // camera orbit
    const rotate = setInterval(() => {
      if (!fgRef.current) {
        clearInterval(rotate);
        return;
      }

      fgRef.current.cameraPosition(
        {
          x: distance * Math.sin(angle.current),
          z: distance * Math.cos(angle.current),
        },
        {
          x: distance * Math.sin(cameraAngle.current),
          z: distance * Math.cos(cameraAngle.current),
        }
      );

      angle.current += Math.PI / 1200;
      cameraAngle.current += Math.PI / 1200;
    }, 10);

    return () => {
      clearInterval(rotate);
    };
  }, []);

  return (
    <div className="fixed top-0 -z-10 pointer-events-none dark:invert">
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        backgroundColor={"#fff"}
        linkWidth={0.5}
        d3AlphaDecay={0.06}
        enableNodeDrag={false}
        enableNavigationControls={false}
        showNavInfo={false}
        linkColor={() => "rgba(0,0,0,0.6)"}
        nodeThreeObject={(d: GraphNode) => {
          let imgTexture;

          if (spriteMap.get(d.id)) {
            imgTexture = spriteMap.get(d.id);
          } else {
            imgTexture = new THREE.TextureLoader().load(`${d.img}`);
            setSpriteMap(spriteMap.set(d.id, imgTexture));
          }

          const material = new THREE.SpriteMaterial({
            map: imgTexture,
            color: focusedNodes.includes(d.id) ? 0xff0000 : 0x000000,
          });
          const sprite = new THREE.Sprite(material);

          sprite.scale.set(12, 12, 1);
          return sprite;
        }}
      />
    </div>
  );
});

export default SkillGraph;
