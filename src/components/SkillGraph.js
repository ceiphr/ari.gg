import React from "react";
import { ForceGraph3D } from "react-force-graph";
import * as THREE from "three";

const SkillGraph = () => {
  const imgs = ["c++.png", "javascript.png"];

  // Random connected graph
  const gData = {
    nodes: imgs.map((img, id) => ({ id, img })),
    links: [...Array(imgs.length).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  };

  if (typeof window === "undefined") return <></>
  return (
    <ForceGraph3D
      graphData={gData}
      backgroundColor="white"
      showNavInfo={false}
      nodeThreeObject={({ img }) => {
        const imgTexture = new THREE.TextureLoader().load(`/${img}`);
        const material = new THREE.SpriteMaterial({ map: imgTexture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(12, 12);

        return sprite;
      }}
    />
  );
};

export default SkillGraph;
