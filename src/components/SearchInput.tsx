import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  // con [searchGame,setSearchGame] = useState()
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search Games" variant={"filled"} />
    </InputGroup>
    // <div>SearchInput</div>
  );
};

export default SearchInput;
