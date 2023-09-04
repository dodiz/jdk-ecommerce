import type { FC } from "react";
import styles from "./Button.module.scss";
import { type ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  ...rest
}) => {
  const buttonClassName =
    variant === "primary" ? styles.primary : styles.secondary;

  return (
    <button className={buttonClassName} {...rest}>
      {label}
    </button>
  );
};
