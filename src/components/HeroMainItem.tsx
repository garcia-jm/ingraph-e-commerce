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

const HeroMainItem = ({ interval = 10000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentService, setCurrentService] = useState(data.data[currentIndex]);
  const [change, setChange] = useState(false);

  const goToNext = () => {
    if (!change) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.data.length);
    }
  };
  const goToPrev = () => {
    if (!change) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.data.length) % data.data.length
      );
    }
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, interval);

    setChange(!change);
    setTimeout(() => {
      setChange(false);
      setCurrentService(data.data[currentIndex]);
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
        ml={{ base: "2.5rem" }}
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
          fontSize={{ base: "1.2em", md: "1.5em" }}
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
          fontSize={{ base: "0.7em", md: "0.8em" }}
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
          fontWeight="bold"
          fontSize={{ base: "0.7em", md: "0.9em", lg: "1em" }}
          width={{ base: "140px", md: "175px" }}
          height={{ base: "25px", md: "35px" }}
          bg="#67AD5C"
          borderRadius={25}
          color="white"
          variant="solid"
        >
          Explore Services
        </MotionButton>
      </Flex>
    </Flex>
  );
};

export default HeroMainItem;
