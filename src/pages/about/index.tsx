import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import clsx from 'clsx';

export default function Experience() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const experiences = [
    {
      title: "Position Title 1",
      period: "2022 - Present",
      company: "Company Name",
      achievements: [
        "Key achievement or responsibility",
        "Key achievement or responsibility"
      ]
    },
    {
      title: "Position Title 1",
      period: "2022 - Present",
      company: "Company Name",
      achievements: [
        "Key achievement or responsibility",
        "Key achievement or responsibility"
      ]
    },
    {
      title: "Position Title 1",
      period: "2022 - Present",
      company: "Company Name",
      achievements: [
        "Key achievement or responsibility",
        "Key achievement or responsibility"
      ]
    },
    {
      title: "Position Title 1",
      period: "2022 - Present",
      company: "Company Name",
      achievements: [
        "Key achievement or responsibility",
        "Key achievement or responsibility"
      ]
    },
  ];

  return (
    <Layout>
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
              <ul>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}