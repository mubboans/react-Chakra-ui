import { useState } from "react";
import Expenses from "./Expenses";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValue, useForm } from "react-hook-form";
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  category: z.string(),
  amount: z
    .number({ invalid_type_error: "Age is required" })
    .max(1000, { message: "Amount must be under 1000" })
});
type FormDataCheck = z.infer<typeof schema>;

const CategoryForm = () => {
  const [selectCategory, setCategory] = useState("");
  const [expenses, setExpense] = useState([
    { id: 1, description: "abcd", amount: 123, category: "Electonic" },
    { id: 2, description: "erty", amount: 456, category: "Grocery" },
    { id: 3, description: "aqwertbcd", amount: 789, category: "Appliciance" },
    { id: 4, description: "ajhgfdbcd", amount: 729, category: "Kitchen" },
    { id: 5, description: "uytr", amount: 6129, category: "Others" }
  ]);
  console.log(selectCategory, "selectCategory");

  const visibleExpense = selectCategory
    ? expenses.filter((x) => x.category == selectCategory)
    : expenses;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormDataCheck>({ resolver: zodResolver(schema) });
  console.log(errors, "formState check");
  const categories = [
    "Electonic",
    "Grocery",
    "Appliciance",
    "Kitchen",
    "Others"
  ];
  const onSubmit = (data: FieldValue) =>
    setExpense([
      ...expenses,
      {
        id: expenses.length + 1,
        ...data
      }
    ]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-danger">{errors.description?.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Category</label>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Category"
                  onChange={(event) => setCategory(event.target.value)}
                /> */}
                <select
                  className="form-select"
                  id="category"
                  {...register("category")}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option value={cat} key={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  {...register("amount", { valueAsNumber: true })}
                  // onChange={(event) => setAmout(parseInt(event.target.value))}
                  placeholder="Enter Amount"
                />
                {errors.amount && (
                  <p className="text-danger">{errors.amount?.message}</p>
                )}
              </div>
              {isValid}
              <button
                disabled={!isValid}
                className="btn btn-sm btn-secondary align-self-center"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-12 dol-md-10 mx-auto">
            <div className="m-3">
              <select
                className="form-select"
                id="filter"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All</option>
                {categories.map((x) => (
                  <option value={x} key={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>
            <Expenses
              expense={visibleExpense}
              onDelete={(eid: number) => {
                // const x = expenses.filter((x) => x.id !== eid);
                setExpense(expenses.filter((x) => x.id !== eid));
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryForm;
