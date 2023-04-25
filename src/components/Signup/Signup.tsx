import { useState } from "react";
import { Button, Dialog, Input } from "~common";

import styles from "./Signup.module.scss";

type SignupProps = {
  show: boolean;
  onHide: () => void;
  onSigninClick: () => void;
};

export const Signup: React.FC<SignupProps> = ({
  show,
  onHide,
  onSigninClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Dialog show={show} onHide={onHide} title="Signup">
      <Input
        label="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        label="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <Input
        label="passwordConfirm"
        value={passwordConfirm}
        onChange={({ target }) => setPasswordConfirm(target.value)}
      />
      <Input
        label="firstName"
        value={firstName}
        onChange={({ target }) => setFirstName(target.value)}
      />
      <Input
        label="lastName"
        value={lastName}
        onChange={({ target }) => setLastName(target.value)}
      />
      <a className={styles.link} onClick={onSigninClick}>
        Already have an account? Login instead
      </a>
      <div className={styles.divider}>
        <Button>Signup</Button>
      </div>
      <p className={styles.disclaimer}>
        By signing up you agree to our terms of service
      </p>
    </Dialog>
  );
};
