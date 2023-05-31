import { Box } from '@mui/system'
import React from 'react'

export default function VegIcon() {
  return (
    <>
    <Box
      sx={{ width: "14px", height: "14px", border: "1px solid green" }}
    >
      <Box
        sx={{
          width: "8px",
          height: "8px",
          margin: "2px",
          border: "1px solid green",
          borderRadius: "20px",
          bgcolor: "green",
        }}
      ></Box>
    </Box>
  </>
  )
}
