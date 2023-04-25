import { useFormik } from "formik";
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
  const formik = useFormik({
    initialErrors: { email: "" },
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors = { email: "", password: "" };
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
  });
  return (
    <Dialog show={show} onHide={onHide} title="Login">
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          error={formik.errors.email}
        />
        <Input
          label="password"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
        />
        <a className={styles.link}>Forgot password?</a>
        <a className={styles.link} onClick={onSignupClick}>
          Need an account? Signup!
        </a>
        <div className={styles.divider}>
          <Button>Login</Button>
        </div>
      </form>
    </Dialog>
  );
};
