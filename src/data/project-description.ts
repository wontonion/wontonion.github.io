export interface ProjectDescription {
  title: string;
  description: string;
  details: string;
  techStack: string[];
  profilePicture?: string;
  githubLink?: string;
}

export const projectDescriptions: ProjectDescription[] = [
  {
    title: "wontonion github blog #1",
    description: "My personal website built with Docusaurus.",
    details:
      "This is my personal website built with Docusaurus. It's a static website that I use to share my thoughts and ideas with others.",
    techStack: ["Docusaurus", "React", "TypeScript", "Node.js"],
  },
  {
    title: "Blog System #2",
    description: "A blog system built with React, Next.js, and MongoDB.",
    details:
      "This is a blog system built with React, Next.js, and Nest.js. It's a blog system that I use to share my thoughts and ideas with others.",
    techStack: ["React", "Next.js", "Nest.js", "MongoDB"],
  },
  {
    title: "Java Spring Boot E-commerce Website #3",
    description:
      "An e-commerce website built with Java Spring Boot, MySQL, and Redis.",
    details:
      "This is an e-commerce website built with Java Spring Boot, MySQL, and Redis. It's an e-commerce website that I use to sell my products.",
    techStack: ["Java", "Spring Boot", "MySQL", "Redis"],
  },
  {
    title: "Django E-commerce Website #4",
    description:
      "An e-commerce website built with Django, PostgreSQL, and Redis.",
    details:
      "This is an e-commerce website built with Django, PostgreSQL, and Redis. It's an e-commerce website that I use to sell my products.",
    techStack: ["Django", "PostgreSQL", "React"],
  },
];
