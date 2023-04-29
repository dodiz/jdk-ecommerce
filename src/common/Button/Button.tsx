import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {label}
    </button>
  );
};
