import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PizzaImage from "../Assets/images/menuImage/pizza.png";
import SandwichImage from "../Assets/images/menuImage/sandwich.png";
import ClubSandwichImage from "../Assets/images/menuImage/sandwich.png";
import BurgerImage from "../Assets/images/menuImage/burger.png";
import FrenchImage from "../Assets/images/menuImage/french-fries.png";
import { Box, Stack } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Search from "./Search";
import Location from "./Location";

const WhatsYouLikeToEatToday = () => {
  const [category1, setCategory1] = useState([]);
  const [selected, setSelected] = useState({});
  const api = "http://localhost:3000/";

  const menuImage = {
    Pizza: PizzaImage,
    Sandwich: SandwichImage,
    "Club Sandwich": ClubSandwichImage,
    Burger: BurgerImage,
    Fries: FrenchImage,
  };

  useEffect(() => {
    if (category1.length === 0) {
      getCategoty(api);
    }
  }, []);

  const getCategoty = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCategory1(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(category1)

  return (
    <Box m={1}>
      <Stack width="100%">
        <Box>
          <Stack direction="row">
            <Box width="50%" textAlign="start">
              <Stack direction="row">
                <Location />
                <Typography variant="p" pt={1}>
                  Vadodara
                </Typography>
              </Stack>
            </Box>
            <Box width="50%" textAlign="end">
              <Search />
            </Box>
          </Stack>
        </Box>
        <Box width="100%" mt={2}>
          <Stack width="100%" direction="row">
            <Box width="70%">
              <Typography variant="h6">
                <b>Whats you like to eat today?</b>
              </Typography>
            </Box>
            <Box width="30%">
              <Typography mr={2} textAlign="end" color="#f3d15b" variant="h6">
                <b>See all</b>
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{ border: "1px solid white", borderRadius: "10px" }}
          width="100%"
          overflow="scroll"
          mt={2}
        >
          {category1?.map((item, index) => {
            console.log(item)
            return (
              <NavLink
                id="menuLink"
                height="130px"
                style={{
                  textDecoration: "none",
                  color: "black",
                  border:
                    item._id === selected._id ? "3px solid yellow" : "none",
                  borderRadius: "10px",
                }}
                to={`/${item.subMenu}`}
                key={item._id}
                onClick={() => setSelected(item)}
              >
                <Grid
                  width="100%"
                  height="130px"
                  bgcolor="#f5f5f5"
                  sx={{
                    border: "3px solid lighgray",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    width="90px"
                    ml={2.5}
                    height="90px"
                    bgcolor="#eeeeee"
                    sx={{ border: "3px solid lighgray", borderRadius: "50%" }}
                  >
                    <img
                      style={{ width: "80px" }}
                      alt={item.subMenu}
                      src={menuImage[item.subMenu]}
                    ></img>
                  </Box>
                  <Box
                    justifyContent="center"
                    width="130px"
                    height="30px"
                  >
                    <Typography>{item.subMenu}</Typography>
                  </Box>
                </Grid>
              </NavLink>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};
export default WhatsYouLikeToEatToday;
