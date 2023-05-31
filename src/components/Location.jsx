import { IconButton } from "@mui/material";
import React from "react";
import { MdLocationPin } from "react-icons/md";

export default function Location() {
  return (
    <IconButton>
      <MdLocationPin color="#f3d15b" size={25}></MdLocationPin>
    </IconButton>
  );
}
