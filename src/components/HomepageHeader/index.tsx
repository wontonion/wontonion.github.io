import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import clsx from "clsx";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import HeroSubtitleAnimation from "./HeroSubtitleAnimation";
import { homepageContent, getAnimationTextsWithTagline } from "@site/src/data/homepageContent";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const animationTexts = getAnimationTextsWithTagline(siteConfig.tagline);

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroContainer}>
        {/* Left Column */}
        <div className={styles.heroLeft}>
          <Heading as="h1" className={styles.heroTitle}>
            {homepageContent.greeting}
          </Heading>

          <div className={styles.heroSubtitleAnimation}>
            <HeroSubtitleAnimation texts={animationTexts}/>
          </div>

          <div className={styles.heroHashTag}>
            {"#wontonion  #Ethan #Yisheng"}
          </div>

          <div className={styles.heroDescription}>
            {homepageContent.description}
          </div>
          
          <div className={styles.resumeButton}>
            <Link
              className="button button--primary button--lg"
              to="/resume"
            >
              View My Resume🧾
            </Link>
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="https://github.com/wontonion" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yisheng-zhu/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="mailto:ethanzhu928@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        

        {/* Right Column - Illustration */}
        <div className={styles.heroRight}>
          <img
            className={styles.heroPhoto}
            src="/img/github_photo.jpg"
            alt="Developer digit photo"
          />
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;
