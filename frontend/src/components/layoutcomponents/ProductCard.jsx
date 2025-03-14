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
} from "@mui/material";
import React, { useEffect } from "react";
import ParagraphText from "../uicomponents/ParagraphText";
import GreenBgButton from "../uicomponents/GreenBgButton";
import { useAppContext } from "../../context/AppContext";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ProductCard = () => {
  const { menu, setMenu, addTocart, cart, removeFromCart, token } =
    useAppContext();
  console.log("cart", cart);

  const isInCart = (id) => cart.some((cartItem) => cartItem.id === id);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setMenu(data));
  }, [setMenu]);

  return (
    <Grid
      container
      spacing={3}
      sx={{ marginTop: "20px", marginBottom: "20px" }}
    >
      {" "}
      {/* Use Grid container to define layout */}
      {menu.map((value) => (
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
                    $ {value.price}
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
            <CardActions>
              {isInCart(value.id) ? (
                <GreenBgButton
                  background="red"
                  onClick={() => {
                    removeFromCart(value);
                  }}
                >
                  Remove From Cart
                </GreenBgButton>
              ) : (
                <GreenBgButton
                  background="#5e885a"
                  onClick={() => {
                    if (token) {
                      addToCart(value);
                    } else {
                      alert("Login First");
                    }
                  }}
                >
                  Add To Cart
                </GreenBgButton>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCard;
