import { type PropsWithChildren, useEffect, useCallback } from "react";
import styles from "./Dialog.module.scss";

type DialogProps = PropsWithChildren & {
  show: boolean;
  onHide: () => void;
};

export const Dialog: React.FC<DialogProps> = ({ children, show, onHide }) => {
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
      <div className={styles.modalWrapper}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};
