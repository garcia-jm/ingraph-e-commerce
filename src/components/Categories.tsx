import { Box, Flex, Heading } from "@chakra-ui/react";
import data from "../constants/datas";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  return (
    <Box>
      <Heading
        textAlign="center"
        as="h2"
        fontSize={{ base: "1.3em", md: "1.5em", xl: "2em", "2xl": "3em" }}
        mb="2rem"
      >
        Categories
      </Heading>
      <Flex
        paddingX={{ base: "1rem", md: "2rem", lg: "6rem", "2xl": "8rem" }}
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
        gap={{ base: "1rem", "2xl": "2rem" }}
      >
        {data.categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            imgUrl={category.imgUrl}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Categories;
