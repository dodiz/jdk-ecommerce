import type { NextPage } from "next";
import { Button } from "~common";
import { Filters } from "~components";

import styles from "./Shop.module.scss";

const Shop: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadCrumb}>Shop &gt; Men</div>
      <div className={styles.wrapper}>
        <Filters />
        <div className={styles.shop}>
          <div className={styles.top}>
            <h2>Products</h2>
            <Button
              variant="secondary"
              className={styles.orderButton}
              label="Price: Lowest to highest"
            />
          </div>
          <div className={styles.products}>products go here</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
