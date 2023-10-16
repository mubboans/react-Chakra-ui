import { Switch, HStack, Text, useColorMode } from "@chakra-ui/react";
const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack alignItems={"center"} justifyContent={"center"}>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
        size="lg"
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorSwitch;
