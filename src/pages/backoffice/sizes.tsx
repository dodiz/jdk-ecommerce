import { useFormik } from "formik";
import { Input, Button } from "~common";
import { BackofficeLayout } from "~components";

const Sizes = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <BackofficeLayout>
      <h1>Sizes</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input label="Name" name="name" onChange={formik.handleChange} />
        <Input
          label="Shortname"
          name="shortName"
          onChange={formik.handleChange}
        />
        <Button label="Add size" type="submit" />
      </form>
    </BackofficeLayout>
  );
};
export default Sizes;
