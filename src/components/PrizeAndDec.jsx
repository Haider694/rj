import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "./ToggleButton";

export default function PrizeAndDec(props) {
  const [itemForCart, setItemForCart] = useState({
    size: "",
    qty: null,
    description: [],
  });
  const [itemModified, setItemModified] = useState(false);

  const onSizeChange = (e) => {
    const { name } = e.target;
    setItemModified(true);
    setItemForCart({
      ...props.item,
      price:
        name === "small" ? props.item?.price?.small : props.item?.price?.medium,
      size: name,
      qty: 1,
      description: itemForCart.description,
      id: props.item?.id + name,
    });
  };

  const close = () => {
    props.setSelectedProduct();

    setItemForCart({ size: "" });
  };

  const onDescriptionchange = (e, index) => {
    const { name, checked } = e.target;
    setItemModified(true);
    if (!itemForCart.price) {
      if (checked) {
        setItemForCart({
          ...itemForCart,
          description: [...itemForCart.description, name],
          id: itemForCart.id + name,
        });
      } else {
        const l = itemForCart.description.filter((item) => item !== name);
        setItemForCart({
          ...itemForCart,
          description: l,
        });
      }
    } else {
      if (checked) {
        setItemForCart({
          ...itemForCart,
          description: [...itemForCart.description, name],
        });
      } else {
        console.log("uncheck");

        const l = itemForCart.description.filter((item) => item !== name);
        console.log(l);
        setItemForCart({ ...itemForCart, description: l });
      }
    }
  };

  console.log(props.item);
  return (
    <Stack
      position="absolute"
      bottom="0"
      sx={{
        width: "100%",
        height: "80%",
        bgcolor: "#ecebe7",
        borderRadius: "30px",
        zIndex: "1",
      }}
    >
      <Box mt={1} sx={{ textAlign: "end" }}>
        <IconButton aria-label="fingerprint" onClick={close}>
          <MdOutlineClear fontSize={20} className=" hover:text-gray-300" />
        </IconButton>
      </Box>
      <Stack>
        <Box>
          <Typography variant="h5">{props.item?.name}</Typography>
        </Box>
      </Stack>
      <Box textAlign="start">
        <Typography variant="h6">Selsect Size</Typography>
      </Box>
      <Grid p={1}>
        {typeof props.item.price === "string" ? (
          <Box>
            <Box></Box>
            <Box textAlign="start">
              <Typography
                pl="5px"
                sx={{ textAlign: "start" }}
                variant="h6"
                textOverflow="clip"
              >
                Price:{props.item.price}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box>
            {Object.keys(props.item.price).map((m) => {
              return (
                <Box key={m.id}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={itemForCart.size === { m }}
                          name={m}
                          onChange={onSizeChange}
                        />
                      }
                      label={m}
                    />
                  </FormGroup>
                </Box>
              );
            })}
          </Box>
        )}
      </Grid>
      <Grid>
        <Stack width="100%" p={1}>
          <Grid>
            {props.item.description && (
              <Stack width="100%" p={1}>
                <Box textAlign="start">
                  <Typography variant="h6">Select Any Items</Typography>
                </Box>
                <Box>
                  {props.item?.description?.map((m, index) => {
                    return (
                      <FormGroup key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name={m}
                              onChange={(e) => onDescriptionchange(e, index)}
                            />
                          }
                          label={m}
                        />
                      </FormGroup>
                    );
                  })}
                </Box>
              </Stack>
            )}
          </Grid>
        </Stack>
      </Grid>
      <Stack p={1}>
        <ToggleButton item={itemForCart} />
      </Stack>
    </Stack>
  );
}
