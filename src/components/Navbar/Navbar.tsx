import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Dropdown } from "~common/Dropdown";
import { AccountIcon } from "~icons";
import { navbarUtils } from "./Navbar.utils";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoLetter}>J</span>ava
        <span className={styles.logoLetter}>D</span>ressing
        <span className={styles.logoLetter}>K</span>it
      </Link>
      <div className={styles.section}>
        {navbarUtils.menuLinks.map(({ label, path }) => (
          <Link key={label} className={styles.item} href={path}>
            {label}
          </Link>
        ))}
      </div>
      <Dropdown
        icon={<AccountIcon />}
        label="Login"
        links={navbarUtils.userLinks}
      />
    </div>
  );
};
