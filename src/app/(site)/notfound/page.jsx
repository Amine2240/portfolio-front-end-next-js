"use client"
import { useRef } from "react";
import Transition from "../../../../transition";
import Minifooter from "../../components/minifooter";
import { useState, useEffect } from "react";
import { hoverfunction } from "../../components/hoverfunction";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// eslint-disable-next-line react/prop-types
const Notfound = ({ navbar2bool }) => {
  const button = useRef();
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  useEffect(() => {
    hoverfunction(button, setxPos, setyPos);
  }, []);
  console.log("navbar2", navbar2bool);
  const navigateTo = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".buttonref",
      {
        x: -250,

      },
      {
        ease: "back.out(1)",
        delay: 0.35,
        duration : 0.7,
        x: 0,
      }
    );
  }, []);
  return (
    <div
      className={` bg-[#1C1D20] ${
        navbar2bool ? "h-[150vh]" : "h-[100vh]"
      }   text-white sm:overflow-hidden pt-10`}
    >
      <div className=" w-[80%] mx-auto h-[70vh] flex flex-col md:place-content-end place-content-around sm:mb-20 mb-10">
        <div className=" flex md:place-content-around items-center flex-wrap">
          <p className=" capitalize md:text-8xl text-6xl mb-16 md:mb-5">
            failed. <br /> Page not found!
          </p>
          <p className=" text-xl"></p>
        </div>
        <section className=" relative flex place-content-end">
          <button
            className="  sm:h-[200px] sm:w-[200px] h-[170px] w-[170px]  bg-red-500 rounded-full z-10 ml-10 text-xl mr-40 buttonref"
            ref={button}
            style={{
              transform: `translate(${xPos}px, ${yPos}px)`,
            }}
            onClick={() => {
              navigateTo("/");
            }}
          >
            Back to home
          </button>
          <div className=" h-[1.5px] w-[94%] mx-auto bg-gray-600 my-5 absolute bottom-20 "></div>
        </section>
      </div>
      <Minifooter />
    </div>
  );
};

export default Transition(Notfound);

