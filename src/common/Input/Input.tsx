import cx from "classnames";
import styles from "./Input.module.scss";

type InputProps = {
  label: string;
  error?: string | boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <label className={styles.group}>
      <h4 className={styles.label}>{label}</h4>
      <input
        className={cx(styles.input, { [styles.error as string]: error })}
        type="text"
        {...rest}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </label>
  );
};
