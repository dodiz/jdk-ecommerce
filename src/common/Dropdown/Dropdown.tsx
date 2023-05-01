import type { PropsWithChildren } from "react";
import { ArrowDownIcon } from "~icons";
import styles from "./Dropdown.module.scss";

type DropdownProps = PropsWithChildren & {
  label: string | JSX.Element;
};

export const Dropdown: React.FC<DropdownProps> = ({ label, children }) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.label}>
        {label}
        <ArrowDownIcon className={styles.arrowIcon} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
