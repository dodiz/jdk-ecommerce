import { GithubIcon } from "~icons";
import styles from "./Button.module.scss";
import { type ButtonProps } from "./Button.types";

export const GithubButton: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button className={styles.githubButton} {...rest}>
      <GithubIcon className={styles.githubIcon} />
      {label}
    </button>
  );
};
