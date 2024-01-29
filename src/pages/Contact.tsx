import { Box, Flex } from "@chakra-ui/react";
import {
  ContactDetails,
  ContactPageHeader,
  ContactPageMap,
  ContactSubmissionForm,
  Footer,
  Header,
  Navbar,
} from "../components";

const Contact = () => {
  return (
    <>
      <Flex direction="column" gap={{ base: "2rem", "2xl": "4rem" }}>
        <Header />
        <Navbar />
        <ContactPageHeader />
        <Flex
          paddingX={{ base: "1rem", md: "2rem", lg: "6rem", "2xl": "8rem" }}
          m="auto"
          minW={{ base: "100%", md: "80%" }}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          gap="2rem"
        >
          <Box flex="0.7">
            <ContactDetails />
          </Box>
          <Box flex="1">
            <ContactSubmissionForm />
          </Box>
        </Flex>
        <ContactPageMap />
      </Flex>
      <Footer />
    </>
  );
};

export default Contact;
