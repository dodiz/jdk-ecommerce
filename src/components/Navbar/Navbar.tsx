import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import { Dropdown } from "~common";
import { AccountIcon } from "~icons";
import { Signin, Signup } from "~components";

import styles from "./Navbar.module.scss";
import { navbarUtils } from "./Navbar.utils";

export const Navbar = () => {
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleSwitchToSignup = useCallback(() => {
    setShowSignin(false);
    setShowSignup(true);
  }, []);

  const handleSwitchToSignin = useCallback(() => {
    setShowSignup(false);
    setShowSignin(true);
  }, []);

  return (
    <>
      <Signin
        onSignupClick={handleSwitchToSignup}
        show={showSignin}
        onHide={() => setShowSignin(false)}
      />
      <Signup
        onSigninClick={handleSwitchToSignin}
        show={showSignup}
        onHide={() => setShowSignup(false)}
      />
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
        <div className={styles.section}>
          <div className={styles.account} onClick={() => setShowSignin(true)}>
            <AccountIcon />
            <a>Login</a>
          </div>
        </div>
      </div>
    </>
  );
};
