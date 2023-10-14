/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Alert from "./Alert";
import { DiBitbucket } from "react-icons/di";
import Styled from "styled-components";
import MessagesCompo from "./Messages";
const Heading = Styled.h1`
    color:blue;
    font-style:bold
    `;
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

// let selectedIndex = 0;
const ListGroup = (props: Props) => {
  const [showAlert, setAlert] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [name, setName] = useState("");
  const toggleVisibility = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  return (
    <>
      <Heading>{props.heading}</Heading>
      <ul className="list-group">
        {props.items.map((x, index) => {
          return (
            <li
              onClick={() => {
                //  selectedIndex =index
                setSelectedIndex(index);
                const indexname = `${x}+${index}`;
                toggleVisibility();
                setName(indexname);
                props.onSelectedItem(indexname);
                console.log(x, selectedIndex, index, "Clicked");
              }}
              className={
                selectedIndex == index
                  ? "list-group-item active ml-2"
                  : "list-group-item ml-2"
              }
              key={x}
            >
              <MessagesCompo />
              <DiBitbucket color="green" size="30" />
              {x}
            </li>
          );
        })}
      </ul>
      {showAlert && <Alert text={name} />}
    </>
  );
};

export default ListGroup;
