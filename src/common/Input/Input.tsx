import classNames from "classnames";
import styles from "./Input.module.scss";

type InputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <label className={styles.group}>
      <h4 className={styles.label}>{label}</h4>
      <input
        className={classNames(styles.input, { [styles.error]: error })}
        type="text"
        {...rest}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </label>
  );
};
