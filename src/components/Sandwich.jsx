import React,{useState,useEffect} from "react";
import Imag2 from "../Assets/images/bargar1.jpg";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import VegIcon from "./VegIcon";
import AddCartShow from "./AddCartShow";
import SelecteSize from "./SelectedSize";
import { FaStar } from "react-icons/fa";

export default function Sandwich() {
  const images=Imag2;

  const state = useSelector((state) => state.cart);
  const [selectedProduct, setSelectedProduct] = useState();
  console.log(selectedProduct);

  const [menu, setMenu] = useState([]);
  const api = "http://localhost:8000/menu/sandwich";
  const getMenuItem = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMenu(data);
    console.log(data);
  };
  useEffect(() => {
    getMenuItem(api);
  }, [])

  return (
    <>
      <Box
        sx={{ width: "100%", height: "900px", overflow: "auto" }}
        justifyContent="space-around"
      >
      {/* <Box>
        <Back/>
      </Box> */}
        <Box sx={{ width: "100%" }}>
          <h1>Sandwich</h1>
        </Box>
        <Box>
        {selectedProduct && (
            <SelecteSize
              item={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          )
        }
        </Box>
        <Stack sx={{ width: "100%", height: "100%" }}>
          {menu[1]?.items.map((item, index) => {
            return (
              <Grid
                m={3}
                height="130px"
                style={{ border: "1px solid grey", borderRadius: "15px" }}
              >
                <Box height="90px" >
                  <Stack
                    key={index}
                    direction="row"
                    sx={{
                      width: "100%",
                      height:"90px"
                    }}
                  >
                    <Stack ml={1} justifyContent="start">
                      <img
                        alt="pizza"
                        src={images}
                        width={90}
                        height={80}
                      />
                    </Stack>
                    <Stack
                      sx={{
                        width: "50%",
                        height: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      pl={1}
                    >
                      <Typography
                        sx={{ textAlign: "start" }}
                        variant="p"
                        textOverflow="clip"
                      >
                        <b>{item.name}</b>
                      </Typography>

                      <Stack direction="row">
                      <Box mt={0.5}>
                      <VegIcon mt/>
                      </Box>
                      <Box>
                      <Typography
                          pl="5px"
                          sx={{ textAlign: "start" }}
                          variant="p"
                          textOverflow="clip"
                        >
                          Price:{item.price}
                        </Typography>
                      </Box>
                      </Stack>
                      <Box textAlign="start">
                        <Typography
                          variant="p"
                          color="#868584"
                          overflow="hidden"
                        >
                          {item.description.toString()}
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack
                      mr={1.5}
                      ml={1}
                      sx={{ width: "20%", height: "100%" }}
                      pt={3}
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "#d6c10f",
                          borderColor: "#d6c10f",
                          borderRadius: "15px",
                        }}
                        onClick={() =>
                          setSelectedProduct({ ...item })
                        }
                      >
                        Add
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
                <Box width="100%" height="30px">
                  <Stack  direction="row" color="#d6c10f">
                    <Box  textAlign="left" ml={2} width="50%">
                      <Typography textAlign="left" variant="p"><FaStar />  {item.rating}</Typography>
                    </Box>
                    <Box width="50%" textAlign="end" mr={2} >
                      <Typography textAlign="right" variant="p">142 Reviews</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Stack>
        {
          state.length>0 && <AddCartShow />
        }
      </Box>
    </>
  );
}
