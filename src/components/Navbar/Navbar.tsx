import Link from "next/link";
import { useCallback, useState } from "react";

import { AccountIcon, HamburgerIcon, CartIcon, HeartIcon } from "~icons";
import { Signin, Signup } from "~components";

import styles from "./Navbar.module.scss";
import { navbarUtils } from "./Navbar.utils";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
        <div className={styles.menuWrapper}>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={showMenu ? styles.hamburgerOpen : styles.hamburger}
          >
            <HamburgerIcon />
          </div>
          <div className={showMenu ? styles.menuOpen : styles.menu}>
            {navbarUtils.menuLinks.map(({ label, path }) => (
              <Link key={label} className={styles.item} href={path}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.user}>
          <a className={styles.item} onClick={() => setShowSignin(true)}>
            <AccountIcon className={styles.icon} />
            <span className={styles.label}>Login</span>
          </a>
          <Link href="/cart" className={styles.item}>
            <CartIcon className={styles.icon} />
            <span className={styles.label}>€0.00</span>
          </Link>
          <Link href="/favourites" className={styles.item}>
            <HeartIcon className={styles.icon} />
            <span className={styles.label}>Favourites</span>
          </Link>
        </div>
      </div>
    </>
  );
};
