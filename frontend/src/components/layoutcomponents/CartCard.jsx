import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Grid2,
  Chip,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ParagraphText from "../uicomponents/ParagraphText";
import GreenBgButton from "../uicomponents/GreenBgButton";
import { useAppContext } from "../../context/AppContext";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NotFound from "./NotFound";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const CartCard = () => {
  const { addTocart, cart, removeFromCart, addQuantity, decreaseQuantity } =
    useAppContext();
  console.log("cart", cart);

  return (
    <Grid
      container
      spacing={3}
      sx={{ marginTop: "20px", marginBottom: "20px" }}
    >
      {" "}
      {/* Use Grid container to define layout */}
      {cart.length === 0 ? (
        <NotFound color="white" width="100%">
          No Items In The Cart
        </NotFound>
      ) : (
        cart.map((value) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={value.id}>
            {" "}
            {/* Control grid size per screen width */}
            <Card sx={{ background: "whitesmoke", height: { md: "400px" } }}>
              <CardActionArea>
                <Box>
                  <CardMedia
                    component="img"
                    height="140"
                    image={value.image}
                    alt={value.title}
                    sx={{ position: "relative" }}
                  />
                  <Chip
                    size="small"
                    label={value.category}
                    sx={{
                      position: "absolute",
                      right: "0",
                      top: "0",
                      background: "black",
                      color: "white",
                    }}
                  />
                </Box>
                <CardContent>
                  <ParagraphText fontWeight="bold" color="#5e885a">
                    {value.title}
                  </ParagraphText>

                  <ParagraphText>
                    {value.description.length > 50
                      ? value.description.substring(0, 50) + "..."
                      : value.description}
                  </ParagraphText>
                  <br />

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <ParagraphText fontWeight="bold">
                      {" "}
                      $ {value.price} * {value.quantity}
                    </ParagraphText>
                    <Chip
                      icon={<StarBorderIcon />}
                      label={`${value.rating.rate} Rating`}
                      sx={{
                        background: "#ffd700",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <GreenBgButton
                    background="green"
                    onClick={
                      value.quantity <= value.rating.count
                        ? () => addQuantity(value.id)
                        : ""
                    }
                  >
                    <AddBoxIcon />
                  </GreenBgButton>
                  <ParagraphText fontWeight="bold">
                    {value.quantity}
                  </ParagraphText>
                  <GreenBgButton
                    background="red"
                    onClick={
                      value.quantity === 1
                        ? ""
                        : () => decreaseQuantity(value.id)
                    }
                  >
                    <IndeterminateCheckBoxIcon />
                  </GreenBgButton>
                </Box>
                <GreenBgButton
                  background="red"
                  onClick={() => {
                    removeFromCart(value);
                  }}
                >
                  <DeleteForeverIcon />
                </GreenBgButton>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CartCard;
