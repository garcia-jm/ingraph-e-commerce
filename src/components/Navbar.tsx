import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import imgUrl from "../assets/ads-and-decals.webp";
import { Link as DLink } from "react-router-dom";

import logo from "../assets/light-ingraph-logo.png";
import { useState } from "react";
const hoverStyles = {
  flex: 0.2,
  color: "#2C3338",
  fontSize: { base: "0.8em", md: "0.9em", "2xl": "1.5em" },
  transition: "color 0.3s ease",
  _hover: {
    color: "#67AD5C",
    textDecoration: "underline",
  },
};

const cartCounterIcon = {
  backgroundColor: "#67AD5C",
  color: "white",
  top: "-5px",
  right: "-5px",
  paddingY: "0.1rem",
  paddingX: "0.2rem",
  position: "absolute",
  borderRadius: "15px",
};

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);

  const handleMouseEnter = () => {
    setShowMega(true);
  };

  const handleMouseLeave = () => {
    setShowMega(false);
  };

  const megaMenuHeadingStyles = {
    color: "#666666",
    fontStyle: "1.2em",
    fontWeight: "bold",
    as: "h1",
    fontSize: { base: "1em" },
    mb: "1rem",
  };
  const linkStyles = {
    py: "0",
    px: "20px",
    color: "#666666",
    fontSize: "17px",
    display: "block",
    borderRadius: "5px",
    _hover: { color: "#f2f2f2", bg: "#3a3b3c" },
  };

  const rowStyles = { width: "calc(25% - 30px)", lineHeight: "45px" };
  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      paddingX={{ base: "1rem", md: "2rem", lg: "6rem", "2xl": "8rem" }}
    >
      <DLink to="/ingraph-e-commerce/">
        <Img
          draggable="false"
          cursor="pointer"
          src={logo}
          maxWidth={{ base: "100px", md: "110px", lg: "135px" }}
        />
      </DLink>
      <Flex
        flex="1"
        zIndex={100}
        px="1rem"
        position="relative"
        alignItems="center"
        justifyContent="center"
        display={{ base: "none", md: "flex" }}
        direction="row"
        gap="2rem"
      >
        <Button sx={hoverStyles} variant="link">
          Home
        </Button>
        <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Button id="catalog-button" sx={hoverStyles} variant="link">
            Catalogue
          </Button>
          {showMega && (
            <Box //Mega Menu
              left={0}
              zIndex="100"
              position="absolute"
            >
              <Flex
                bg="#f2f2f2"
                py="25px"
                px="20px"
                justifyContent="space-between"
                boxShadow="0 6px 10px rgba(0, 0, 0, 0.15)"
                borderRadius={10}
              >
                <Box sx={rowStyles}>
                  <Heading sx={megaMenuHeadingStyles}>
                    Marketing Materials
                  </Heading>
                  <UnorderedList listStyleType="none" ml="-40px">
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>Business Cards</Link>
                    </ListItem>
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>Flyers</Link>
                    </ListItem>
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>Magnets</Link>
                    </ListItem>
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>Stickers</Link>
                    </ListItem>
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>Labels</Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box sx={rowStyles}>
                  <Heading sx={megaMenuHeadingStyles}>Gallery Wrap</Heading>
                  <UnorderedList ml="-40px" listStyleType="none">
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>Gallery Wrap</Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box sx={rowStyles}>
                  <Heading sx={megaMenuHeadingStyles}>Posters</Heading>
                  <UnorderedList ml="-40px" listStyleType="none">
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>Foam Board</Link>
                    </ListItem>
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>Paper Posters</Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box sx={rowStyles}>
                  <Heading sx={megaMenuHeadingStyles}>Apparels</Heading>
                  <UnorderedList ml="-40px" listStyleType="none">
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>T-shirt</Link>
                    </ListItem>
                    <ListItem py="0" px="20px">
                      <Link sx={linkStyles}>Hoodies</Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box sx={rowStyles}>
                  <Image
                    src={imgUrl}
                    alt="image"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </Box>
              </Flex>
            </Box>
          )}
        </Box>
        <Button sx={hoverStyles} variant="link">
          About
        </Button>
        <Box flex="1">
          <InputGroup>
            <Input borderRadius="25px" placeholder="Search..." />
            <InputRightElement>
              <FaMagnifyingGlass />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>
      <HStack spacing="1rem">
        <Box cursor="pointer" position="relative">
          <Box sx={cartCounterIcon} position="absolute">
            <Text fontSize="8px">0</Text>
          </Box>
          <IoCartOutline fontSize="1.5rem" />
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={<RxHamburgerMenu />}
            aria-label="Open Navigation"
            onClick={handleToggleDrawer}
          />
        </Box>
      </HStack>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleToggleDrawer}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {/* Navbar Links for Small Screens */}
            <Flex alignItems="flex-start" direction="column" gap="1rem">
              <Button sx={hoverStyles} variant="link">
                Home
              </Button>
              <Button sx={hoverStyles} variant="link">
                Sign in
              </Button>
              <Button sx={hoverStyles} variant="link">
                Catalogue
              </Button>
              <Button sx={hoverStyles} variant="link">
                About
              </Button>
              <Divider />

              <Button sx={hoverStyles} variant="link">
                Product 1
              </Button>
              <Button sx={hoverStyles} variant="link">
                Product 2
              </Button>
              <Button sx={hoverStyles} variant="link">
                Product 3
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
