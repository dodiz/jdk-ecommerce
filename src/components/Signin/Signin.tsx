import { useEffect } from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

import { Button, Dialog, GithubButton, Input } from "~common";

import styles from "./Signin.module.scss";

type SigninProps = {
  show: boolean;
  onHide: () => void;
  onSignupClick: () => void;
};

const validate = toFormikValidate(
  z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().nonempty("Password is required"),
  })
);

export const Signin: React.FC<SigninProps> = ({
  show,
  onHide,
  onSignupClick,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      toast.info("Signin not yet implemented");
    },
    validate,
  });

  useEffect(() => {
    if (!show) {
      formik.resetForm();
    }
  }, [show]);

  return (
    <Dialog show={show} onHide={onHide} title="Login">
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
        />
        <a className={styles.link}>Forgot password?</a>
        <a className={styles.link} onClick={onSignupClick}>
          Need an account? Signup!
        </a>
        <div className={styles.divider}>
          <Button label="Login" type="submit" disabled={!formik.isValid} />
        </div>
      </form>
      <GithubButton
        label="Sign in with Github"
        onClick={() => void signIn("github")}
      />
    </Dialog>
  );
};
