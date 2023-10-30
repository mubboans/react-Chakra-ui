import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
interface sortProps {
  onSelectSort: (sortOrder: string) => void;
  sortOrder: string | "" | undefined | null;
}
const SortSelector = ({ onSelectSort, sortOrder }: sortProps) => {
  const sortMenu = [
    { value: "", label: "Revelance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" }
  ];
  const label = sortMenu.filter((x) => x.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* {platformSelected && platformSelected
              ? platformSelected.name */}
        {/* : "Order by relevance"} */}
        Order by{" "}
        {label.length > 0 && label[0].label !== ""
          ? label[0].label
          : "relevance"}
      </MenuButton>
      <MenuList>
        {sortMenu.map((x) => (
          <MenuItem
            key={x.value}
            onClick={() => {
              onSelectSort(x.value);
              console.log(x.value, "x logs");
            }}
          >
            {x.label}
          </MenuItem>
        ))}
        {/* <MenuItem>Revelance</MenuItem>
        <MenuItem>Date Added </MenuItem>
        <MenuItem> </MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem>Average Rating</MenuItem> */}
        {/* {error && data.length < 0 && (
              <MenuItem>Not Item Found at Moment</MenuItem>
            )}
            {data &&
              data.map((data: Platform) => (
                <MenuItem
                  onClick={() => {
                    onSelectPlatform(data);
                  }}
                  key={data.id}
                >
                  {data.name}
                </MenuItem>
              ))} */}
        {/* <MenuItem>Item 2</MenuItem> */}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
