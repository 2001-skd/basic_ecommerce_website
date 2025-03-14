import React from "react";
import Layout from "../components/layoutcomponents/Layout";
import ProductCard from "../components/layoutcomponents/ProductCard";
import Heading from "../components/uicomponents/Heading";
import { Box } from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box className="menu_page">
        <Heading>🛒 Purchase Now</Heading>
        <ProductCard />
      </Box>
    </Layout>
  );
};

export default Menu;
