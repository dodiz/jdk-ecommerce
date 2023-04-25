import styles from "./Input.module.scss";

type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  error,
}) => {
  return (
    <label className={styles.group}>
      <h4 className={styles.label}>{label}</h4>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </label>
  );
};
