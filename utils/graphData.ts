const imgs = [
  { path: "/icons/virtualbox.png", name: "VirtualBox" },
  { path: "/icons/c++.png", name: "C++" },
  { path: "/icons/cloudflare.png", name: "Cloudflare" },
  { path: "/icons/console.png", name: "BASH" },
  { path: "/icons/django.png", name: "Django" },
  { path: "/icons/docker.png", name: "Docker" },
  { path: "/icons/flask.png", name: "Flask" },
  { path: "/icons/gatsby.png", name: "Gatsby.js" },
  { path: "/icons/gcp.png", name: "GCP" },
  { path: "/icons/html5.png", name: "HTML" },
  { path: "/icons/intellij-idea.png", name: "Intellij IDEA" },
  { path: "/icons/java.png", name: "Java" },
  { path: "/icons/markdown.png", name: "Markdown" },
  { path: "/icons/netlify.png", name: "Netlify" },
  { path: "/icons/next.png", name: "Next.js" },
  { path: "/icons/open-source.png", name: "Open Source" },
  { path: "/icons/postgresql.png", name: "PostgreSQL" },
  { path: "/icons/python.png", name: "Python" },
  { path: "/icons/react.png", name: "React.js" },
  { path: "/icons/sass.png", name: "Sass" },
  { path: "/icons/shopify.png", name: "Shopify" },
  { path: "/icons/typescript.png", name: "TypeScript" },
  { path: "/icons/ubuntu.png", name: "Ubuntu" },
  { path: "/icons/vercel.png", name: "Vercel" },
  { path: "/icons/github.png", name: "GitHub" },
  { path: "/icons/css3.png", name: "CSS" },
  { path: "/icons/javascript.png", name: "JavaScript" },
  { path: "/icons/git.png", name: "Git" },
  { path: "/icons/aws.png", name: "AWS" },
  { path: "/icons/c.png", name: "C" },
];

// Random connected graph
const graphData = {
  nodes: imgs.map((img) => ({ id: img.name, img: img.path })),
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
      source: "HTML",
      target: "CSS",
    },
    {
      source: "HTML",
      target: "JavaScript",
    },
    {
      source: "Ubuntu",
      target: "C++",
    },
    {
      source: "Ubuntu",
      target: "C",
    },
    {
      source: "Git",
      target: "GitHub",
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
      source: "Netlify",
      target: "Gatsby.js",
    },
    {
      source: "Vercel",
      target: "Next.js",
    },
    {
      source: "Next.js",
      target: "Shopify",
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
      source: "GitHub",
      target: "Markdown",
    },
    {
      source: "GitHub",
      target: "Open Source",
    },
    {
      source: "Cloudflare",
      target: "AWS",
    },
    {
      source: "Docker",
      target: "AWS",
    },
    {
      source: "Docker",
      target: "GCP",
    },
    {
      source: "PostgreSQL",
      target: "AWS",
    },
    {
      source: "PostgreSQL",
      target: "GCP",
    },
    {
      source: "JavaScript",
      target: "Django",
    },
    {
      source: "JavaScript",
      target: "React.js",
    },
    {
      source: "TypeScript",
      target: "React.js",
    },
    {
      source: "Gatsby.js",
      target: "React.js",
    },
    {
      source: "Next.js",
      target: "React.js",
    },
    {
      source: "Intellij IDEA",
      target: "Java",
    },
    {
      source: "BASH",
      target: "Ubuntu",
    },
    {
      source: "VirtualBox",
      target: "Ubuntu",
    },
    {
      source: "Intellij IDEA",
      target: "Git",
    },
  ],
};

export default graphData;
