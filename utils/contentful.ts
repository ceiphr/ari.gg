import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space || "", // ID of a Compose-compatible space to be used \
  accessToken: accessToken || "", // delivery API key for the space \
});

export async function getProjects() {
  const query = {
    limit: 10,
    content_type: "project",
  };

  const { items } = await client.getEntries(query),
    projects = items.map((item: any) => {
      const title = item.fields.title,
        orderNumber = item.fields.orderNumber,
        img = {
          src: item.fields.img.fields.file.url,
          width: item.fields.img.fields.file.details.image.width,
          height: item.fields.img.fields.file.details.image.height,
        },
        body = item.fields.body,
        rawLinks = item.fields.links,
        links = rawLinks.map((item: any) => {
          const { title, link } = item.fields;
          return { title, link };
        }),
        rawSkills = item.fields.skills,
        skills = rawSkills.map((item: any) => {
          return item.fields.id;
        }),
        rawStats = item.fields.stats,
        stats = rawStats.map((item: any) => {
          const { title, value } = item.fields,
            icon = item.fields.icon.fields.file.url;
          return { title, value, icon };
        });

      return { orderNumber, title, body, img, links, skills, stats };
    });

  const sortedProjects = projects.sort((a: any, b: any) =>
    a.orderNumber > b.orderNumber ? 1 : -1
  );

  return sortedProjects || null;
}

export async function getExperiences() {
  const query = {
    limit: 10,
    content_type: "experience",
  };

  // Creating experiences array from Contentful data
  const { items }: { items: any } = await client.getEntries(query),
    experiences = items.map((item: any) => {
      const company = item.fields.company,
        orderNumber = item.fields.orderNumber,
        rawLogo = item.fields.logo?.fields.logo.fields,
        rawLogoDark = item.fields.logo?.fields.logoDark.fields,
        logo = {
          logo: rawLogo ? rawLogo.file.url : null,
          logoDark: rawLogoDark ? rawLogoDark.file.url : null,
          width: rawLogo ? rawLogo.file.details.image.width : null,
          height: rawLogo ? rawLogo.file.details.image.height : null,
        },
        dates = {
          start: item.fields.dateStarted,
          end: item.fields?.dateEnd ? item.fields.dateEnd : null,
          active: item.fields.active,
        },
        location = item.fields.location,
        position = item.fields.position,
        items = item.fields.experienceItem.map((item: any) => {
          const { title, body } = item.fields,
            icon = item.fields.icon.fields.file.url;

          return { title, body, icon };
        }),
        rawSkills = item.fields.skills,
        skills = rawSkills.map((item: any) => {
          return item.fields.id;
        });

      return { orderNumber, company, logo, dates, location, position, items, skills };
    });

  const sortedExperiences = experiences.sort((a: any, b: any) =>
    a.orderNumber > b.orderNumber ? 1 : -1
  );

  return sortedExperiences || null;
}

export async function getGraph() {
  const linkQuery = {
    limit: 100,
    content_type: "link",
  };
  const nodeQuery = {
    limit: 100,
    content_type: "node",
  };

  const linkData = await client.getEntries(linkQuery),
    nodeData = await client.getEntries(nodeQuery),
    links = linkData.items.map((link: any) => ({
      source: link.fields.source.fields.id,
      target: link.fields.target.fields.id,
    })),
    nodes = nodeData.items.map((node: any) => ({
      id: node.fields.id,
      img: node.fields.img.fields.file.url,
    }));

  return { links, nodes } || null;
}
