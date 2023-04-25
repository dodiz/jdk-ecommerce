import type { PropsWithChildren } from "react";
import styles from "./Dropdown.module.scss";
import { ArrowDownIcon } from "~icons";

type DropdownProps = PropsWithChildren & {
  label: string;
  icon: JSX.Element;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  children,
  icon,
}) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.label}>
        <div className={styles.icon}>{icon}</div>
        {label}
        <ArrowDownIcon className={styles.arrowIcon} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
