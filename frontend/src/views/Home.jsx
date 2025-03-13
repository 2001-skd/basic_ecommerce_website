import React from "react";
import Layout from "../components/layoutcomponents/Layout";
import HeroBanner from "../components/HomePageComponent/HeroBanner";
import AboutUs from "../components/HomePageComponent/AboutUs";

const Home = () => {
  return (
    <Layout>
      <HeroBanner />
      <AboutUs />
    </Layout>
  );
};

export default Home;
