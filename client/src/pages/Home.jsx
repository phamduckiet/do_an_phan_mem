import Hero from "../components/hero/Hero";
import Card from "../components/hero/Card";

import Product from "../components/product/Product";

import Banner from "../components/banner/Banner";

import TopProduct from "../components/top/TopProduct";
import Testimonial from "../components/testimonial/Testimonial";

import Blog from "../components/blog/blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      {/* <Price /> */}
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
