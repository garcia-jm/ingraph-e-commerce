import { Flex, HStack, Link, Spacer, Text } from "@chakra-ui/react";
import { BiHeadphone } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { useMediaQuery } from "@chakra-ui/react";

const Header = () => {
  const [is4kScreen] = useMediaQuery("(min-width: 2560px)");
  return (
    <Flex
      direction="row"
      backgroundColor="#F4F4F4"
      paddingX={{ base: "1rem", md: "2rem", lg: "6rem" }}
      paddingY="0.5rem"
    >
      <HStack>
        <BiHeadphone size={is4kScreen ? "1.5em" : "0.8em"} color="#67AD5C" />
        <Text fontSize={{ base: "0.7em", xl: "1em", "2xl": "1.5em" }}>
          Hotline:{" "}
          <Link fontWeight="bold" color="#67AD5C">
            403-457-1217
          </Link>
        </Text>
      </HStack>
      <Spacer />
      <HStack display={{ base: "none", md: "flex" }}>
        <RiAccountCircleLine
          size={is4kScreen ? "1.5em" : "0.8em"}
          color="#67AD5C"
        />
        <Link fontSize={{ base: "0.7em", xl: "1em", "2xl": "1.5em" }}>
          Sign in
        </Link>
        <Text fontSize={{ base: "0.7em", xl: "1em", "2xl": "1.5em" }}> / </Text>
        <Link fontSize={{ base: "0.7em", xl: "1em", "2xl": "1.5em" }}>
          Sign up
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
