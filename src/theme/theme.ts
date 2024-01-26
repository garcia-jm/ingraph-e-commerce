import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./ButtonStyles";

export const customTheme = extendTheme({
  textStyles: {
    smallText: {
      fontSize: { base: "0.8em", md: "0.9em", lg: "1em", xl: "1.1em" },
    },
    largeText: {
      fontSize: { base: "1em", md: "1.1em", lg: "1.2em", xl: "1.3em" },
    },
    mainHeading: {
      fontSize: { base: "1.2em", md: "1.5em", lg: "1.8em", xl: "2em" },
    },
    subHeading: {
      fontSize: { base: "1em", md: "1.2em", lg: "1.4em", xl: "1.6em" },
    },
  },
  colors: {
    primary: "#67AD5C",
    secondary: "#2C3338",
  },
  components: {
    Button,
  },
});
