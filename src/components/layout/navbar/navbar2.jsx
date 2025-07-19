/* eslint-disable react/jsx-no-target-blank */
// import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect, useRef } from "react";
// import Transition from "../../transition";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Minifooter from "../footer/minifooter";
import Navbar2Links from "@/components/ui/navbar/navbar2-links"
// eslint-disable-next-line react/prop-types


const Navbar2 = ({ navbar2bool, setnavbar2bool }) => {
  // const navigateTo = useNavigate();
  const [scrollboolen, setscrollboolen] = useState(true);
  const navbar2 = useRef();
  const bgtmpref = useRef();

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


  useEffect(() => {
    gsap.fromTo(
      bgtmpref.current,
      {
        y: 500,
        opacity: 0.2,
        transition: "all ease .5s",
      },
      {
        y: 0,
        delay: 0.1,
        // duration: 0.9,
        opacity: 0.4,
        // ease: "power4.out(1)",
        scrollTrigger: {
          // trigger: bgtmpref.current,
          scrub: 2,
        },
      }
    );
  }, [navbar2bool]);

  return (
    <>
      <nav
        ref={navbar2}
        className={` navbar2 ${
          navbar2bool ? " navtrue" : " navfalse"
        }   transition-all duration-500 bg-gradient-to-tr from-[#0a0a0b] to-[#272a30] shadow-2xl shadow-white w-full fixed top-0 left-0  text-white  flex flex-col  place-content-end  items-center h-[100vh] z-20`}
      >
        <section
          className="  h-[100vh] w-[650px]  sm:w-[95vw] absolute rounded-t-full z-[-2] top-[48px] sm:top-[400px] sm:left-[750px] left-[250px] -translate-x-1/2 -translate-y-1/2 bgtmp"
          ref={bgtmpref}
        ></section>
        <Navbar2Links setnavbar2bool={setnavbar2bool} navbar2bool={navbar2bool}/>
        <Minifooter />
      </nav>
    </>
  );
};

export default Navbar2;
