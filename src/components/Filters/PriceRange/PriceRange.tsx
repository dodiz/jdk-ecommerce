import { useState, useEffect } from "react";
import styles from "./PriceRange.module.scss";

type PriceRangeProps = {
  min?: number;
  max?: number;
  step?: number;
  onPriceChange: (min: number, max: number) => void;
  stagger?: number;
};
/**
 * Component to filter prices
 * @param stagger must be in ms
 */
export const PriceRange: React.FC<PriceRangeProps> = ({
  min = 0,
  max = 200,
  step = 5,
  onPriceChange,
  stagger = 500,
}) => {
  const [currMin, setCurrMin] = useState(min);
  const [currMax, setCurrMax] = useState(max);

  useEffect(() => {
    const delayed = setTimeout(() => onPriceChange(currMin, currMax), stagger);
    return () => clearTimeout(delayed);
  }, [currMin, currMax, stagger, onPriceChange]);

  const minEdit = (value: number) => {
    if (value <= currMax - step * 2) setCurrMin(value);
  };
  const maxEdit = (value: number) => {
    if (value >= currMin + step * 2) setCurrMax(value);
  };
  return (
    <>
      <div>
        <span className={styles.price}>{currMin}</span>
        <span> - </span>
        <span className={styles.price}>{currMax}</span>
      </div>
      <div className={styles.container}>
        <input
          className={styles.rangeMin}
          onChange={(e) => minEdit(parseInt(e.target.value))}
          type="range"
          min={min}
          max={max}
          value={currMin}
          step={step}
        />
        <input
          className={styles.rangeMax}
          onChange={(e) => maxEdit(parseInt(e.target.value))}
          type="range"
          max={max}
          min={min}
          value={currMax}
          step={step}
        />
      </div>
    </>
  );
};
