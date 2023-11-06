import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/userprofile.jpg";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-center"} padding="3px" alignItems="center">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      {/* <Text> Navbar</Text> */}
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
