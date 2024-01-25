import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  imgUrl: string[];
  interval?: number;
}

const CTA = ({ imgUrl, interval = 3000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const goToPrev = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + imgUrl.length) % imgUrl.length
  //   );
  // };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrl.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval]);
  return (
    <Box width="100%" position="relative" mb="3rem">
      <Flex justify="center" align="center">
        <Box>
          <img
            src={imgUrl[currentIndex]}
            alt={`carousel-item-${currentIndex}`}
            width="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CTA;
