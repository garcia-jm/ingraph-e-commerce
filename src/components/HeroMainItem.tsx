import { Button, Flex, Text, Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroPrevNext from "./HeroPrevNext";
import data from "../constants/datas";

const MotionHeading = motion(Heading);
const MotionParagraph = motion(Text);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

interface Props {
  interval?: number;
}

const HeroMainItem = ({ interval = 10_000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentService, setCurrentService] = useState(
    data.heroItems[currentIndex]
  );
  const [change, setChange] = useState(false);

  const goToNext = () => {
    if (!change) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.heroItems.length);
    }
  };
  const goToPrev = () => {
    if (!change) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + data.heroItems.length) % data.heroItems.length
      );
    }
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, interval);

    setChange(!change);
    setTimeout(() => {
      setChange(false);
      setCurrentService(data.heroItems[currentIndex]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval]);
  return (
    <Flex
      bg={`url(${currentService.imgUrl})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      justifyContent="flex-start"
      alignItems="center"
      height="100%"
      overflow="hidden"
      position="relative"
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
      <HeroPrevNext goToPrev={goToPrev} goToNext={goToNext} />
      <Flex
        ml={{ base: "2.5rem", md: "10%", "2xl": "8%" }}
        zIndex={100}
        direction="column"
        width={{ base: "75%", md: "50%" }}
      >
        <MotionHeading
          as="h1"
          initial={{ y: -100, scale: 0.8, opacity: 0 }}
          animate={{
            y: change ? -100 : 0,
            opacity: change ? 0 : 1,
            scale: change ? 0.8 : 1,
          }}
          transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
          fontFamily="Arial"
          lineHeight="110%"
          fontSize={{ base: "1.2em", md: "1.5em", "2xl": "2.5em" }}
          color="white"
          fontWeight="bold"
          mb="0.5rem"
        >
          {currentService.title}
        </MotionHeading>

        <MotionParagraph
          initial={{ x: 100, scale: 1, opacity: 0 }}
          animate={{
            x: change ? 100 : 0,
            scale: change ? 0.8 : 1,
            opacity: change ? 0 : 1,
          }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
          fontFamily="Arial"
          color="white"
          lineHeight={{ md: "115%" }}
          fontSize={{ base: "0.7em", md: "0.8em", "2xl": "1.2em" }}
          mb={{ base: "1rem", lg: "2rem" }}
        >
          {currentService.desc}
        </MotionParagraph>
        <MotionButton
          initial={{ y: 50, scale: 0.9, opacity: 0 }}
          animate={{
            y: change ? 50 : 0,
            opacity: change ? 0 : 1,
            scale: change ? 0.9 : 1,
          }}
          transition={{ type: "spring", duration: 1, delay: 1.5 }}
          variant="primary"
        >
          Explore Services
        </MotionButton>
      </Flex>
    </Flex>
  );
};

export default HeroMainItem;
