import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform } from "../hooks/usePlatform";
import { Platform } from "../interface/Platform";
interface PlatformProps {
  onSelectPlatform: (platform: Platform) => void;
  platformSelected: Platform | null;
}
const PlatFormSelect = ({
  onSelectPlatform,
  platformSelected
}: PlatformProps) => {
  const { data, error } = usePlatform();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformSelected && platformSelected
          ? platformSelected.name
          : "Select Platform"}
      </MenuButton>
      <MenuList>
        {error && data.length < 0 && (
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
          ))}
        {/* <MenuItem>Item 2</MenuItem> */}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelect;
