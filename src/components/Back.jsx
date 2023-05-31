import { IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import {useNavigate} from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
export default function Back() {
    const history=useNavigate();

  return (
    <>
      <Box >
        <Stack height="20px" direction="row">
          <Box textAlign="start" >
            <IconButton onClick={()=>history(-1)}>
              <IoIosArrowBack color="black" fontSize={40}/>
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
