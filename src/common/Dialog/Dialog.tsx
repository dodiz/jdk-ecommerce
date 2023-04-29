import { type PropsWithChildren, useEffect, useCallback } from "react";
import styles from "./Dialog.module.scss";

type DialogProps = PropsWithChildren & {
  show: boolean;
  onHide: () => void;
  title: string;
};

export const Dialog: React.FC<DialogProps> = ({
  children,
  show,
  onHide,
  title,
}) => {
  const escapeListener = useCallback(
    (e: KeyboardEvent) => e.key === "Escape" && onHide(),
    [onHide]
  );

  useEffect(() => {
    if (show) document.addEventListener("keydown", escapeListener);
    else document.removeEventListener("keydown", escapeListener);
  }, [onHide, show, escapeListener]);

  return show ? (
    <div className={styles.dialog} onClick={onHide}>
      <div className={styles.wrapper}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};
