import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import { experiences } from '@site/src/data/experiencesContent';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Experience() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.visible);
            }, 300);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title={`About | ${siteConfig.title}`}
      description="Yisheng Zhu's About">
      <div className={styles.experienceSection}>
        <div className={styles.experienceGrid}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={styles.experienceCard}
              style={{
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <h3>{exp.title}</h3>
              <div className={styles.period}>{exp.period}</div>
              <p>{exp.company}</p>
              {exp.achievements && (
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
              {exp.description && (
                <p>{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}