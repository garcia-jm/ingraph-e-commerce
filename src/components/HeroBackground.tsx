import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface Props {
  img: string;
  change: boolean;
}

const HeroBackground = ({ img, change }: Props) => {
  return (
    <Box
      bg={`url(${img})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      position="relative"
      height="100%"
    >
      <MotionBox
        initial={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        animate={{
          backgroundColor: change ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.7)",
        }}
        transition={{ duration: 0.5 }}
        position="absolute"
        top="0"
        right="0"
        height="100%"
        width="100%"
      />
    </Box>
  );
};

export default HeroBackground;
