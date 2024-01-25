import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Features = () => {
  const breakpoint = useBreakpointValue({
    base: "base",
    md: "md",
    lg: "lg",
    xl: "xl",
  });
  return (
    <Flex
      px={{ base: "1rem", lg: "6rem" }}
      justifyContent="space-between"
      direction={{ base: "column", md: "row" }}
      gap="1rem"
      pb="2rem"
      mb="2rem"
    >
      <Box>
        <Heading as="h6" fontSize={{ lg: "1em" }}>
          High-quality prints
        </Heading>
        <Text fontSize={{ lg: "0.8em" }}>Perfect prints. Guaranteed.</Text>
      </Box>
      {breakpoint === "base" ? (
        <Divider orientation="horizontal" />
      ) : (
        <Divider orientation="vertical" />
      )}
      <Box>
        <Heading as="h6" fontSize={{ lg: "1em" }}>
          Next Day Delivery
        </Heading>
        <Text fontSize={{ lg: "0.8em" }}>Delivers anywhere in Calgary.</Text>
      </Box>
      {breakpoint === "base" ? (
        <Divider orientation="horizontal" />
      ) : (
        <Divider orientation="vertical" />
      )}
      <Box>
        <Heading as="h6" fontSize={{ lg: "1em" }}>
          Satisfaction Guaranteed
        </Heading>
        <Text fontSize={{ lg: "0.8em" }}>
          Not satisfied? Get a full refund.
        </Text>
      </Box>
      {breakpoint === "base" ? (
        <Divider orientation="horizontal" />
      ) : (
        <Divider orientation="vertical" />
      )}
      <Box>
        <Heading as="h6" fontSize={{ lg: "1em" }}>
          Fast and Easy
        </Heading>
        <Text fontSize={{ lg: "0.8em" }}>Process everything online.</Text>
      </Box>
    </Flex>
  );
};

export default Features;
