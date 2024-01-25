import { Flex } from "@chakra-ui/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  goToPrev: () => void;
  goToNext: () => void;
}

const HeroPrevNext = ({ goToNext, goToPrev }: Props) => {
  return (
    <Flex
      width="100%"
      top="50%"
      left="0"
      justifyContent="space-between"
      position="absolute"
      zIndex={100}
    >
      <MdKeyboardArrowLeft
        onClick={() => goToPrev()}
        cursor="pointer"
        color="white"
        fontSize="35px"
      />
      <MdKeyboardArrowRight
        onClick={() => goToNext()}
        cursor="pointer"
        color="white"
        fontSize="35px"
      />
    </Flex>
  );
};

export default HeroPrevNext;
