"use client";
import { useState } from "react";
import Navbar2 from "./navbar2";
import MenuButton from "@/components/layout/button/menu-button";
// import { useLocation } from "react-router-dom";

const MenubuttonNav2 = () => {
  const [navbar2bool, setnavbar2bool] = useState(false);

  return (
    <div>
      <MenuButton setnavbar2bool={setnavbar2bool} navbar2bool={navbar2bool} />
      <Navbar2 navbar2bool={navbar2bool} setnavbar2bool={setnavbar2bool} />
    </div>
  );
};

export default MenubuttonNav2;
