import { useMemo } from "react";
import cx from "classnames";
import styles from "./Button.module.scss";
import { type ButtonProps } from "./Button.types";

export const Button: React.FC<
  ButtonProps & { variant?: "primary" | "secondary" }
> = ({ label, className, variant = "primary", ...rest }) => {
  const buttonClassName = useMemo(() => {
    return variant === "primary" ? styles.primary : styles.secondary;
  }, [variant]);

  return (
    <button className={cx(buttonClassName, className)} {...rest}>
      {label}
    </button>
  );
};
