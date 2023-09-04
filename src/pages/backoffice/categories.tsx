import { Gender } from "@prisma/client";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Input, Button, Select } from "~common";
import { BackofficeLayout, Table } from "~components";
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
            toast.success("Success");
            formik.resetForm();
            return void categories.refetch();
          },
          onSettled: () => {
            toast.success("Setteled");
          },
          onError: (error) => {
            toast.error(error.message);
          },
        }
      );
    },
  });
  return (
    <BackofficeLayout>
      <h1>Categories</h1>
      <Table
        data={categories.data}
        onEdit={() => alert("edit click")}
        onDelete={(item) =>
          deleteCategory(
            { id: item.id },
            {
              onSuccess: () => {
                toast.success("Category deleted");
                return void categories.refetch();
              },
            }
          )
        }
      />
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
        <div style={{ marginTop: "2rem", width: "max-content" }}>
          <Button label="Add category" type="submit" />
        </div>
      </form>
    </BackofficeLayout>
  );
};
export default Categories;
