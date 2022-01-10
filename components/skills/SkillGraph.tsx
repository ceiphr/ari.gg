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
    [nodeColor, setNodeColor] = useState<number>(0x000000),
    [nodeHighlightColor, setNodeHighlightColor] = useState<number>(0x1d4ed8),
    [linkColor, setLinkColor] = useState<string>("rgba(0,0,0,0.8)"),
    [bgColor, setBgColor] = useState<string>("#fff"),
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

  useEffect(() => {
    async function setColor() {
      let mediaQuery = await window.matchMedia("(prefers-color-scheme: dark)");

      mediaQuery.addEventListener("change", (e) => {
        setNodeColor(e.matches ? 0xffffff : 0x000000);
        setBgColor(e.matches ? "#000" : "#fff");
      });
      setNodeColor(mediaQuery.matches ? 0xffffff : 0x000000);
      setNodeHighlightColor(mediaQuery.matches ? 0x60a5fa : 0x2563eb);
      setLinkColor(mediaQuery.matches ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)");
      setBgColor(mediaQuery.matches ? "#000" : "#fff");
    }

    setColor();
  }, [nodeColor]);

  return (
    <div className="fixed top-0 -z-10 pointer-events-none">
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        backgroundColor={bgColor}
        linkWidth={0.5}
        d3AlphaDecay={0.06}
        enableNodeDrag={false}
        enableNavigationControls={false}
        showNavInfo={false}
        linkColor={() => linkColor}
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
            color: focusedNodes.includes(d.id) ? nodeHighlightColor : nodeColor,
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
