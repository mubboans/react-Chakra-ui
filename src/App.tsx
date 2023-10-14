/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import ListGroup from "./components/ListGroup";
import { User } from "./components/User";
const listArr = ["Mubashir", "Rafique", "Ahmed", "Ansari"];
const heading = "List group form props";
const handlingSelectedItem = (item: string) => {
  console.log(item, "Selected from parent");
};
function App() {
  return (
    <>
      <User />

      <CategoryForm></CategoryForm>
    </>
  );
}

export default App;
