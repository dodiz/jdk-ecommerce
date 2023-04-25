import Link from "next/link";
import { useMemo, useState } from "react";

import { Dropdown } from "~common";
import { AccountIcon } from "~icons";
import { Signin, Signup } from "~components";

import styles from "./Navbar.module.scss";
import { navbarUtils } from "./Navbar.utils";

export const Navbar = () => {
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const signLinks = useMemo(
    () => [
      { label: "Login", onClick: () => setShowSignin(true) },
      { label: "Signup", onClick: () => setShowSignup(true) },
    ],
    [setShowSignin, setShowSignup]
  );

  return (
    <>
      <Signin show={showSignin} onHide={() => setShowSignin(false)} />
      <Signup show={showSignup} onHide={() => setShowSignup(false)} />
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
        <Dropdown icon={<AccountIcon />} label="Login" links={signLinks} />
      </div>
    </>
  );
};
