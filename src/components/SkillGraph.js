import React, { useRef } from "react";
import { ForceGraph2D } from "react-force-graph";

const SkillGraph = () => {
  const fgRef = useRef();
  const imgs = [
    { path: "/icons/ae.png", name: "After Effects" },
    { path: "/icons/ai.png", name: "Adobe Illustrator" },
    { path: "/icons/photoshop.png", name: "Photoshop" },
    { path: "/icons/premiere.png", name: "Premiere Pro" },
    { path: "/icons/django.png", name: "Django" },
    { path: "/icons/flask.png", name: "Flask" },
    { path: "/icons/git.png", name: "Git" },
    { path: "/icons/python.png", name: "Python" },
    { path: "/icons/css3.png", name: "CSS" },
    { path: "/icons/c++.png", name: "C++" },
    { path: "/icons/javascript.png", name: "JavaScript" },
    { path: "/icons/typescript.png", name: "TypeScript" },
    { path: "/icons/sass.png", name: "Sass" },
    { path: "/icons/ubuntu.png", name: "Ubuntu" },
  ].map((src) => {
    const img = new Image();
    img.src = `./${src.path}`;
    img.alt = src.name;
    return img;
  });

  // Random connected graph
  const gData = {
    nodes: imgs.map((img) => ({ id: img.alt, img })),
    links: [
      {
        source: "JavaScript",
        target: "CSS",
      },
      {
        source: "Sass",
        target: "CSS",
      },
      {
        source: "Ubuntu",
        target: "C++",
      },
      {
        source: "Ubuntu",
        target: "Git",
      },
      {
        source: "JavaScript",
        target: "TypeScript",
      },
      {
        source: "JavaScript",
        target: "Sass",
      },
      {
        source: "JavaScript",
        target: "Django",
      },
      {
        source: "JavaScript",
        target: "Flask",
      },
      {
        source: "Django",
        target: "Python",
      },
      {
        source: "Python",
        target: "Flask",
      },
      {
        source: "Adobe Illustrator",
        target: "After Effects",
      },
      {
        source: "Premiere Pro",
        target: "After Effects",
      },
      {
        source: "Premiere Pro",
        target: "Photoshop",
      },
      {
        source: "Photoshop",
        target: "Adobe Illustrator",
      },
      {
        source: "Premiere Pro",
        target: "Adobe Illustrator",
      },
      {
        source: "Photoshop",
        target: "Git",
      },
      {
        source: "Git",
        target: "Adobe Illustrator",
      },
      {
        source: "JavaScript",
        target: "Git",
      },
      {
        source: "TypeScript",
        target: "Git",
      },
      {
        source: "Python",
        target: "Git",
      },
      {
        source: "C++",
        target: "Git",
      },
    ],
  };

  if (typeof window === "undefined") return <></>;

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={gData}
      nodeLabel="id"
      linkColor={() => "rgba(0,0,0,0.6)"}
      linkWidth={0.5}
      enableZoomInteraction={false}
      nodeCanvasObject={({ img, x, y }, ctx) => {
        const size = 12;
        ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
      }}
      cooldownTicks={100}
      onEngineStop={() => {
        fgRef.current.zoomToFit(100, 32);
        fgRef.current.centerAt(-80, 0, 100);
      }}
      nodePointerAreaPaint={(node, color, ctx) => {
        const size = 12;
        ctx.fillStyle = color;
        ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size); // draw square as pointer trap
      }}
    />
  );
};

export default SkillGraph;
