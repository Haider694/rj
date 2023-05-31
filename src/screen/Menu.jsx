import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OffersForYou from "../components/OffersForYou";
// import Pizza from "../components/Pizza";
import WhatsYouLikeToEatToday from "../components/WhatsYouLikeToEatToday";
import { Stack } from "@mui/material";
import Cart from "../components/Cart";
import SubMenuCard from "../components/SubMenuCard";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const api = "http://localhost:3000/menu";

  useEffect(() => {
    getMenuItem(api);
  }, []);

  const getMenuItem = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMenu(data);
    console.log(data);
  };

  return (
    <Router>
      <Stack>
        <WhatsYouLikeToEatToday />
      </Stack>
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" element={<OffersForYou />} />
        <Route path="/:id" element={<SubMenuCard menu={menu} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Stack
              sx={{
                height: "90px",
                width: "100%",
                bgcolor: "red",
                position: "fixed",
                bottom: "0",
                zIndex: "1",
              }}
              justifyContent="center"
            >
              <Navbar className="" />
            </Stack> */}
    </Router>
  );
};

export default Menu;
