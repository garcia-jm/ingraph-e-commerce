import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import imgUrl from "../assets/ads-and-decals.webp";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
const hoverStyles = {
  color: "#2C3338",
  flex: "0.5",
  fontSize: { base: "0.8em", md: "0.9em", "2xl": "2em" },
  transition: "color 0.3s ease",
  _hover: {
    color: "#67AD5C",
    textDecoration: "underline",
  },
};
const MegaMenu = () => {
  const [showMega, setShowMega] = useState(false);

  const handleMouseEnter = () => {
    setShowMega(true);
  };

  const handleMouseLeave = () => {
    setShowMega(false);
  };
  const linkStyles = {
    py: "0",
    px: "20px",
    color: "#d9d9d9",
    fontSize: "17px",
    display: "block",
    borderRadius: "5px",
    _hover: { color: "#f2f2f2", bg: "#3a3b3c" },
  };
  const rowStyles = { width: "calc(25% - 30px)", lineHeight: "45px" };
  return (
    <Flex
      zIndex={99}
      position="relative"
      maxW="1300px"
      py="0"
      px="30px"
      height="70px"
      lineHeight="70px"
      margin="auto"
      alignItems="center"
      justifyContent="space-between"
      paddingX={{ base: "1rem", md: "2rem", lg: "6rem" }}
      display={{ base: "none", md: "flex" }}
      direction="row"
      flexGrow="1"
      mr="2rem"
    >
      <Box>
        <Button sx={hoverStyles} variant="link">
          Home
        </Button>
      </Box>
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link
          color="#2C3338"
          textDecoration="none"
          fontSize={{ base: "0.9em", md: "1em", "2xl": "2em" }}
          fontWeight="bold"
          py="9px"
          px="15px"
          borderRadius="5px"
          transition="all 0.3s ease"
          _hover={{ color: "#67AD5C", textDecoration: "underline" }}
        >
          Catalogue
        </Link>

        <Box
          position="absolute"
          left="0"
          width="100%"
          py="0"
          px="30px"
          transition={showMega ? "all 0.3s ease" : ""}
          opacity={showMega ? "1" : "0"}
          top={showMega ? "70px" : "85px"}
        >
          <Flex
            bg="#242526"
            py="25px"
            px="20px"
            width="100%"
            justifyContent="space-between"
            boxShadow="0 6px 10px rgba(0, 0, 0, 0.15)"
          >
            <Box sx={rowStyles}>
              <Image
                src={imgUrl}
                alt="image"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
            <Box sx={rowStyles}>
              <Heading
                color="#f2f2f2"
                fontStyle="20px"
                fontWeight="500"
                as="h1"
                fontSize={{ base: "1em" }}
              >
                Design Services
              </Heading>
              <UnorderedList
                ml="-40px"
                borderLeft="1px solid rgba(255, 255, 255, 0.09)"
              >
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Graphics</Link>
                </ListItem>
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Vectors</Link>
                </ListItem>
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Business Cards</Link>
                </ListItem>
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Custom Logo</Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box sx={rowStyles}>
              <Heading
                color="#f2f2f2"
                fontStyle="20px"
                fontWeight="500"
                as="h1"
                fontSize={{ base: "1em" }}
              >
                Email Services
              </Heading>
              <UnorderedList
                ml="-40px"
                borderLeft="1px solid rgba(255, 255, 255, 0.09)"
              >
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Personal Email</Link>
                </ListItem>
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Business Email</Link>
                </ListItem>
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Mobile Email</Link>
                </ListItem>
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Web Marketing</Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box sx={rowStyles}>
              <Heading
                color="#f2f2f2"
                fontStyle="20px"
                fontWeight="500"
                as="h1"
                fontSize={{ base: "1em" }}
              >
                Security services
              </Heading>
              <UnorderedList
                ml="-40px"
                borderLeft="1px solid rgba(255, 255, 255, 0.09)"
              >
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Site Seal</Link>
                </ListItem>
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>VPS Hosting</Link>
                </ListItem>
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Privacy Seal</Link>
                </ListItem>
                <ListItem py="0" px="20px">
                  <Link sx={linkStyles}>Website design</Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box>
        <Button sx={hoverStyles} variant="link">
          About
        </Button>
      </Box>
      <Box>
        <InputGroup
          flexGrow={1}
          width={{ md: "150px", lg: "200px", xl: "250px" }}
        >
          <Input borderRadius="25px" placeholder="Search..." />
          <InputRightElement>
            <FaMagnifyingGlass />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default MegaMenu;
