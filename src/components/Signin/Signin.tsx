import { useEffect, useMemo } from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";

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
  const validate = useMemo(
    () =>
      toFormikValidate(
        z.object({
          email: z.string().email("Invalid email address"),
          password: z.string().nonempty("Password is required"),
        })
      ),
    []
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  useEffect(() => {
    if (!show) {
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          error={formik.errors.email}
        />
        <Input
          label="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
        />
        <a className={styles.link}>Forgot password?</a>
        <a className={styles.link} onClick={onSignupClick}>
          Need an account? Signup!
        </a>
        <div className={styles.divider}>
          <Button label="Login" type="submit" disabled={!formik.isValid} />
        </div>
      </form>
    </Dialog>
  );
};
