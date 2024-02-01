import { Box, Flex, Heading } from "@chakra-ui/react";
import data from "../constants/datas";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router-dom";
import { Category } from "./ServiceCategoryList";
const Categories = () => {
  const navigate = useNavigate();

  const onSelect = (category: Category) => {
    const data = { category };
    navigate("/ingraph-e-commerce/services", { state: data });
  };
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
            onSelect={onSelect}
            category={category}
            key={category.title}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Categories;
