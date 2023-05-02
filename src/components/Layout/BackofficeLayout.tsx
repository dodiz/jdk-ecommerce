import Link from "next/link";
import { useRouter } from "next/router";
import { type PropsWithChildren } from "react";

import { backofficeLinks } from "./Backoffice.utils";
import styles from "./Layout.module.scss";

export const BackofficeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <h3 className={styles.title}>Admin panel</h3>
        {backofficeLinks.map((link) => (
          <Link
            className={
              router.pathname === link.path ? styles.itemActive : styles.item
            }
            href={link.path}
            key={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
