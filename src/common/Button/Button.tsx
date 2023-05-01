import cx from "classnames";
import styles from "./Button.module.scss";
import { type ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  ...rest
}) => {
  return (
    <button className={cx(className, styles.button)} {...rest}>
      {label}
    </button>
  );
};
