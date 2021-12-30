const imgs = [
  { path: "/icons/ae.png", name: "After Effects" },
  { path: "/icons/ai.png", name: "Adobe Illustrator" },
  { path: "/icons/aws.png", name: "AWS" },
  { path: "/icons/css3.png", name: "CSS" },
  { path: "/icons/c++.png", name: "C++" },
  { path: "/icons/cloudflare.png", name: "Cloudflare" },
  { path: "/icons/console.png", name: "BASH" },
  { path: "/icons/django.png", name: "Django" },
  { path: "/icons/docker.png", name: "Docker" },
  { path: "/icons/fedora.png", name: "Fedora" },
  { path: "/icons/flask.png", name: "Flask" },
  { path: "/icons/gatsby.png", name: "Gatsby.js" },
  { path: "/icons/gcp.png", name: "GCP" },
  { path: "/icons/git.png", name: "Git" },
  { path: "/icons/github.png", name: "GitHub" },
  { path: "/icons/html5.png", name: "HTML" },
  { path: "/icons/intellij-idea.png", name: "Intellij IDEA" },
  { path: "/icons/java.png", name: "Java" },
  { path: "/icons/javascript.png", name: "JavaScript" },
  { path: "/icons/markdown.png", name: "Markdown" },
  { path: "/icons/netlify.png", name: "Netlify" },
  { path: "/icons/next.png", name: "Next.js" },
  { path: "/icons/open-source.png", name: "Open Source" },
  { path: "/icons/photoshop.png", name: "Photoshop" },
  { path: "/icons/postgresql.png", name: "PostgreSQL" },
  { path: "/icons/premiere.png", name: "Premiere Pro" },
  { path: "/icons/python.png", name: "Python" },
  { path: "/icons/react.png", name: "React.js" },
  { path: "/icons/sass.png", name: "Sass" },
  { path: "/icons/shopify.png", name: "Shopify" },
  { path: "/icons/stripe.png", name: "Stripe" },
  { path: "/icons/tailwindcss.png", name: "TailwindCSS" },
  { path: "/icons/typescript.png", name: "TypeScript" },
  { path: "/icons/ubuntu.png", name: "Ubuntu" },
  { path: "/icons/vercel.png", name: "Vercel" },
  { path: "/icons/virtualbox.png", name: "VirtualBox" },
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
      target: "Git",
    },
    {
      source: "Fedora",
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
      target: "React",
    },
    {
      source: "TypeScript",
      target: "React",
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
      source: "Intellij IDEA",
      target: "Java",
    },
    {
      source: "BASH",
      target: "Ubuntu",
    },
    {
      source: "BASH",
      target: "Fedora",
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
