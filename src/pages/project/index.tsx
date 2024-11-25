import Layout from '@theme/Layout'
import React, { useState } from 'react'
import ProjectCard from '@site/src/components/ProjectCard'
import ProjectModal from '@site/src/components/ProjectModal'
import styles from './styles.module.css'
import { projectDescriptions } from '@site/src/data/project-description'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = projectDescriptions;

  return (
    <Layout>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              techStack={project.techStack}
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