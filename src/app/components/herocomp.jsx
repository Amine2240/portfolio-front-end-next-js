"use client"
import "./herocomp.css";
// import try2 from "../assets/try22.png";
import amine1 from "../assets/amine01compressed.webp";
// import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import { hoverfunction } from "./hoverfunction";
// import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
import Image from "next/image";
const Herocomp = () => {
  // const mytext = new SplitType(".iam");
  // console.log('my text : ',mytext);
  // gsap.to(".char", {
  //   y: 0,
  //   stagger: 0.05,
  //   delay: 0.2,
  //   duration: 0.3,
  // });

  // const imgref = useRef(null);
  // const navigateTo = useNavigate();

  const tl = gsap.timeline();
  const heroref = useRef(null);
  const contactbutton = useRef(null);
  const [time, settime] = useState("");
  useEffect(() => {
    gsap.fromTo(
      heroref.current,
      { height: window.innerWidth >= 768 ? "105vh" : "80vh" },
      {
        height: window.innerWidth >= 768 ? "90vh" : "70vh",
        scrollTrigger: {
          trigger: heroref.current,
          start: "center 40%",
          end: "bottom 5%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    tl.to(
      contactbutton.current,

      {
        y: -100,
        scrollTrigger: {
          trigger: contactbutton.current,
          start: "-60% 5%",
          end: "bottom top",
          scrub: 3,
        },
      }
    );
  }, []);

  const gettime = () => {
    const now = new Date();
    const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    const minutes =
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    settime(hours + ":" + minutes + `${hours < 12 ? "AM" : "PM"}`);
    setTimeout(() => {
      gettime();
    }, 1000);
  };
  useEffect(() => {
    gettime();
  }, []);

  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  useEffect(() => {
    hoverfunction(contactbutton, setxPos, setyPos);
  }, [xPos, yPos]);

  useEffect(() => {
    gsap.to(".name", {
      y: -100,
      scrollTrigger: {
        scrub: true,
      },
    });
    gsap.to(".skill", {
      y: -100,
      scrollTrigger: {
        scrub: true,
      },
    });

    gsap.to(".time", {
      y: -150,
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);
  return (
    <div className=" herobg overflow-hidden relative" ref={heroref}>
      <div className="">
        <Image
          src={amine1}
          style={{}}
          className={` z-[0] absolute left-1/2 translate-x-[-52%] bottom-0 xl:top-10  image xl:w-[490px] md:w-[380px] w-[400px] transition-all max-w-full h-auto`}
          alt="Amine picture"
          // loading="lazy"
          // width="300"
          // height="200"
        />

        <div className=" relative flex pb-[40px]  flex-col items-center place-content-end h-[90vh]  ">
          <a href="mailto:kadoumamine@gmail.com">
            <button
              style={{
                transform: `translate(${xPos}px, ${yPos}px)`,
              }}
              ref={contactbutton}
              className=" absolute xl:top-[150px] top-[125px] right-5 sm:left-[60%] h-[150px] w-[150px]  xl:h-[180px] xl:w-[180px] md:h-[160px] md:w-[160px] bg-[#141517] text-white rounded-full text-lg letswork "
            >
              <p className=" z-30">Lets Work</p>
            </button>
          </a>
          <p className="absolute capitalize top-[190px] left-4 xl:left-[400px] md:left-[150px] text-xl sm:text-2xl z-10 time text-white">
            local time <br />
            {time}
            <span className=" tracking-tighter"> GMT+1</span>{" "}
          </p>
          <p className="capitalize font-semibold xl:text-[7em] md:text-[5em] sm:text-[4em] text-[40px] z-10 name">
            {" "}
            AMINE KADOUM
          </p>
          <p className=" text-white  font-semibold xl:text-[6em] md:text-[4em] z-10 skill tracking-tighter text-[30px] sm:w-fit mx-auto sm:mb-[-40px] mb-36">
            FULL-STACK DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herocomp;
