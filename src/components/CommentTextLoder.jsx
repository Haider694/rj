import { Box, Typography } from "@mui/material";
import React from "react";

export default function CommentTextLoder(props) {
  return (
    <Box width="100%">
      {props.mess.map((m,index) => {
        return(
            <Box width="auto" mt={1} height="auto" key={index} bgcolor="#eeeeee" p={2} borderRadius={10} textAlign="start">
                <Typography variant="p">{`UserName: ${m}`}</Typography>
            </Box>
        )
      })}
    </Box>
  );
}
