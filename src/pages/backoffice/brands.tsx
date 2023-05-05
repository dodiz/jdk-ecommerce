import { type NextPage } from "next";
import { useFormik } from "formik";
import { Button, Input } from "~common";
import { api } from "~utils";
import { BackofficeLayout } from "~components";
import { toast } from "react-toastify";

const Brands: NextPage = () => {
  const brands = api.brand.getAll.useQuery();
  const { mutate: createBrand } = api.brand.create.useMutation();
  const { mutate: deleteBrand } = api.brand.delete.useMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      createBrand(
        {
          name: values.name,
        },
        {
          onSuccess: () => {
            formik.resetForm();
            return void brands.refetch();
          },
        }
      );
    },
  });

  return (
    <BackofficeLayout>
      <h1>Brands</h1>
      {brands.data?.map((brand) => (
        <div key={brand.id}>
          {brand.id} {brand.name}
          <button
            onClick={() =>
              void deleteBrand(
                { id: brand.id },
                {
                  onSuccess: () => void brands.refetch(),
                  onError: (error) => {
                    toast.error(error.message);
                  },
                }
              )
            }
          >
            delete
          </button>
        </div>
      ))}
      <form onSubmit={formik.handleSubmit}>
        <Input label="name" name="name" />
        <Button label="Create" type="submit" />
      </form>
    </BackofficeLayout>
  );
};

export default Brands;
