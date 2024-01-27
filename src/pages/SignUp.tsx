import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/light-ingraph-logo.png";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const buttonStyles = {
    borderRadius: "25px",
    py: { base: "10px", "2xl": "15px" },
    justifyContent: "center",
    width: "100%",
    border: "1px solid #D9D9D9",
    alignItems: "center",
    fontSize: { base: "1em", "2xl": "1.2em" },
    fontWeight: "500",
    position: "relative",
    cursor: "pointer",
    transition: "0.3s ease",
    mb: "1.5rem",
    _hover: { bg: "#85ba7d", color: "white" },
  };
  return (
    <VStack px={{ base: "1rem", md: "" }} py="2rem">
      <Img
        draggable="false"
        cursor="pointer"
        src={logo}
        maxWidth={{ base: "120px", md: "130px", lg: "150px", "2xl": "200px" }}
        mb="1.5rem"
      />
      <Divider mb="2rem" />
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        direction="column"
        maxWidth={{
          base: "100%",
          md: "60%",
          lg: "50%",
          xl: "45%",
          "2xl": "40%",
        }}
      >
        <Flex sx={buttonStyles}>
          <Box position="absolute" left={{ base: "5%", md: "15%" }}>
            <FaGoogle fontSize="1.2em" />
          </Box>
          <Text>Continue with Google</Text>
        </Flex>
        <Flex sx={buttonStyles}>
          <Box position="absolute" left={{ base: "5%", md: "15%" }}>
            <FaFacebookSquare fontSize="1.2em" />
          </Box>
          <Text>Continue with Facebook</Text>
        </Flex>
        <Flex sx={buttonStyles}>
          <Box position="absolute" left={{ base: "5%", md: "15%" }}>
            <FaApple fontSize="1.2em" />
          </Box>
          <Text>Continue with Apple</Text>
        </Flex>
        <Text
          mb="1.5rem"
          fontWeight="bold"
          fontSize={{ base: "1em", "2xl": "1.2em" }}
        >
          Or, create an account with email.
        </Text>
        <Flex justifyContent="space-between" gap="1rem" width="100%">
          <Input
            flex="1"
            mb="1rem"
            borderRadius="0"
            borderStyle="none"
            borderBottom="1px solid black"
            placeholder="First name"
            fontSize={{ base: "1em", "2xl": "1.2em" }}
          />
          <Input
            flex="1"
            mb="1rem"
            borderRadius="0"
            borderStyle="none"
            borderBottom="1px solid black"
            placeholder="Last name"
            fontSize={{ base: "1em", "2xl": "1.2em" }}
          />
        </Flex>
        <Input
          mb="1rem"
          borderRadius="0"
          borderStyle="none"
          borderBottom="1px solid black"
          placeholder="Email address"
          fontSize={{ base: "1em", "2xl": "1.2em" }}
        />
        <InputGroup mb="2rem">
          <Input
            fontSize={{ base: "1em", "2xl": "1.2em" }}
            borderRadius="0"
            borderStyle="none"
            borderBottom="1px solid black"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text
          mb="1rem"
          fontSize={{ base: "0.9em", "2xl": "1em" }}
          lineHeight="28px"
          align="justify"
        >
          Registering your email address with us enables us to send you special
          offers from Ingraph, as well as news about services and your designs
          in progress. You can change your contact preferences and unsubscribe
          from receiving offers at any time in the "My Account" section or by
          using the unsubscribe link at the bottom of our emails.
        </Text>

        <Text
          mb="1.5rem"
          fontSize={{ base: "0.9em", "2xl": "1em" }}
          lineHeight="28px"
          align="justify"
        >
          By clicking the button below, you agree to, and have read, our Ingraph{" "}
          <Box as="span" textDecor="underline" cursor="pointer">
            General Terms and Conditions
          </Box>
          . For more details on how we use the information we collect about you,
          please read our Ingraph{" "}
          <Box as="span" textDecor="underline" cursor="pointer">
            Privacy and Cookie Policy.
          </Box>
        </Text>
        <Flex sx={buttonStyles}>
          <Text>Create an account</Text>
        </Flex>
        <Text mx="auto" fontSize={{ base: "0.9em", "2xl": "1em" }}>
          Already have an account?{" "}
          <Box
            as="span"
            fontWeight="bold"
            textDecor="underline"
            cursor="pointer"
          >
            Sign In
          </Box>
        </Text>
      </Flex>
    </VStack>
  );
};

export default SignUp;
