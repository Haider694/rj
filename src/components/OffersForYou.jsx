import React from "react";
import { BiQrScan } from "react-icons/bi";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function OffersForYou() {
  return (
    <Box m={2}>
    <NavLink to="/">
    <Stack>
        <Box width="100%" height="35px">
          <Stack width="100%" height="15px" direction="row">
            <Box width="70%" height="10px">
              <Typography textAlign="start" variant="h6">
                <b>Offers for you</b>
              </Typography>
            </Box>
            <Box width="30%" height="10px" ml={2}>
              <Typography variant="h6" color="#f3d15b" textAlign="end">
                <b>See all</b>
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box width="100%" height="190px" mt={2}>
          <Stack width="100%" height="160px" direction="row" overflow="scroll" spacing={2}>
            <Grid bgcolor="#f5f3f3" width="100%" height="150px" flexDirection="row" >
              <Box
                width="300px"
                height="150px"
                sx={{ border: "1px solid lightgray", borderRadius: "15px" }}
              ></Box>
            </Grid>
            <Grid bgcolor="#f5f3f3" width="100%" height="150px" flexDirection="row" >
              <Box
                width="300px"
                height="150px"
                sx={{ border: "1px solid lightgray", borderRadius: "15px" }}
              ></Box>
            </Grid>
            <Grid bgcolor="#f5f3f3" width="100%" height="150px" flexDirection="row" >
              <Box
                width="300px"
                height="150px"
                sx={{ border: "1px solid lightgray", borderRadius: "15px" }}
              ></Box>
            </Grid>
          </Stack>
        </Box>
        <Box width="100%" height="20px">
          <Stack width="100%" height="20px" direction="row">
            <Box width="50%">
              <IconButton>
                <BiQrScan
                  fontSize={30}
                  color="#f3d15b"
                  className=" hover:text-gray-300 text-white"
                />
              </IconButton>
              <Typography variant="p">SCAN & CONNECT</Typography>
            </Box>
            <Box width="50%">
              <IconButton>
                <BiQrScan
                  fontSize={30}
                  color="#f3d15b"
                  className=" hover:text-gray-300 text-white"
                />
              </IconButton>
              <Typography variant="p">SCAN & CONNECT</Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </NavLink>

    </Box>
  );
}
