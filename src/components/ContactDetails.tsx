import { Flex, Heading, Text } from "@chakra-ui/react";

const ContactDetails = () => {
  return (
    <Flex gap="0.5rem" direction="column">
      <Heading as="h4">Our office</Heading>
      <Text>Bay 9, 2616 - 6TH ST CALGARY AB T2E 7J9</Text>
      <Text>Tel #: 403-457-1217</Text>
      <Text>Email: sales@ingraph.ca</Text>
      <Text>Business hours:</Text>
      <Text>MONDAY - FRIDAY</Text>
      <Text>09:00 AM - 5:00 PM</Text>
    </Flex>
  );
};

export default ContactDetails;
