import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/system";
import AddCartShow from "./AddCartShow";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrizeAndDec from "./PrizeAndDec";

const SubMenuCard = (props) => {
  const state = useSelector((state) => state.cart);
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  const [menu, setMenu] = useState();
  useEffect(() => {
    const newMenu = props.menu.filter((subMenu) => subMenu.subMenu === id);
    setMenu(newMenu[0]);
  }, [props]);

  return (
    <>
      <Box
        sx={{ width: "100%",height:"auto", overflow: "auto" }}
        justifyContent="space-around"
      >
        {/* <Box>
              <Back />
            </Box> */}
        <Box sx={{ width: "100%" }}>
          <h1>{menu?.subMenu}</h1>
        </Box>
        <Box>
          {selectedProduct && (
            <PrizeAndDec
              item={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          )}
        </Box>
        <Stack sx={{ width: "100%", height: "100%" }}>
          {menu?.items.map((item, index) => {
            return (
              <Box key={index}>
              <ItemCard product={item} setprodect={setSelectedProduct}/>;
              </Box>
            )
          })}
        </Stack>
        {state.length > 0 && <AddCartShow  />}
      </Box>
    </>
  );
};

export default SubMenuCard;
