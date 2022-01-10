declare interface ExperienceItem {
  title: string;
  body: any;
  icon: string;
}

declare interface Experience {
  company: string;
  orderNumber: number;
  logo: {
    logo: string;
    logoDark: string;
    width: number;
    height: number;
  };
  dates: {
    start: string;
    end: string | null;
    active: boolean;
  };
  location: string;
  position: string;
  items: ExperienceItem[];
  skills: string[];
}

declare interface Stat {
  title: string;
  value: string;
  icon: string;
}

declare interface Link {
  title: string;
  link: string;
}

declare interface Project {
  title: string;
  orderNumber: number;
  img: {
    src: string;
    width: number;
    height: number;
  };
  body: any;
  links: Link[2];
  skills: string[];
  stats: Stat[3];
}

declare interface Graph {
  links: {
    source: string;
    target: string;
  }[];
  nodes: {
    id: string;
    img: string;
  }[];
}
