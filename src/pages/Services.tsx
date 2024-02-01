import {
  Footer,
  Header,
  Navbar,
  ServiceCategoryList,
  ServiceListProducts,
} from "../components";
import { useLocation } from "react-router-dom";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { Category } from "../components/ServiceCategoryList";
import { useEffect, useState } from "react";

const Services = () => {
  const data = useLocation();
  const [selectedCategory, setSelectedCategory] = useState({} as Category);
  const onSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (data.state !== null) {
      onSelectCategory(data.state.category);
    }
  }, []);
  return (
    <Flex gap="2rem" direction="column">
      <Header />
      <Navbar />
      <Flex
        paddingX={{ base: "1rem", md: "2rem", lg: "6rem", "2xl": "8rem" }}
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        gap="1rem"
      >
        <Box maxW="250px">
          <ServiceCategoryList
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        </Box>
        <Box maxH="350px">
          <Divider orientation="vertical" />
        </Box>
        <Box flex="1">
          <ServiceListProducts category={selectedCategory} />
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Services;
