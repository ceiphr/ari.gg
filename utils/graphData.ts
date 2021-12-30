const imgs = [
  { path: "/icons/ae.png", name: "After Effects" },
  { path: "/icons/ai.png", name: "Adobe Illustrator" },
  { path: "/icons/photoshop.png", name: "Photoshop" },
  { path: "/icons/premiere.png", name: "Premiere Pro" },
  { path: "/icons/django.png", name: "Django" },
  { path: "/icons/react.png", name: "React" },
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
const graphData = {
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
  ],
};

export default graphData;
