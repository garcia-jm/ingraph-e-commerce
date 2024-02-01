import { Button, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import { data } from "../constants";

export interface Category {
  title: string;
  imgUrl: string;
  serviceList: {
    name: string;
    price: number;
    imgUrl: string;
    desc: string;
  }[];
}

interface Props {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category) => void;
}

const ServiceCategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  return (
    <Flex minW="100%" direction="column" gap="1.5rem">
      <Heading
        fontSize={{ base: "1.3em", md: "1.5em", xl: "2em", "2xl": "3em" }}
      >
        CATEGORIES
      </Heading>
      <List>
        {data.categories.map((category) => (
          <ListItem mb="0.5rem" key={category.title}>
            <Button
              fontWeight={
                selectedCategory?.title === category.title ? "bold" : "normal"
              }
              onClick={() => onSelectCategory(category)}
              variant="link"
            >
              {category.title}
            </Button>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default ServiceCategoryList;
