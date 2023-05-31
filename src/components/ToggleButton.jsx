import { Button, ButtonGroup, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { addCard, decCart, incCart, removeCart } from "../Stor/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import SelectionError from "./SelectionError";

export default function ToggleButton({ item }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const dispatch = useDispatch();

  const state = useSelector((state) => state.cart);

  let filterProdect = state.filter(
    (elem) =>
      item.name === elem.name &&
      item.price === elem.price &&
      JSON.stringify(item.description) === JSON.stringify(elem.description)
  );

  console.log(state, filterProdect);
  useEffect(() => {
    filterProdect.length > 0 ? setToggleMenu(true) : setToggleMenu(false);
    if (filterProdect[0]?.qty === 0) {
      console.log("remove cart called");
      dispatch(removeCart(filterProdect[0]));
    }
  }, [item, state]);

  const increment = () => {
    dispatch(incCart(filterProdect[0]));
  };

  const decrement = () => {
    dispatch(decCart(filterProdect[0]));
  };

  const selectedProduct = () => {
    if (item.description.length === 0) {
      return null;
    } else {
      dispatch(addCard(item));
    }
  };
  return (
    <>
      <Box>
        <Stack>
          {toggleMenu ? (
            <Box>
              <ButtonGroup
                sx={{
                  border: "1px solid #d6c10f",
                  borderRadius: "25px",
                }}
              >
                <IconButton onClick={decrement} >
                  <AiFillMinusCircle
                  color="#d6c10f"
                    fontSize={20}
                    className=" hover:text-gray-300"
                  />
                </IconButton>
                <Typography variant="p">{filterProdect[0]?.qty}</Typography>
                <IconButton onClick={increment}>
                  <AiFillPlusCircle
                  color="#d6c10f"
                    fontSize={20}
                    className=" hover:text-gray-300"
                  />
                </IconButton>
              </ButtonGroup>
            </Box>
          ) : (
            <Box>
              <Button
                sx={{
                  border: "1px solid #d6c10f",
                  color: "#d6c10f",
                  borderRadius: "15%",
                }}
                onClick={selectedProduct}
              >
                Add
              </Button>
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
}
