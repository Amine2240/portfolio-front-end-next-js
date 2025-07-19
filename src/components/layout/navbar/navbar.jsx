"use client";
// import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Links from "@/components/ui/navbar/Links";
import { usePathname } from "next/navigation";
// import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navbar = () => {
  // const navigateTo = useNavigate();
  const [scrollboolen, setscrollboolen] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      setscrollboolen(false);
    } else {
      setscrollboolen(true);
    }
  };

  window.addEventListener("wheel", handleWheel);
  
  // Cleanup
  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, []); 

  return (
    <nav
      className={` navbar bg-transparent absolute transition-all duration-300  w-full  sm:flex hidden place-content-between h-[10vh] items-center z-[2] `}
    >
      <Link href="/">
        <p
          onClick={() => {
            // navigateTo("/");
            // setindex(-1);
          }}
          className=" capitalize  font-medium text-2xl mylabel  cursor-pointer ml-5"
          style={{
            color:
              pathname == `/work` || pathname == "/about" ? "black" : "white",
            transition: "all ease 0.3s",
            transitionDelay: "0.3s",
          }}
        >
          amine dev
        </p>
      </Link>

      <Links pathname={pathname} />
    </nav>
  );
};

export default Navbar;
