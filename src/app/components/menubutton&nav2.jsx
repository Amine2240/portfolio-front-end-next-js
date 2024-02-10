"use client";
import { useState, useEffect, useRef } from "react";
import { hoverfunction } from "./hoverfunction";
import Navbar2 from "./navbar2";
// import { useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";

const MenubuttonNav2 = () => {
  const [navbar2bool, setnavbar2bool] = useState(false);
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  const pathname = usePathname();
  const menubutton = useRef();
  useEffect(() => {
    hoverfunction(menubutton, setxPos, setyPos);
  }, []);
  const [scrollyvalue, setscrollyvalue] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrollyvalue(window.scrollY);
    });
  }, [scrollyvalue]);
  return (
    <div>
      <div
        onClick={() => {
          setnavbar2bool(!navbar2bool);
        }}
        ref={menubutton}
        style={{
          transform: `translate(${xPos}px, ${yPos}px) ${
            !navbar2bool && scrollyvalue < 20 && typeof window !== "undefined" && window.innerWidth > 568
              ? "scale(0)"
              : "scale(1)"
          }`,
          // transform: !navbar2bool && scrollyvalue < 20 ? "scale-0" : "scale-100",
          // top : 'calc(100% -20px)'
        }}
        className={` cursor-pointer  transition-all flex items-center place-content-center gap-[2px] bg-[#1C1D20] border border-gray-700 flex-col z-30 h-[70px] shadow-xl w-[70px] rounded-full text-2xl fixed sm:top-10 sm:right-10 top-8 right-10`}
      >
        <span
          className={`${
            !navbar2bool
              ? ""
              : "rotate-[315deg] translate-x-[.5px] translate-y-[4px]"
          } h-[2px]  w-[25px] bg-white transition-all duration-[1s]`}
        ></span>
        <span
          className={`${
            !navbar2bool ? "" : "rotate-[405deg] "
          } h-[2px] w-[25px] bg-white transition-all duration-[1s]`}
        ></span>
      </div>

      <Navbar2 navbar2bool={navbar2bool} setnavbar2bool={setnavbar2bool} />
    </div>
  );
};

export default MenubuttonNav2;
