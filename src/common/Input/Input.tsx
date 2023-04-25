import styles from "./Input.module.scss";

type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <label className={styles.group}>
      <h4 className={styles.label}>{label}</h4>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
