import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  title: string;
  imgUrl: string;
}
const CategoryCard = ({ title, imgUrl }: Props) => {
  return (
    <Card
      width={{ base: "100%", md: "40%" }}
      cursor="pointer"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: "translateY(-10px)",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardBody padding={{ base: "0", md: "2" }}>
        <Box position="relative" width="100%" height="0" pb="80%">
          <Image
            draggable="false"
            position="absolute"
            width="100%"
            height="100%"
            src={imgUrl}
            alt={title}
            borderRadius="lg"
            objectFit="cover"
          />
        </Box>
      </CardBody>
      <Heading
        px="10px"
        as="h2"
        fontSize={{ base: "0.8em", lg: "1.2em", xl: "1.4em", "2xl": "2em" }}
        textAlign="center"
        my={{ base: "1rem", "2xl": "2rem" }}
      >
        {title}
      </Heading>
    </Card>
  );
};

export default CategoryCard;
