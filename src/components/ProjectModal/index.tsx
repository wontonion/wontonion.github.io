import React from 'react';
import styles from './styles.module.css';

interface ProjectModalProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    techStack: string[];
    links?: {
      demo?: string;
      github?: string;
    };
  };
  onClose: () => void;
}

export default function ProjectModal({ 
  title, 
  description, 
  image, 
  tags, 
  details, 
  onClose 
}: ProjectModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <div className={styles.modalContent}>
          <img src={image} alt={title} className={styles.modalImage} />
          <div className={styles.modalInfo}>
            <h2>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.details}>
              <h3>Challenge</h3>
              <p>{details.challenge}</p>
              <h3>Solution</h3>
              <p>{details.solution}</p>
              <h3>Tech Stack</h3>
              <div className={styles.techStack}>
                {details.techStack.map((tech, index) => (
                  <span key={index} className={styles.tech}>{tech}</span>
                ))}
              </div>
              {details.links && (
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