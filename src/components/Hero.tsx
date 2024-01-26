import { Grid, GridItem } from "@chakra-ui/react";
import img from "../assets/subitem.jpg";
import HeroSubItem from "./HeroSubItem";
import HeroMainItem from "./HeroMainItem";

const Hero = () => {
  return (
    <Grid
      zIndex="0"
      templateRows={{ base: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
      templateColumns="repeat(12, 1fr)"
      minHeight="70vh"
      gap="1px"
    >
      <GridItem rowSpan={2} colSpan={{ base: 12, md: 8 }}>
        <HeroMainItem />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 12, md: 4 }}>
        <HeroSubItem img={img} title="Personalized posters" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={{ base: 12, md: 4 }}>
        <HeroSubItem img={img} title="Customized decals" />
      </GridItem>
    </Grid>
  );
};

export default Hero;
