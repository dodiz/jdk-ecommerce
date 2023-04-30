import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import paypalImage from "~images/payments/paypal.webp";
import masterCardImage from "~images/payments/mastercard.webp";
import visaImage from "~images/payments/visa.webp";

import { FacebookIcon, InstagramIcon } from "~icons";
import styles from "./Footer.module.scss";
import { toast } from "react-toastify";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.item}>
          <h3 className={styles.title}>Socials</h3>
          <div>
            <FacebookIcon
              onClick={() => toast.info("Fake link")}
              className={cx(styles.icon, styles.facebook)}
            />
            <InstagramIcon
              onClick={() => toast.info("Fake link")}
              className={cx(styles.icon, styles.instagram)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>Your account</h3>
          <ul>
            <li className={styles.item}>
              <Link href="/account">Account</Link>
            </li>
            <li className={styles.item}>
              <Link href="/cart">Cart</Link>
            </li>
            <li className={styles.item}>
              <Link href="/account/orders">Past orders</Link>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>Products</h3>
          <ul>
            <li className={styles.item}>
              <Link href="/shop">Women</Link>
            </li>
            <li className={styles.item}>
              <Link href="/shop">Men</Link>
            </li>
            <li className={styles.item}>
              <Link href="/shop">Kids</Link>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>Company</h3>
          <ul>
            <li className={styles.item}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.item}>
              <a onClick={() => toast.info("Fake link")}>Privacy policy</a>
            </li>
            <li className={styles.item}>
              <a onClick={() => toast.info("Fake link")}>
                Terms and conditions
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>Payment Methods</h3>
          <div>
            <Image
              width={30}
              height={20}
              alt="paypal"
              src={paypalImage.src}
              className={styles.payment}
            />
            <Image
              width={30}
              height={20}
              alt="mastercard"
              src={masterCardImage.src}
              className={styles.payment}
            />
            <Image
              width={30}
              height={20}
              alt="visa"
              src={visaImage.src}
              className={styles.payment}
            />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>Copyright by dodiz</div>
    </footer>
  );
};
