import React from "react";
import Layout from "../components/layoutcomponents/Layout";
import Heading from "../components/uicomponents/Heading";
import { Box } from "@mui/material";
import CartCard from "../components/layoutcomponents/CartCard";
import { useAppContext } from "../context/AppContext";

const CartPage = () => {
  const { netPrice } = useAppContext();
  return (
    <Layout>
      <Box className="menu_page">
        <Heading>🛒 Cart - Total Amount ${netPrice}</Heading>
        <CartCard />
      </Box>
    </Layout>
  );
};

export default CartPage;
