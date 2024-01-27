import {
  Flex,
  HStack,
  Link as CLink,
  Spacer,
  Text,
  Button,
} from "@chakra-ui/react";
import { BiHeadphone } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [is4kScreen] = useMediaQuery("(min-width: 2560px)");
  return (
    <Flex
      direction="row"
      backgroundColor="#F4F4F4"
      paddingX={{ base: "1rem", md: "2rem", lg: "6rem", "2xl": "8rem" }}
      paddingY="0.5rem"
    >
      <HStack>
        <BiHeadphone size={is4kScreen ? "1.5em" : "0.8em"} color="#67AD5C" />
        <Text fontSize={{ base: "0.7em", xl: "1em", "2xl": "1.2em" }}>
          Hotline:{" "}
          <CLink fontWeight="bold" color="#67AD5C">
            403-457-1217
          </CLink>
        </Text>
      </HStack>
      <Spacer />
      <HStack display={{ base: "none", md: "flex" }}>
        <RiAccountCircleLine
          size={is4kScreen ? "1.2em" : "0.7em"}
          color="#67AD5C"
        />
        <Button fontSize={{ base: "0.7em", xl: "1em", "2xl": "1.2em" }}>
          <Link to="/ingraph-e-commerce/login">Sign in</Link>
        </Button>
        <Text fontSize={{ base: "0.7em", xl: "1em", "2xl": "1.2em" }}> / </Text>
        <CLink fontSize={{ base: "0.7em", xl: "1em", "2xl": "1.2em" }}>
          Sign up
        </CLink>
      </HStack>
    </Flex>
  );
};

export default Header;
