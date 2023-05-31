import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  Grid,
  Typography,
  TextField,
  IconButton,
  FormControl,
} from "@mui/material";
import Imag2 from "../Assets/images/bargar1.jpg";
import { AiFillLike, AiFillDislike, AiFillStar } from "react-icons/ai";
import VegIcon from "./VegIcon";
import { useForm } from "react-hook-form";
import CommentForm from "./Comments";

const ItemCard = ({ product, setprodect }) => {
  const [toggle, setToggle] = useState(false);
  const [comment, setComment] = useState([]);
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Box
        width="auto"
        bgcolor="#fafafa"
        m={2}
        p={1}
        mb={2}
        sx={{ border: "3px solid white", borderRadius: "15px" }}
      >
        <Grid width="auto">
          <Stack position="relative" width="100%">
            <Box width="auto" height="auto">
              <img alt="pizza" src={Imag2} width="100%" height="150px" />
            </Box>
            <Box
              width="100%"
              height="150px"
              sx={{ opacity: "0.1" }}
              position="absolute"
              top="0px"
              bgcolor="#212121"
            ></Box>
            <Box width="100%" height="150px" position="absolute" top="0px">
              <Box width="auto" height="110px">
                <Typography variant="h6" color="white">
                  <b>{product.name}</b>
                </Typography>
              </Box>
              <Box p={1}>
                <Stack direction="row">
                  <Grid width={1 / 2}>
                    <Stack direction="row">
                      <Box>
                        <AiFillLike
                          color="#fdd835"
                          size={30}
                          onClick={() => setToggle(true)}
                        />
                      </Box>
                      <Box>
                        <AiFillDislike color="#fdd835" size={30} />
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid
                    width={1 / 2}
                    container
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Stack direction="row">
                        <Box>
                          <AiFillStar color="#fdd835" size={30} />
                        </Box>
                        <Box>
                          <Typography variant="h6" color="#fdd835">
                            {product.rating}
                          </Typography>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid width="auto" height="70px">
          <Stack direction="row" width="auto" height="auto">
            <Box width={1 / 2} height="auto">
              <Stack
                sx={{
                  width: "auto",
                  height: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                pl={1}
              >
                <Stack direction="row" width="auto">
                  <Box mt={0.5}>
                    <VegIcon mt />
                  </Box>
                  <Box>
                    {typeof product.price === "string" ? (
                      <Typography
                        pl="5px"
                        sx={{ textAlign: "start" }}
                        variant="p"
                        textOverflow="clip"
                      >
                        Price:{product.price}
                      </Typography>
                    ) : (
                      <Typography
                        pl="5px"
                        sx={{ textAlign: "start" }}
                        variant="p"
                        textOverflow="clip"
                      >
                        Price:
                        {product.price.small
                          ? product.price.small
                          : product.price.Veggie}
                      </Typography>
                    )}
                  </Box>
                </Stack>
                <Grid
                  container
                  textAlign="start"
                  width="auto"
                  height="20px"
                  overflow="hidden"
                >
                  <Typography variant="p" color="#868584" overflow="hidden">
                    {product.description?.toString()}
                  </Typography>
                </Grid>
              </Stack>
            </Box>
            <Grid
              container
              justifyContent="flex-end"
              alignItems="center"
              width={1 / 2}
              height="auto"
            >
              <Grid item>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    backgroundColor: "#fdd835",
                    color: "white",
                    borderColor: "#d6c10f",
                    borderRadius: "15px",
                  }}
                  onClick={() => setprodect({ ...product })}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid width="100%">
          {/* <Box>
            <Typography variant="p">{comment}</Typography>
          </Box> */}
          <Box width="auto">
            {toggle && (
              <CommentForm/>
            )}
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default ItemCard;
