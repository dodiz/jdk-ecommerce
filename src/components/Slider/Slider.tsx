import { useMemo } from "react";
import slide1Image from "~images/slide-1.jpg";
import slide2Image from "~images/slide-2.jpg";
import slide3Image from "~images/slide-3.jpg";
import slide4Image from "~images/slide-4.jpg";

import styles from "./Slider.module.scss";

import { Carousel } from "~common";

export const Slider = () => {
  const slides = useMemo(
    () => [
      {
        title: "slide 1",
        background: slide1Image.src,
        content: (
          <div>
            <p className={styles.tag}>#SummerTag</p>
            <h2 className={styles.title}>She looks so happy</h2>
            <p className={styles.description}>Slide 1 content</p>
          </div>
        ),
      },
      {
        title: "slide 2",
        background: slide2Image.src,
        content: (
          <div>
            <p className={styles.tag}>#SummerTag</p>
            <h2 className={styles.title}>She looks so happy</h2>
            <p className={styles.description}>Slide 1 content</p>
          </div>
        ),
      },
      {
        title: "slide 3",
        background: slide3Image.src,
        content: (
          <div>
            <p className={styles.tag}>#SummerTag</p>
            <h2 className={styles.title}>She looks so happy</h2>
            <p className={styles.description}>Slide 1 content</p>
          </div>
        ),
      },
      {
        title: "slide 4",
        background: slide4Image.src,
        content: (
          <div>
            <p className={styles.tag}>#SummerTag</p>
            <h2 className={styles.title}>She looks so happy</h2>
            <p className={styles.description}>Slide 1 content</p>
          </div>
        ),
      },
    ],
    []
  );
  return <Carousel slides={slides} />;
};
