import { Box, Flex, Heading } from "@chakra-ui/react";
import data from "../constants/datas";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  return (
    <Box mb="4rem">
      <Heading
        textAlign="center"
        as="h2"
        fontSize={{ base: "1.5em", md: "2em" }}
        mb="2rem"
      >
        Categories
      </Heading>
      <Flex
        mx={{ base: "1rem", md: "" }}
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
        gap="1rem"
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
