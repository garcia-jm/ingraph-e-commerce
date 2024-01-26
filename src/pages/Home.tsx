import { Flex } from "@chakra-ui/react";
import {
  Categories,
  FAQ,
  Features,
  Footer,
  Header,
  Hero,
  Jumbotron,
  Navbar,
} from "../components";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <Flex direction="column" gap={{ base: "2rem", "2xl": "4rem" }}>
      <Header />
      <Navbar />
      <Hero />
      <Features />
      <Jumbotron />
      <Categories />
      <CTA />
      <FAQ />
      <Footer />
    </Flex>
  );
};

export default Home;
