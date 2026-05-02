"use client";
import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Minifooter from "../footer/minifooter";
import Navbar2Links from "@/components/ui/navbar/navbar2-links";

const Navbar2 = ({ navbar2bool, setnavbar2bool }) => {
  const bgtmpref = useRef(null);

  // ✅ Removed: scroll direction state was unused beyond its own setter
  // ✅ GSAP decorative blob — no dep on navbar2bool, registers once
  // useEffect(() => {
  //   const anim = gsap.fromTo(
  //     bgtmpref.current,
  //     { y: 500, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 0.4,
  //       scrollTrigger: { scrub: 2 },
  //     }
  //   );
  //   return () => anim.kill();
  // }, []);

  return (
    <nav
      className={`navbar2 ${
        navbar2bool ? "navtrue" : "navfalse"
      } transition-all duration-500 bg-gradient-to-tr from-[#0a0a0b] to-[#1e2128] shadow-2xl shadow-black/50 w-full fixed top-0 left-0 text-white flex flex-col place-content-end items-center h-[100vh] z-20`}
    >
      {/* ✅ Decorative blob: responsive positioning via percentages, not px */}
      <section
        ref={bgtmpref}
        className="h-[70vmax] w-[70vmax] absolute rounded-full z-[-2] top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 bgtmp pointer-events-none"
      />
      <Navbar2Links setnavbar2bool={setnavbar2bool} navbar2bool={navbar2bool} />
      <Minifooter />
    </nav>
  );
};

export default Navbar2;