import { Box, Heading, Img } from "@chakra-ui/react";
interface Props {
  img: string;
  title: string;
}

const titleProps = {
  bottom: "10px",
  left: "10px",
  position: "absolute",
  zIndex: "100",
  direction: "column",
  width: { base: "50%", md: "60%" },
  fontFamily: "Arial",
  lineHeight: "115%",
  fontSize: { base: "1.2em" },
  color: "white",
  fontWeight: "bold",
  mb: "0.5rem",
};

const HeroSubItem = ({ img, title }: Props) => {
  return (
    <Box overflow="hidden" cursor="pointer" height="100%" position="relative">
      <Img
        draggable="false"
        src={img}
        alt="best seller"
        height="100%"
        width="100%"
        objectFit="cover"
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: "scale(1.2)" }}
      />

      <Heading zIndex={1} as="h2" sx={titleProps}>
        {title}
      </Heading>
    </Box>
  );
};

export default HeroSubItem;
