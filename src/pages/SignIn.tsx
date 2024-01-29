import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios, { CanceledError } from "axios";

interface FetchResponse {
  name: string;
  email: string;
  picture: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [userInfo, setUserInfo] = useState<FetchResponse | null>();
  // const [error, setError] = useState<string | null>(null);
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

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const controller = new AbortController();
      axios
        .get<FetchResponse>("https://www.googleapis.com/oauth2/v3/userinfo", {
          signal: controller.signal,
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        })
        .then((res) => {
          setUserInfo(res.data);
          console.log(userInfo);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          // setError(err.message);
        });

      return () => controller.abort();
    },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack px={{ base: "1rem", md: "" }} py="2rem">
        <Link to="/ingraph-e-commerce/">
          <Img
            draggable="false"
            cursor="pointer"
            src={logo}
            maxWidth={{
              base: "120px",
              md: "130px",
              lg: "150px",
              "2xl": "200px",
            }}
            mb="1.5rem"
          />
        </Link>
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
          <Flex sx={buttonStyles} onClick={() => login()}>
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
            Or, sign in with email.
          </Text>
          <FormControl isInvalid={!!errors.email}>
            <Input
              type="email"
              mb="1rem"
              borderRadius="0"
              borderStyle="none"
              borderBottom="1px solid black"
              placeholder="Email address"
              fontSize={{ base: "1em", "2xl": "1.2em" }}
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <FormErrorMessage mb="0.5rem">
              {(errors.email?.message as string) || "Invalid email address"}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <InputGroup mb="1rem">
              <Input
                fontSize={{ base: "1em", "2xl": "1.2em" }}
                borderRadius="0"
                borderStyle="none"
                borderBottom="1px solid black"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage mb="0.5rem">
              {(errors.password?.message as string) || "Invalid password"}
            </FormErrorMessage>
          </FormControl>
          <Box
            mb="1.5rem"
            as="span"
            textDecor="underline"
            fontSize={{ base: "0.9em", "2xl": "1em" }}
            cursor="pointer"
          >
            Forgot password?
          </Box>
          <Text
            mb="1rem"
            fontSize={{ base: "0.9em", "2xl": "1em" }}
            lineHeight="28px"
            align="justify"
          >
            By signing in, you have read and agree to our{" "}
            <Box as="span" cursor="pointer" textDecor="underline">
              Terms and Conditions
            </Box>
            . For more details on how we use the information we collect about
            you, please read our{" "}
            <Box as="span" cursor="pointer" textDecor="underline">
              Privacy and Cookie Policy.
            </Box>
          </Text>
          <Flex as="button" type="submit" sx={buttonStyles}>
            <Box>Sign in</Box>
          </Flex>
          <Text mb="1.5rem" mx="auto">
            or
          </Text>
          <Flex sx={buttonStyles}>
            <Link to="/ingraph-e-commerce/signup">Create an account</Link>
          </Flex>
        </Flex>
      </VStack>
    </form>
  );
};

export default SignIn;
