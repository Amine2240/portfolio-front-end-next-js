/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
import amine1 from "../assets/amine01compressed.webp";
import { hoverfunction } from "./hoverfunction";
import Minifooter from "./minifooter";
import Image from "next/image";
// import { motion } from "framer-motion";
const Footer = () => {
  // const navigateTo = useNavigate();
  const arrowref = useRef();
  const footerref = useRef();
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

  // useEffect(() => {
  //   gsap.fromTo(
  //     footerref.current,
  //     {
  //       scaleY: "0.8",
  //     },
  //     {
  //       scaleY: "1",
  //       scrollTrigger: {
  //         trigger: footerref.current,
  //         markers: true,
  //         start: " 70% top",
  //         end: " 60%",
  //         scrub: 2,
  //       },
  //     }
  //   );
  // }, []);
  const emailbutton = useRef();
  const contactbutton = useRef();
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [xPos2, setxPos2] = useState(0);
  const [yPos2, setyPos2] = useState(0);
  useEffect(() => {
    hoverfunction(emailbutton, setxPos, setyPos);
  }, [xPos, yPos]);

  useEffect(() => {
    hoverfunction(contactbutton, setxPos2, setyPos2);
  }, [xPos2, yPos2]);

  return (
    <section
      className="bg-[#1C1D20] text-white  pt-16  relative "
      ref={footerref}
    >
      <div className=" h-[95vh] flex flex-col place-content-between">
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

        <div className="flex  place-content-center  flex-wrap h-[200px]">
          <a
            href="mailto:kadoumamine@gmail.com"
            className=" sm:w-[450px] w-[320px]"
            //w-[350px]
          >
            <button
              style={{
                transform: `translate(${xPos}px, ${yPos}px)`,
              }}
              ref={emailbutton}
              className=" refbutton border hover:bg-[#0d486c] mx-2 sm:h-[100px] h-[70px] w-full  capitalize text-xl font-semibold  rounded-full mb-3 sm:mb-0"
            >
              email me{" "}
            </button>
          </a>
          <button
            onClick={() => {
              // navigateTo("/contact");
            }}
            style={{
              transform: `translate(${xPos2}px, ${yPos2}px)`,
            }}
            ref={contactbutton}
            className=" refbutton border hover:bg-[#0d486c] mx-2 sm:h-[100px] h-[70px] w-[450px]    capitalize text-xl font-semibold rounded-full ml-5"
          >
            contact me
          </button>
        </div>
        <Minifooter />
      </div>
    </section>
  );
};

export default Footer;
