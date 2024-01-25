import {
  Button,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <Flex
      py="3rem"
      px={{ base: "1rem", md: "2rem", lg: "6rem" }}
      bg="#D9D9D9"
      direction="column"
      justifyContent="space-between"
      gap="8rem"
    >
      <VStack>
        <Heading flex="1" as="h1" textAlign="center" mb="1rem">
          Proud to serve you Calgary
        </Heading>
        <Text textAlign="center" width="80%" mb="1rem">
          We specialize in creating custom indoor and outdoor advertising. With
          over 20 years of experience, we are confident we can assist in
          designing professional marketing materials to elevate your brand.
        </Text>
        <Button
          fontWeight="bold"
          fontSize={{ base: "0.8em", md: "0.9em" }}
          width={{ base: "160px", md: "175px" }}
          height={{ base: "35px" }}
          bg="#67AD5C"
          borderRadius={25}
          color="white"
          variant="solid"
        >
          Browse Services
        </Button>
      </VStack>

      <Flex gap="2rem" wrap="wrap">
        <Flex flex={1} minWidth="250px" direction="column" gap="1rem">
          <Heading as="h2" fontSize={{ base: "1em", md: "1.5em" }}>
            Ingraph Ltd, Calgary
          </Heading>
          <Text textAlign="justify">
            Ingraph is one of the leading design, signs, wraps, and printing
            company in Calgary, Alberta. With our industry experience and
            commitment, we are confident that we can meet your business needs
            with our wide range of services and expertise.
          </Text>

          <Heading as="h2" fontSize={{ base: "1em", md: "1.5em" }}>
            Connect with us:
          </Heading>
          <HStack>
            <FaFacebook fontSize="2em" color="#67AD5C" />
            <FaInstagram fontSize="2em" color="#67AD5C" />
          </HStack>
        </Flex>
        <Flex flex={1} minWidth="150px" direction="column">
          <Heading as="h2" fontSize={{ base: "1em", md: "1.5em" }} mb="1rem">
            Our Services
          </Heading>
          <Link>Banners</Link>
          <Link>Vehicle Signs</Link>
          <Link>Decals</Link>
          <Link>Posters</Link>
          <Link>Canvas</Link>
        </Flex>
        <Flex flex={1} minWidth="150px" direction="column">
          <Heading as="h2" fontSize={{ base: "1em", md: "1.5em" }} mb="1rem">
            Our Company
          </Heading>
          <Link>Search</Link>
          <Link>About us</Link>
          <Link>Blog</Link>
        </Flex>
        <Flex flex={1} minWidth="250px" direction="column">
          <Heading as="h2" fontSize={{ base: "1em", md: "1.5em" }} mb="1rem">
            Need help? Get in touch
          </Heading>
          <Flex gap="0.5rem" direction="column" alignItems="flex-start">
            <HStack>
              <BiLogoGmail color="#67AD5C" />
              <Text textDecor="underline">sales@ingraph.ca</Text>
            </HStack>
            <HStack>
              <BsFillTelephoneFill color="#67AD5C" />
              <Text>(403) 456-1217</Text>
            </HStack>
            <HStack>
              <FaClock color="#67AD5C" />
              <Text>MON - FRI 9:00 AM - 5:00 PM</Text>
            </HStack>
            <HStack>
              <IoLocationOutline fontSize="1.5em" color="#67AD5C" />
              <Text>Bay 9, 2616 - 16TH ST Calgary AB T2E 7J8</Text>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
