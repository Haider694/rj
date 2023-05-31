import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import Cart from "./Cart";

export default function AddCartShow() {
  const state = useSelector((state) => state.cart);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "10%",
          position: "absolute",
          bottom: "0",
          zIndex: "2",
          bgcolor: "#d6c10f",
        }}
      >
        {state.map((item, index) => {
          return (
            <Stack
              mt={3}
              direction="row"
              spacing={2}
              justifyContent="center"
              key={index}
            >
              <Box>
                <BsFillCartCheckFill fontSize={40} />
              </Box>
              <Box pt={2}>
                <Typography>{`${state.length} items | Rs ${item.totalprice}`}</Typography>
              </Box>
              <Box p={0} m={0}>
                <NavLink to="/cart">
                  <p className="text-lg">View Cart</p>
                </NavLink>
              </Box>
            </Stack>
          );
        })}
      </Box>
    </>
  );
}
