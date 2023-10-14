import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
interface Exprense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface ExpenseInter {
  expense: Exprense[];
  onDelete: (id: number) => void;
}
const Expenses = ({ expense, onDelete }: ExpenseInter) => {
  console.log(expense.length, "length check");

  if (expense.length == 0) return <p className="text-danger">No data found</p>;
  return (
    <>
      <div className="table-responsive table-bordered">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expense.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.description}</td>
                <td>{x.category}</td>
                <td>{x.amount}</td>
                <td>
                  <Button
                    onClick={() => {
                      console.log(x.id, "id");
                      onDelete(x.id);
                    }}
                    colorScheme="teal"
                    size="sm"
                  >
                    Delete
                  </Button>
                  {/* <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      console.log(x.id, "id");
                      onDelete(x.id);
                    }}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}> Total</td>
              <td>
                {expense
                  .reduce((prev, curr) => curr.amount + prev, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Expenses;
