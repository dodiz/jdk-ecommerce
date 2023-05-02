import cx from "classnames";
import styles from "./Button.module.scss";
import { type ButtonProps } from "./Button.types";

export const Button: React.FC<
  ButtonProps & { variant?: "primary" | "secondary" }
> = ({ label, className, variant = "primary", ...rest }) => {
  return (
    <button
      className={cx(
        { [styles.primary]: variant === "primary" },
        { [styles.secondary]: variant === "secondary" },
        className
      )}
      {...rest}
    >
      {label}
    </button>
  );
};
