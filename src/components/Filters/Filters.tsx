import { ArrowDownIcon } from "~icons";
import { PriceRange } from "./PriceRange";
import styles from "./Filters.module.scss";
import { useCallback, useState } from "react";

const categories = [
  {
    id: 1,
    name: "T-shirts",
  },
  {
    id: 2,
    name: "Pants",
  },
  {
    id: 3,
    name: "Shoes",
  },
];

const sizes = [
  {
    id: 1,
    name: "S",
  },
  {
    id: 2,
    name: "M",
  },
  {
    id: 3,
    name: "L",
  },
  {
    id: 4,
    name: "XL",
  },
  {
    id: 5,
    name: "XXL",
  },
];

export const Filters: React.FC = () => {
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  const handleSelectSize = useCallback(
    (id: number) => {
      if (selectedSizes.includes(id)) {
        setSelectedSizes((prev) => prev.filter((s) => s !== id));
      } else {
        setSelectedSizes((prev) => [...prev, id]);
      }
    },
    [selectedSizes]
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Categories <ArrowDownIcon className={styles.arrowDown} />
      </h3>
      <div className={styles.items}>
        {categories.map((c) => (
          <div key={c.id} className={styles.label}>
            {c.name}
          </div>
        ))}
      </div>
      <h3 className={styles.title}>
        Price <ArrowDownIcon className={styles.arrowDown} />
      </h3>
      <PriceRange
        onPriceChange={(min, max) => {
          console.log(min, max);
        }}
        max={100}
      />
      <h3 className={styles.title}>
        Colors <ArrowDownIcon className={styles.arrowDown} />
      </h3>
      <div>
        <div
          className={`color`}
          style={{
            backgroundColor: "red",
          }}
        />
      </div>
      <h3 className={styles.title}>
        Sizes <ArrowDownIcon className={styles.arrowDown} />
      </h3>
      <div className={styles.sizes}>
        {sizes.map((s) => (
          <div
            key={s.id}
            className={
              selectedSizes.includes(s.id) ? styles.sizeSelected : styles.size
            }
            onClick={() => handleSelectSize(s.id)}
          >
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
};
