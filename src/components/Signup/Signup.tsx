import { useEffect, useMemo } from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";

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
  const validate = useMemo(
    () =>
      toFormikValidate(
        z
          .object({
            email: z.string().email("Invalid email address"),
            password: z
              .string()
              .min(8, "Password must be at least 8 characters"),
            passwordConfirm: z.string().min(8),
          })
          .refine((data) => data.password === data.passwordConfirm, {
            message: "Passwords must match",
          })
      ),
    []
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
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
    <Dialog show={show} onHide={onHide} title="Signup">
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Input
          label="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          type="password"
        />
        <Input
          label="Confirm password"
          name="passwordConfirm"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.passwordConfirm}
          type="password"
        />
        <a className={styles.link} onClick={onSigninClick}>
          Already have an account? Login instead
        </a>
        <div className={styles.divider}>
          <Button label="Signup" disabled={!formik.isValid} />
        </div>
        <p className={styles.disclaimer}>
          By signing up you agree to our terms of service
        </p>
      </form>
    </Dialog>
  );
};
