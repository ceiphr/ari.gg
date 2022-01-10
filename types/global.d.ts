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
  items: {
    title: string;
    body: Object;
    icon: string;
  }[];
  skills: string[];
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
  links: {
    title: string;
    link: string;
  }[2];
  skills: string[];
  stats: {
    title: string;
    value: string;
    icon: string;
  }[3];
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
