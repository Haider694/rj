import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartCheckFill, BsPersonCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Stack } from "@mui/system";
import { Badge } from "@mui/material";

export default function Navbar() {
  const state = useSelector((state) => state.cart);

  console.log(state);

  return (
    <>
      <Stack
        sx={{ width: "100%" }}
        mt={2}
        direction="row"
        justifyContent="space-around"
      >
        <NavLink to={`/`}>
          <AiFillHome
            fontSize={40}
            className="hover:text-gray-300 text-white"
          />
        </NavLink>
        <NavLink to={`/cart`}>

          <Badge badgeContent={state.length} color="secondary">
          <BsFillCartCheckFill
            fontSize={40}
          />
          </Badge>
        </NavLink>
        <NavLink to={`/About`}>
          <BsPersonCircle
            fontSize={40}
            className=" hover:text-gray-300 text-white"
          />
        </NavLink>
      </Stack>
    </>
  );
}
