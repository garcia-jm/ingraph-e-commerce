import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Category } from "../components/ServiceCategoryList";

interface Props {
  category: Category | null;
}

const ServiceListProducts = ({ category }: Props) => {
  if (
    category === null ||
    category.serviceList === null ||
    category.serviceList === undefined
  ) {
    return null;
  }

  return (
    <Flex flexWrap="wrap" gap="1.5rem">
      {category.serviceList.map((item) => (
        <Card maxW="sm" height="100%" key={item.name}>
          <CardBody>
            <Image src={item.imgUrl} alt={item.name} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.name}</Heading>
              <Text>{item.desc}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${item.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                See now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
};

export default ServiceListProducts;
