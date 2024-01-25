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
    <div>
      <Flex
        height={{ base: "auto", md: "100vh" }}
        gap="1.2rem"
        direction="column"
      >
        <Header />
        <Navbar />
        <Hero />
        <Features />
      </Flex>
      <Jumbotron />
      <Categories />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
