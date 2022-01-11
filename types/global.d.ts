// Timeline element for a given Experience.
declare interface ExperienceItem {
  title: string;
  body: any;
  icon: string;
}

// Object produced by @utils/contentful.ts
// for use with the Experience component.
declare interface Experience {
  company: string;
  orderNumber: number;
  logo: {
    logo?: string;
    logoDark?: string;
    width?: number;
    height?: number;
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

// Statistic for a given Project.
declare interface Stat {
  title: string;
  value: string;
  icon: string;
}

// NOT A GRAPH LINK. This is an href link for
// use with the Project component's buttons.
declare interface Link {
  title: string;
  link: string;
}

// Object produced by @utils/contentful.ts
// for use with the Project component.
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

// Object produced by @utils/contentful.ts
// for use with the SkillGraph component.
//
// react-force-graph offers this type, but
// doesn't export it for whatever reason.
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
