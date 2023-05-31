import { IconButton, Typography } from "@mui/material";
import { Box, Stack, width } from "@mui/system";
import React from "react";
import { MdOutlineClear } from "react-icons/md";

export default function SelectionError() {


  return (
    <>
      <Box sx={{ width: "80%", height: "20%", position: "fixed", top: "0" }}>
        <Stack>
          <Box mt={1} sx={{ textAlign: "end" }}>
            <IconButton aria-label="fingerprint" >
              <MdOutlineClear fontSize={20} className=" hover:text-gray-300" />
            </IconButton>
          </Box>
          <Box>
            <Typography variant="h1">Fill the morm</Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
