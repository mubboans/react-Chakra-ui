import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/userprofile.jpg";
import ColorSwitch from "./ColorSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="3px" alignItems="center">
      <Image src={logo} boxSize="60px"></Image>
      {/* <Text> Navbar</Text> */}
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
