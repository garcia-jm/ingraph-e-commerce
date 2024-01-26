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

  const headingStyles = {
    fontSize: { base: "0.9em", lg: "1em", "2xl": "1.5em" },
  };

  const textStyles = {
    fontSize: { base: "0.7em", lg: "0.8em", "2xl": "1.2em" },
  };
  return (
    <Flex
      paddingX={{ base: "1rem", md: "2rem", lg: "6rem", "2xl": "8rem" }}
      justifyContent="space-between"
      alignItems={{ base: "flex-start", md: "center" }}
      direction={{ base: "column", md: "row" }}
      gap="1rem"
    >
      <Box>
        <Heading as="h6" sx={headingStyles}>
          High-quality prints
        </Heading>
        <Text sx={textStyles}>Perfect prints. Guaranteed.</Text>
      </Box>
      {breakpoint === "base" ? (
        <Divider orientation="horizontal" />
      ) : (
        <Divider orientation="vertical" />
      )}
      <Box>
        <Heading as="h6" sx={headingStyles}>
          Next Day Delivery
        </Heading>
        <Text sx={textStyles}>Delivers anywhere in Calgary.</Text>
      </Box>
      {breakpoint === "base" ? (
        <Divider orientation="horizontal" />
      ) : (
        <Divider orientation="vertical" />
      )}
      <Box>
        <Heading as="h6" sx={headingStyles}>
          Satisfaction Guaranteed
        </Heading>
        <Text sx={textStyles}>Not satisfied? Get a full refund.</Text>
      </Box>
      {breakpoint === "base" ? (
        <Divider orientation="horizontal" />
      ) : (
        <Divider orientation="vertical" />
      )}
      <Box>
        <Heading as="h6" sx={headingStyles}>
          Fast and Easy
        </Heading>
        <Text sx={textStyles}>Process everything online.</Text>
      </Box>
    </Flex>
  );
};

export default Features;
