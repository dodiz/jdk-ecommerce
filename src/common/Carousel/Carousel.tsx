import { useCallback, useMemo, useState } from "react";
import styles from "./Carousel.module.scss";
import { ArrowDownIcon } from "~icons";

type CarouselProps = {
  slides: {
    title: string;
    content: React.ReactNode;
    background: string;
  }[];
};

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const innerWidth = useMemo(
    () => (slides.length * 100).toString() + "%",
    [slides.length]
  );
  const innerTranslate = useMemo(
    () => ((currentSlide * -100) / slides.length).toString() + "%",
    [currentSlide, slides]
  );

  const slideRight = useCallback(() => {
    setCurrentSlide((p) => (p === slides.length - 1 ? p : p + 1));
  }, [slides, setCurrentSlide]);

  const slideLeft = useCallback(() => {
    setCurrentSlide((p) => (p === 0 ? p : p - 1));
  }, [setCurrentSlide]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{
          width: innerWidth,
          transform: `translateX(${innerTranslate})`,
        }}
      >
        {slides.map(({ background, content }, i) => (
          <div
            key={i}
            className={styles.slide}
            style={{ backgroundImage: `url(${background})` }}
          >
            {content}
          </div>
        ))}
      </div>
      <div className={styles.control} onClick={slideLeft}>
        <div className={styles.arrow}>
          <ArrowDownIcon />
        </div>
      </div>
      <div className={styles.controlRight} onClick={slideRight}>
        <div className={styles.arrow}>
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
};
