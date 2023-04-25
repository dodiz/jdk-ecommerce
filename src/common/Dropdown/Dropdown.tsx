import type { PropsWithChildren } from "react";
import { ArrowDownIcon } from "~icons";
import styles from "./Dropdown.module.scss";
import Link from "next/link";

type DropdownProps = PropsWithChildren & {
  label: string | JSX.Element;
  icon: JSX.Element;
  links?: { label: string; path: string }[];
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  children,
  icon,
  links,
}) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.label}>
        <div className={styles.icon}>{icon}</div>
        {label}
        <ArrowDownIcon className={styles.arrowIcon} />
      </div>
      <div className={styles.content}>
        {links
          ? links.map(({ path, label }) => (
              <Link key={label} className={styles.dropdownLink} href={path}>
                {label}
              </Link>
            ))
          : children}
      </div>
    </div>
  );
};
