import type { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type ButtonProps = PropsWithChildren & {
  onClick: () => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
