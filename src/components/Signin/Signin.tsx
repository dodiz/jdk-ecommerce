import { useState } from "react";
import { Button, Dialog, Input } from "~common";

import styles from "./Signin.module.scss";

type SigninProps = {
  show: boolean;
  onHide: () => void;
  onSignupClick: () => void;
};

export const Signin: React.FC<SigninProps> = ({
  show,
  onHide,
  onSignupClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Dialog show={show} onHide={onHide} title="Login">
      <Input
        label="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        label="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <a className={styles.link}>Forgot password?</a>
      <a className={styles.link} onClick={onSignupClick}>
        Need an account? Signup!
      </a>
      <div className={styles.divider}>
        <Button
          onClick={() => {
            console.log("Login");
          }}
        >
          Login
        </Button>
      </div>
    </Dialog>
  );
};
