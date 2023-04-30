import cx from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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
