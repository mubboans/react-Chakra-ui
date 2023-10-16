/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Home from "./components/Home";
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
      <Home />
      {/* <User />

      <CategoryForm></CategoryForm> */}
    </>
  );
}

export default App;
