import Link from "next/link";
import styles from "./Navbar.module.css";
import { Dropdown } from "~common/Dropdown";
import { AccountIcon } from "~icons";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoLetter}>J</span>ava
        <span className={styles.logoLetter}>D</span>ressing
        <span className={styles.logoLetter}>K</span>it
      </Link>
      <div className={styles.section}>
        <Link className={styles.item} href="/">
          Home
        </Link>
        <Link className={styles.item} href="/shop?gender=2">
          Abbigliamento Uomo
        </Link>
        <Link className={styles.item} href="/shop?gender=1">
          Abbigliamento Donna
        </Link>
        <Link className={styles.item} href="/about-us">
          About us
        </Link>
      </div>
      <Dropdown icon={<AccountIcon />} label="Login">
        <Link href="/login" className={styles.dropdownItem}>
          Login
        </Link>
        <Link href="/signup" className={styles.dropdownItem}>
          Register
        </Link>
      </Dropdown>
    </div>
  );
};
