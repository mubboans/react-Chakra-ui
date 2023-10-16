import {
  Card,
  CardBody,
  Heading,
  Image,
  Bad,
  Badge,
  HStack
} from "@chakra-ui/react";
import { Games } from "../interface/Games";
import PlatformIcon from "./PlatformIcon";
interface Props {
  props: Games;
}
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { getCropImage } from "../config/helper";
// import { Icon } from "react-icons";
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid
};
const GameCard = ({ props }: Props) => {
  const color = props?.metacritic > 75 ? "green" : "red";
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={getCropImage(props.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{props.name}</Heading>
          {/* <PlatformIcon obj={props.parent_platforms} /> */}
          <HStack
            color={"gray.500"}
            justifyContent={{
              base: "space-around",
              lg: "space-between"
            }}
          >
            {props.parent_platforms.map(({ platform }) => (
              <>
                <Icon
                  color={"gray.500"}
                  margin={"1px"}
                  as={iconMap[platform.slug]}
                ></Icon>
              </>
            ))}
            <Badge
              fontSize={"14px"}
              borderRadius={"4px"}
              padding={2}
              color={color}
            >
              {props.metacritic}
            </Badge>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

GameCard.propTypes = {};

export default GameCard;
