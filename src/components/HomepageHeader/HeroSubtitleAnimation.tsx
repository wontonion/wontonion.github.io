"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
function HeroSubtitleAnimation({ texts, speed = 100 }: { texts: string[], speed?: number }) {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(texts[0].length);
  const [typeStatus, setTypeStatus] = useState("typing");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentTextIndex];
      const nextTextIndex = (currentTextIndex + 1) % texts.length;

      if (typeStatus === "typing" && currentIndex < currentText.length) {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (typeStatus === "deleting" && currentIndex > 0) {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else if (typeStatus === "typing" && currentIndex === currentText.length) {
        setTimeout(() => {
          setTypeStatus("deleting");
        }, 2000);
      } else if (typeStatus === "deleting" && currentIndex === 0) {
        setTimeout(() => {
          setCurrentTextIndex(nextTextIndex);
          setTypeStatus("typing");
        }, 500);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, typeStatus, texts, speed, currentTextIndex]);

  // Cursor blinking effect
  useEffect(() => {
    // if (typeStatus !== "waiting") return;
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [typeStatus]);

  return (
    <p className={styles.heroText}>
      <span className={styles.mainText}>
        {displayText.slice(0, -1)}
      </span>
      {displayText.length > 0 && (
        <span className="last-char">
          {displayText.slice(-1)}
        </span>
      )}
      <span className={`cursor ${showCursor ? "" : "hidden"}`}>
        |
      </span>
    </p>
  );
}

export default HeroSubtitleAnimation;