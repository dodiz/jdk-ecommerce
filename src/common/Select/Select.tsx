import cx from "classnames";
import styles from "./Select.module.scss";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  label: string;
};
export const Select: React.FC<SelectProps> = ({
  label,
  options,
  className,
  ...rest
}) => {
  return (
    <label className={styles.group}>
      <h4 className={styles.label}>{label}</h4>
      <select className={cx(styles.select, className)} {...rest}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
