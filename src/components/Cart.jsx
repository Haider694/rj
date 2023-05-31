import React, { useEffect, useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";
import { TbCurrencyRupee } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import {
  incCart,
  decCart,
  pTotal,
  clearCart,
  removeCart,
} from "../Stor/cartSlice";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Back from "./Back";
import VegIcon from "./VegIcon";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  const [items, setItems] = useState();
  useEffect(() => {

  }, [state])
  

  const decrement = (product) => {
    if(state.totalprice===0){
      dispatch(removeCart(state))
     }
     else{
      dispatch(decCart(product));
     }
    
  };
  const increment = (product) => {
    dispatch(incCart(product));
  };
  const calculateTotal = () => {
    let total = 0;
    state.map((item) => (total += Number (item?.totalprice)));
    console.log(total)
    return total;
    
  };
  const amountToPay = () => {
    let total = 0;
    state.map((item) => (total += Number(item?.totalprice)));
    total += 30;
    return total;
  };
  console.log(items);
  

  const Cartitem = () => {
    return (
      <>
        <Stack width="100%" bgcolor="#faf4f4">
          <Box width="100%" bgcolor="white">
            <Stack direction="row">
              <Box>
                <Back />
              </Box>
              <Box m={1}>
                <Typography variant="h5">Conform Order</Typography>
              </Box>
            </Stack>
          </Box>
          <Box width="100%" pt={2} pb={2} textAlign="start" ml={1}>
            <Typography variant="h5">Your's Order</Typography>
          </Box>
          <Box width="100%" bgcolor="white">
            {state.map((product, index) => {
              return (
                <Stack
                  key={index}
                  width="100%"
                  direction="row"
                  textAlign="start"
                  pt={1}
                >
                  <Box width={1 / 2}>
                    <Stack direction="row" gap={2} pb={3}>
                      <Box textAlign={1} ml={1} mt={1}>
                        <VegIcon />
                      </Box>
                      <Box>
                        <b>
                          <Typography variant="p">{product?.name}</Typography>
                        </b>
                      </Box>
                    </Stack>
                  </Box>
                  <Box width={1 / 2}>
                    <Stack direction="row" gap={2} mr={1} textAlign="end">
                      <Box width={1}>
                        <ButtonGroup
                          sx={{
                            border: "1px solid #d6c10f",
                            borderRadius: "25px",
                          }}
                        >
                          <IconButton onClick={()=>decrement(product)}>
                            <AiFillMinusCircle
                              fontSize={20}
                              color="#d6c10f"
                              className=" hover:text-gray-300"
                            />
                          </IconButton>
                          <Typography pt={0.5} variant="p">
                            {product?.qty}
                          </Typography>
                          <IconButton onClick={()=>increment(product)}>
                            <AiFillPlusCircle
                              color="#d6c10f"
                              fontSize={20}
                              className=" hover:text-gray-300"
                            />
                          </IconButton>
                        </ButtonGroup>
                      </Box>
                      <Box textAlign="end" pt={0.5} mr={1}>
                        <Typography>{product?.totalprice}</Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              );
            })}
            <Stack></Stack>
          </Box>
          <Box width="100%" mt={1} bgcolor="white">
            <Stack direction="row">
              <Box width="600px">
                <Stack direction="row">
                  <Box>
                    <IconButton>
                      <BsFillTagFill color="#d6c10f" />
                    </IconButton>
                  </Box>
                  <Box>
                    <TextField
                      sx={{ border: "none" }}
                      size="small"
                      border="none"
                      id="outlined-textarea"
                      placeholder="Enter Your Promo Code"
                    />
                  </Box>
                </Stack>
              </Box>
              <Box width={1 / 2} pt={0.5}>
                <Typography variant="h6" color="#d6c10f">
                  <b>APPLY</b>
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box mt={1} bgcolor="white">
            <Stack>
              <Box textAlign="start" pt={2} ml={1}>
                <Typography variant="h6">Payment Info</Typography>
              </Box>
              <Box pt={2}>
                <Stack direction="row">
                  <Box width={1 / 2} textAlign="start" ml={1}>
                    <Typography variant="p">Sub Total</Typography>
                  </Box>
                  <Box width={1 / 2} textAlign="end" mr={1}>
                    <Stack width={1} direction="row" textAlign="start">
                      <Box width="300px" pt={0.5} textAlign="end">
                        <TbCurrencyRupee fontSize="18" />
                      </Box>
                      <Box textAlign="end">
                        <Typography variant="p">{calculateTotal()}</Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
              <Box pt={2}>
                <Stack direction="row">
                  <Box width={1 / 2} ml={1} textAlign="start">
                    <Typography variant="p">Service Fess</Typography>
                  </Box>
                  <Box width={1 / 2} textAlign="end" mr={1}>
                    <Stack width={1} direction="row" textAlign="start">
                      <Box width="300px" pt={0.5} textAlign="end">
                        <TbCurrencyRupee fontSize="18" />
                      </Box>
                      <Box textAlign="end">
                        <Typography variant="p">30</Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
              <Box pt={2}>
                <Stack direction="row" >
                  <Box width={1 / 2} ml={1} textAlign="start">
                    <Typography variant="p"><b>Amount To Pay</b></Typography>
                  </Box>
                  <Box width={1 / 2} textAlign="end" mr={1}>
                    <Stack width={1} direction="row" textAlign="start">
                      <Box width="300px" pt={0.5} textAlign="end">
                        <TbCurrencyRupee fontSize="18" />
                      </Box>
                      <Box textAlign="end">
                        <Typography variant="p">{amountToPay()}</Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box width="100%" height="70px" sx={{position:"fixed"}} bottom={0} bgcolor="#d6c10f">
            <Stack direction="row" gap={1} mt={2} justifyContent="center" textAlign="center">
              <Box ml={1} textAlign="start">
                <Typography variant="h6"> Pay</Typography>
              </Box>
              <Box textAlign="end" mr={1} mt={0.5}>
                <Stack direction="row" textAlign="start">
                  <Box pt={0.5} textAlign="end">
                    <TbCurrencyRupee fontSize="19" />
                  </Box>
                  <Box textAlign="end">
                    <Typography variant="">{amountToPay()}</Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </>
    );
  };
  // const Emptycart = () => {
  //   return (
  //     <div className="px-4 my-5 bg-light rounded-3">
  //       <div className="container py-4">
  //         <div className="row">
  //           <h1>Empty Cart</h1>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row py-5">{state.length !== 0 && <Cartitem />}</div>
      </div>
    </div>
  );
};
export default Cart;
