import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <Accordion px={{ base: "1rem", md: "2rem", lg: "6rem" }} allowToggle>
      <Heading as="h2" mb="2rem">
        FAQ's
      </Heading>
      <AccordionItem py="0.5rem">
        <Heading as="h2">
          <AccordionButton>
            <Flex
              height="30px"
              width="30px"
              bg="#67AD5C"
              color="white"
              justifyContent="center"
              alignItems="center"
              borderRadius="100%"
              mr="0.5rem"
            >
              1
            </Flex>
            <Text as="span" flex="1" textAlign="left" fontWeight="bold">
              Do you offer free delivery?
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          We offer free delivery for orders above $200. Otherwise, we offer
          straight-to-your-door delivery for a minimal fee.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem py="0.5rem">
        <Heading as="h2">
          <AccordionButton>
            <Flex
              height="30px"
              width="30px"
              bg="#67AD5C"
              color="white"
              justifyContent="center"
              alignItems="center"
              borderRadius="100%"
              mr="0.5rem"
            >
              2
            </Flex>
            <Text as="span" flex="1" textAlign="left" fontWeight="bold">
              Can I cancel my order?
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Generally, you can request to cancel an item not yet printed. However,
          despite our best efforts, we cannot guarantee that the cancellation
          request will be successful.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem py="0.5rem">
        <Heading as="h2">
          <AccordionButton>
            <Flex
              height="30px"
              width="30px"
              bg="#67AD5C"
              color="white"
              justifyContent="center"
              alignItems="center"
              borderRadius="100%"
              mr="0.5rem"
            >
              3
            </Flex>
            <Text as="span" flex="1" textAlign="left" fontWeight="bold">
              Do you offer design services?
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Should you need design services, our team is readily available to
          assist you. To schedule a consultation call with our proficient design
          experts, kindly reach out to us. We look forward to the opportunity to
          work with you.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem py="0.5rem">
        <Heading as="h2">
          <AccordionButton>
            <Flex
              height="30px"
              width="30px"
              bg="#67AD5C"
              color="white"
              justifyContent="center"
              alignItems="center"
              borderRadius="100%"
              mr="0.5rem"
            >
              4
            </Flex>
            <Text as="span" flex="1" textAlign="left" fontWeight="bold">
              Can I pick up my order at your location?
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          We currently do not offer onsite pickup. We believe your time is
          essential, and we make our process to ensure we take care of the
          delivery while you do the most important thing—your business.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
