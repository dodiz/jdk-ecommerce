import { Gender } from "@prisma/client";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Input, Button, Select } from "~common";
import { BackofficeLayout, BackofficeTable } from "~components";
import { api } from "~utils";

const Categories = () => {
  const categories = api.category.getAll.useQuery();
  const { mutate: createCategory } = api.category.create.useMutation();
  const { mutate: deleteCategory } = api.category.delete.useMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "Men" as Gender,
    },
    onSubmit: (values) => {
      createCategory(
        {
          name: values.name,
          gender: values.gender,
        },
        {
          onSuccess: () => {
            formik.resetForm();
            return void categories.refetch();
          },
          onError: (error) => {
            toast.error(error.message);
          },
        }
      );
    },
  });
  if (!categories.data) return <div>Loading...</div>;
  return (
    <BackofficeLayout>
      <h1>Categories</h1>
      <BackofficeTable data={categories.data} headers={["name"]} />
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <Select
          name="gender"
          label="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          options={Object.keys(Gender).map((gender) => ({
            label: gender,
            value: gender,
          }))}
        />
        <Button label="Add size" type="submit" />
      </form>
    </BackofficeLayout>
  );
};
export default Categories;
