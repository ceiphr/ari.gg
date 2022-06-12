import React, {
  memo,
  useEffect,
  useRef,
  useState,
  FunctionComponent,
} from "react";
// @ts-ignore Types are not exported from react-force-graph
// prettier-ignore
import { ForceGraph3D, GraphNode, ForceGraphInstance } from "react-force-graph";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";
import { useReducedMotion } from "@mantine/hooks";

type Props = {
  data: Graph;
  focusedNodes: Set<string>;
};

type Theme = {
  backgroundColor: string;
  nodeColor: number;
  nodeHighlightColor: number;
  linkColor: string;
};

const lightTheme: Theme = {
    backgroundColor: "#fff",
    nodeColor: 0x000000,
    nodeHighlightColor: 0x2563eb,
    linkColor: "rgba(0,0,0,0.8)",
  },
  darkTheme: Theme = {
    backgroundColor: "#000",
    nodeColor: 0xffffff,
    nodeHighlightColor: 0x60a5fa,
    linkColor: "rgba(255,255,255,0.8)",
  };

const SkillGraph: FunctionComponent<Props> = memo(function SkillGraph({
  data,
  focusedNodes,
}) {
  const fgRef = useRef<ForceGraphInstance>(),
    angle = useRef<number>(0),
    distance = 400,
    isTabletOrMobile = useMediaQuery({ maxWidth: 1224 }),
    // Camera lookAt is offset so it's on the right side of the screen if on desktop.
    cameraAngle = useRef<number>(-Math.PI / (isTabletOrMobile ? 1 : 1.3)),
    // Sprite textures are caches in this Map to avoid flickering on state change.
    [spriteMap, setSpriteMap] = useState<Map<string, any>>(new Map()),
    [theme, setTheme] = useState<Theme>(lightTheme),
    reduceMotion = useReducedMotion();

  useEffect(() => {
    // camera orbit
    // https://github.com/vasturiano/react-force-graph/blob/master/example/camera-auto-orbit/index.html
    let rotate: NodeJS.Timer;

    if (!reduceMotion)
      rotate = setInterval(() => {
        if (!fgRef.current) {
          clearInterval(rotate);
          return;
        }

        fgRef.current.cameraPosition(
          // Position of the camera.
          {
            x: distance * Math.sin(angle.current),
            z: distance * Math.cos(angle.current),
          },
          // Look at position for the camera.
          {
            x: distance * Math.sin(cameraAngle.current),
            z: distance * Math.cos(cameraAngle.current),
          }
        );

        // Currently, both do the same thing.
        // These are implemented as separate refs for possible
        // future transition effects.
        angle.current += Math.PI / 1200;
        cameraAngle.current += Math.PI / 1200;
      }, 10);

    return () => {
      clearInterval(rotate);
    };
  }, [reduceMotion]);

  useEffect(() => {
    // Change the graph's theme based on the prefers-color-scheme media query.
    async function setColor() {
      let mediaQuery = await window.matchMedia("(prefers-color-scheme: dark)");

      mediaQuery.addEventListener("change", (e) => {
        setTheme(e.matches ? darkTheme : lightTheme);
      });
      setTheme(mediaQuery.matches ? darkTheme : lightTheme);
    }

    setColor();
  }, [theme]);

  return (
    <div className="fixed top-0 -z-10 pointer-events-none">
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        backgroundColor={theme.backgroundColor}
        linkWidth={0.5}
        d3AlphaDecay={0.06}
        enableNodeDrag={false}
        enableNavigationControls={false}
        showNavInfo={false}
        linkColor={() => theme.linkColor}
        nodeThreeObject={(d: GraphNode) => {
          let imgTexture;

          if (spriteMap.get(d.id)) imgTexture = spriteMap.get(d.id);
          else {
            imgTexture = new THREE.TextureLoader().load(`${d.img}`);
            setSpriteMap(spriteMap.set(d.id, imgTexture));
          }

          const material = new THREE.SpriteMaterial({
            map: imgTexture,
            color: focusedNodes.has(d.id)
              ? theme.nodeHighlightColor
              : theme.nodeColor,
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
