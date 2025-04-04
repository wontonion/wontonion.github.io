export interface Project {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  details: {
    summary: string; // Brief overview
    challenge?: string; // Detailed description for modal
    solution?: string; // Detailed description for modal
    links?: {
      demo?: string;
      github?: string;
    };
  };
}

export const projectDescriptions: Project[] = [
  {
    title: "wontonion github blog #1",
    description: "My personal website built with Docusaurus.",
    image: "/img/project/blog_project.png",
    techStack: ["Docusaurus", "React", "TypeScript", "Node.js"],
    details: {
      summary: "This is my personal website built with Docusaurus...",
      challenge: "Creating a maintainable and scalable documentation system",
      solution:
        "Leveraged Docusaurus for its powerful features and ease of use",
      links: {
        github: "https://github.com/wontonion/wontonion.github.io",
      },
    },
  },
  {
    title: "Blog System #2",
    description: "A blog system built with React, Next.js, and MongoDB.",
    techStack: ["React", "Next.js", "Nest.js", "MongoDB"],
    details: {
      summary:
        "This is a blog system built with React, Next.js, and Nest.js...",
      challenge: "Building a full-stack blog platform",
      solution: "Implemented modern web technologies for optimal performance",
      links: {
        github: "https://github.com/yourusername/blog-system",
      },
    },
  },
  {
    title: "Java Spring Boot E-commerce Website #3",
    description:
      "An e-commerce website built with Java Spring Boot, MySQL, and Redis.",
    techStack: ["Java", "Spring Boot", "MySQL", "Redis"],
    details: {
      summary:
        "This is an e-commerce website built with Java Spring Boot, MySQL, and Redis...",
      challenge: "Building a scalable and efficient e-commerce platform",
      solution:
        "Utilized Java Spring Boot for its robust framework and MySQL for relational data management",
      links: {
        github: "https://github.com/yourusername/e-commerce-website",
      },
    },
    },
    {
        title: "LLM-based Chatbot #4",
        description:
          "A LLM-based chatbot built with React, Next.js, and OpenAI.",
        techStack: ["React", "Solidity", "Web3.js"],
        details: {
          summary:
            "This is a LLM-based chatbot built with React, Next.js, and OpenAI...",
        }, 
  },
  {
    title: "DApp #5",
    description:
      "A decentralized application built with React, Solidity, and Web3.js.",
    techStack: ["React", "Solidity", "Web3.js"],
    details: {
      summary:
        "This is a decentralized application built with React, Solidity, and Web3.js...",
    },
  },
  {
    title: "Django E-commerce Website #6",
    description:
      "An e-commerce website built with Django, PostgreSQL, and Redis.",
    techStack: ["Django", "PostgreSQL", "React"],
    details: {
      summary:
        "This is an e-commerce website built with Django, PostgreSQL, and Redis...",
      challenge: "Building a high-performance e-commerce platform",
      solution:
        "Utilized Django for its simplicity and PostgreSQL for relational data management",
      links: {
        github: "https://github.com/yourusername/e-commerce-website",
      },
    },
  },
];
