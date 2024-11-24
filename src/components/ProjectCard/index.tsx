import React from 'react';
import styles from './styles.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClick: () => void;
}

export default function ProjectCard({ title, description, image, tags, onClick }: ProjectCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}