import Layout from '@theme/Layout'
import React, { useState } from 'react'
import ProjectCard from '@site/src/components/ProjectCard'
import ProjectModal from '@site/src/components/ProjectModal'
import styles from './styles.module.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Project 1",
      description: "Short description of project 1",
      image: "/img/project1.png",
      tags: ["React", "TypeScript", "Node.js"],
      details: {
        challenge: "The main challenge was...",
        solution: "We solved it by...",
        techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
        links: {
          demo: "https://demo.com",
          github: "https://github.com/yourusername/project"
        }
      }
    },
    {
      title: "Project 1",
      description: "Short description of project 1",
      image: "/img/project1.png",
      tags: ["React", "TypeScript", "Node.js"],
      details: {
        challenge: "The main challenge was...",
        solution: "We solved it by...",
        techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
        links: {
          demo: "https://demo.com",
          github: "https://github.com/yourusername/project"
        }
      }
    },
    {
      title: "Project 1",
      description: "Short description of project 1",
      image: "/img/project1.png",
      tags: ["React", "TypeScript", "Node.js"],
      details: {
        challenge: "The main challenge was...",
        solution: "We solved it by...",
        techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
        links: {
          demo: "https://demo.com",
          github: "https://github.com/yourusername/project"
        }
      }
    },
    {
      title: "Project 1",
      description: "Short description of project 1",
      image: "/img/project1.png",
      tags: ["React", "TypeScript", "Node.js"],
      details: {
        challenge: "The main challenge was...",
        solution: "We solved it by...",
        techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
        links: {
          demo: "https://demo.com",
          github: "https://github.com/yourusername/project"
        }
      }
    },
    {
      title: "Project 1",
      description: "Short description of project 1",
      image: "/img/project1.png",
      tags: ["React", "TypeScript", "Node.js"],
      details: {
        challenge: "The main challenge was...",
        solution: "We solved it by...",
        techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
        links: {
          demo: "https://demo.com",
          github: "https://github.com/yourusername/project"
        }
      }
    },
    // Add more projects...
  ]

  return (
    <Layout>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectModal
            {...selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </Layout>
  )
}

export default Projects