import React from 'react';
import styles from './styles.module.css';
import { Project } from '../../data/content/projectContent';

interface ProjectModalProps extends Omit<Project, 'summary'> {
  onClose: () => void;
}

export default function ProjectModal({ 
  title, 
  description, 
  image = '', 
  techStack = [], 
  details = {
    summary: '',
    challenge: '',
    solution: '',
    links: {}
  }, 
  onClose 
}: ProjectModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <div className={styles.modalContent}>
          {image && <img src={image} alt={title} className={styles.modalImage} />}
          <div className={styles.modalInfo}>
            <h2>{title}</h2>
            <p className={styles.description}>{description}</p>
            {techStack.length > 0 && (
              <div className={styles.tags}>
                {techStack.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
            <div className={styles.details}>
              {details.challenge && (
                <>
                  <h3>Challenge</h3>
                  <p>{details.challenge}</p>
                </>
              )}
              {details.solution && (
                <>
                  <h3>Solution</h3>
                  <p>{details.solution}</p>
                </>
              )}
              {techStack.length > 0 && (
                <>
                  <h3>Tech Stack</h3>
                  <div className={styles.techStack}>
                    {techStack.map((tech, index) => (
                      <span key={index} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </>
              )}
              {details.links && (Object.keys(details.links).length > 0) && (
                <div className={styles.links}>
                  {details.links.demo && (
                    <a href={details.links.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {details.links.github && (
                    <a href={details.links.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}