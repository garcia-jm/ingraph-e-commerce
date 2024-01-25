import { Flex, Heading } from "@chakra-ui/react";
import imgUrl from "../assets/jumbotron-picture.jpg";

const Jumbotron = () => {
  return (
    <Flex
      bg={`url(${imgUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height={{ base: "300px", md: "550px" }}
      overflow="hidden"
      boxShadow="2px 2px 20px rgba(0, 0, 0, 0.6)"
      mx={{ base: "1rem", lg: "6rem" }}
      rounded="25px"
      alignItems="center"
      justifyContent="center"
      mb="2rem"
    >
      <Heading
        fontSize={{ base: "1em", md: "1.5em", lg: "1.5em" }}
        color="#f2f2f2"
        textAlign="center"
      >
        Enchance the exposure of your brand
      </Heading>
    </Flex>
  );
};

export default Jumbotron;
