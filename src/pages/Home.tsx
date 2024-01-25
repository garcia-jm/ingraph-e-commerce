import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Jumbotron from "../components/Jumbotron";
import Categories from "../components/Categories";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Flex } from "@chakra-ui/react";
const carouselItems = [
  "https://placekitten.com/600/300",
  "https://placekitten.com/601/300",
  "https://placekitten.com/602/300",
];
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
      <CTA imgUrl={carouselItems} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
