import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ContactPageHeader = () => {
  return (
    <>
      <Flex
        paddingX={{ base: "1rem", md: "2rem", lg: "6rem", "2xl": "8rem" }}
        alignItems="center"
        direction="column"
        justifyContent="center"
        gap="2rem"
      >
        <Heading as="h1">GET IN TOUCH</Heading>
        <Text textAlign="center" maxWidth="80%">
          If you have been struggling with finding a signs and printing company
          for banners, signage, vinyl, A-frames and other printing tasks, then
          you are at the right place. Here at Ingraph, we are very interested in
          building relationships with customers to help tackle the challenges
          they encounter with their signs and printing services. We have
          assembled a team of experts that are always ready to help with your
          needs. You can schedule a meet-up with us, to discuss ways of
          recruiting our professionals.
        </Text>
      </Flex>
    </>
  );
};

export default ContactPageHeader;
