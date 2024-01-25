import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import datas from "../constants/datas";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CTA = () => {
  const interval = 6_000;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentSlide >= datas.carouselItems.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentSlide, interval]);
  return (
    <Box
      height={{ base: "450px", md: "auto" }}
      m="auto"
      bg="#D9D9D9"
      w={{ base: "100%", md: "90%" }}
      overflow="hidden"
      position="relative"
      mb="2rem"
    >
      <Flex
        w={`${datas.carouselItems.length * 100}%`}
        transform={`translateX(-${
          currentSlide * (100 / datas.carouselItems.length)
        }%)`}
        transition="transform 0.5s ease-in-out"
      >
        {datas.carouselItems.map((image, index) => (
          <Flex
            flex="1"
            key={index}
            alignItems="center"
            justifyContent="center"
            gap={{ base: "1rem", md: "" }}
            direction={{ base: "column", md: "row" }}
          >
            <Image
              draggable="false"
              flex="1"
              height="100%"
              width={{ base: "100%", md: "50%" }}
              src={image.imgUrl}
              alt={`Image ${index + 1}`}
              objectFit="contain"
            />
            <VStack
              flex="1"
              spacing="1rem"
              px={{ base: "1rem", md: "2rem", lg: "4rem" }}
            >
              <Heading as="h2" fontSize={{ base: "1.2em", lg: "1.5em" }}>
                {image.title}
              </Heading>
              <Text
                fontSize={{ base: "0.8em", md: "0.9em", lg: "1em" }}
                px="1rem"
                textAlign="center"
              >
                {image.desc}
              </Text>
            </VStack>
          </Flex>
        ))}
      </Flex>

      <Flex
        right={{ base: "25%", md: "0" }}
        top={{ base: "", md: "25%", lg: "35%" }}
        bottom={{ base: "0", md: "" }}
        position="absolute"
        gap={{ base: "0.5rem", md: "1rem", lg: "1.5rem", xl: "2rem" }}
        mr={{ base: "", md: "1rem" }}
        mb={{ base: "1rem", md: "" }}
        direction={{ base: "row", md: "column" }}
      >
        {datas.carouselItems.map((_, index) => (
          <Button
            key={index}
            size="sm"
            variant="ghost"
            colorScheme="gray"
            onClick={() => handleSlideChange(index)}
            isActive={index === currentSlide}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default CTA;
