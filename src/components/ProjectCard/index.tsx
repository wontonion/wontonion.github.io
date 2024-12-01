import React from 'react';
import styles from './styles.module.css';
import { Project } from '../../data/content/projectContent';

interface ProjectCardProps extends Pick<Project, 'title' | 'description' | 'image' | 'techStack'> {
  onClick: () => void;
}

export default function ProjectCard({ title, description, image, techStack = [], onClick }: ProjectCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        {image && <img src={image} alt={title} className={styles.image} />}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {techStack?.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}