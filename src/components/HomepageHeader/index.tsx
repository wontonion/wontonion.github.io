import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import clsx from "clsx";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import HeroSubtitleAnimation from "./HeroSubtitleAnimation";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroContainer}>
        {/* Left Column */}
        <div className={styles.heroLeft}>
          <Heading as="h1" className={styles.heroTitle}>
            {"Hi, I'm Ethan"}
          </Heading>

          <div className={styles.heroSubtitleAnimation}>
            <HeroSubtitleAnimation texts={["< " + siteConfig.tagline + " />", "< Developer />", "< Social Observer />", "< Student />"]}/>
          </div>

          <div className={styles.heroDescription}>
            {"I'm a software engineer with a curious mind of technology. I'm currently a master's student in Computer Science at Johns Hopkins University in Baltimore 🇺🇸."}
          </div>
          
          {/* TODO: Add Resume Button */}
          {/* <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              // to="/docs/projects"
            >
              View My Resume🧾
            </Link>
          </div> */}

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
