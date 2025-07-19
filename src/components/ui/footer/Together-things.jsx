import React from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import amine1 from "@/assets/amine01compressed.webp";

const TogetherThings = () => {
  const arrowref = useRef();

  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.to(arrowref.current, {
        rotate: 60,
        scrollTrigger: {
          trigger: arrowref.current,
          scrub: 4,
          // markers: true,
        },
      });
    }
  }, []);
  return (
    <>
      <div className=" h-32 w-32 mx-auto bg-[#335e79] rounded-full overflow-hidden refimg">
        <Image
          src={amine1}
          alt=""
          className=" translate-y-1 scale-110 object-cover "
        />
      </div>
      <p className=" text-3xl md:text-6xl w-[50vw] text-center font-medium mx-auto uppercase reftext">
        Together <br /> we will achieve <br />
        great things
      </p>
      <svg
        ref={arrowref}
        className=" absolute left-10 top-[80px] sm:left-[8vw] sm:top-32 sm:w-20 w-16 "
        width="73"
        height="77"
        viewBox="0 0 73 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70 38L2 38"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M71 38L31 1.99999"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M71 38L31 75"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default TogetherThings;
