import html from "../assets/tools/icons8-html-480.png";
import css from "../assets/tools/icons8-css-480.png";
import js from "../assets/tools/icons8-js-480.png";
import react from "../assets/tools/icons8-react-native-480.png";
import tailwind from "../assets/tools/icons8-tailwindcss-480.png";
import node from "../assets/tools/icons8-node-js-480.png";
import mongodb from "../assets/tools/icons8-mongodb.png";
import figma from "../assets/tools/icons8-figma-480.png";
import flutter from "../assets/tools/icons8-flutter-480.png";
import dart from "../assets/tools/icons8-dart-480.png";
import express from "../assets/tools/icons8-express-js-480.png";
import github from "../assets/tools/icons8-github-480.png";
import git from "../assets/tools/icons8-git-480.png";
import { useRef } from "react";
// import { motion, useTransform, useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { hoverfunction } from "./hoverfunction";
import { useEffect, useState } from "react";
// import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css/bundle";

const Toolscomponent = () => {
  // const skillref0 = useRef();
  // const skillref1 = useRef();
  // const skillref2 = useRef();
  // const skillref3 = useRef();
  // const skillref4 = useRef();
  // const skillref5 = useRef();
  // const skillref6 = useRef();
  // const skillref7 = useRef();
  // const skillref8 = useRef();
  // const skillref9 = useRef();
  // const skillref10 = useRef();
  // const skillref11 = useRef();
  // const skillref12 = useRef();

  const rightbutton = useRef();
  const leftbutton = useRef();
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  const [xPosright, setxPosright] = useState(0);
  const [yPosright, setyPosright] = useState(0);

  const toolslist = [
    {
      id: 0,
      image: figma,
      name: "figma",
      // reference: skillref0,
    },

    {
      id: 1,
      image: html,
      name: "html",
      // reference: skillref1,
    },
    {
      id: 2,
      image: css,
      name: "css",
      // reference: skillref2,
    },
    {
      id: 3,
      image: js,
      name: "javascript",
      // reference: skillref3,
    },
    {
      id: 4,
      image: react,
      name: "reactjs",
      // reference: skillref4,
    },
    {
      id: 5,
      image: tailwind,
      name: "tailwlindcss",
      // reference: skillref5,
    },
    {
      id: 6,
      image: node,
      name: "nodejs",
      // reference: skillref6,
    },
    {
      id: 7,
      image: mongodb,
      name: "mongodb",
      // reference: skillref7,
    },
    {
      id: 8,
      image: express,
      name: "expressjs",
      // reference: skillref8,
    },
    {
      id: 9,
      image: flutter,
      name: "flutter",
      // reference: skillref9,
    },
    {
      id: 10,
      image: dart,
      name: "dart",
      // reference: skillref10,
    },

    {
      id: 11,
      image: github,
      name: "github",
      // reference: skillref11,
    },
    {
      id: 12,
      image: git,
      name: "git",
      // reference: skillref12,
    },
  ];

  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  // });

  // const x = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [
  //     "1%",
  //     window.innerWidth > 768
  //       ? "-72%"
  //       : window.innerWidth > 500
  //       ? "-90%"
  //       : window.innerWidth > 368
  //       ? "-95%"
  //       : "-98%",
  //   ]
  // );

  useEffect(() => {
    hoverfunction(leftbutton, setxPos, setyPos);
    hoverfunction(rightbutton, setxPosright, setyPosright);
  }, []);
  const swiper = useSwiper();

  const [slidesperview, setslidesperview] = useState(3);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 1300
        ? setslidesperview(3)
        : window.innerWidth <= 1300 && window.innerWidth > 700
        ? setslidesperview(2)
        : setslidesperview(1);
    });
  }, []);
  return (
    <div>
      <div
        className="   "
        //  ref={targetRef}
      >
        <p className=" text-9xl font-bold capitalize tracking-tighter ">
          tools i use :{" "}
        </p>
        {/* it was sticky in this div */}

        <Swiper
          slidesPerView={slidesperview}
          spaceBetween={0}
          // slidesPerGroup={3}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".nextslide",
            prevEl: ".previousslide",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // scrollbar={{ draggable: true }}
          // speed="500"
          // loop="true"
          // css-mode="true"
          // className=' w-full'
          className=" mt-20"
        >
          {toolslist.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className={`${item.id == 0 ? "xl:ml-5 md:ml-12 " : "0"}`}
              >
                <div
                  className="section bg-gradient-to-tr from-black to-[#272a30e6] xl:w-[435px] xl:h-[435px] lg:w-[450px] lg:h-[450px] md:w-[380px] md:h-[380px] w-[350px] h-[350px] mx-2 mb-5 flex flex-col items-center rounded-md place-content-center"
                  // ref={item.reference}
                  key={item.id}
                >
                  <div className=" w-[300px] h-[300px] ml-5">
                    <img src={item.image} alt="" className=" w-[90%]" />
                  </div>
                  <p className=" text-3xl text-white capitalize">{item.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className=" w-[200px] mx-auto flex place-content-between my-10">
          <button
            ref={leftbutton}
            style={{
              transform: `translate(${xPos}px, ${yPos}px)`,
            }}
            className=" previousslide w-20 h-20 border-2 border-black rounded-full"
            onClick={() => swiper?.slidePrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} className=" text-2xl" />
          </button>
          <button
            ref={rightbutton}
            style={{
              transform: `translate(${xPosright}px,${yPosright}px)`,
            }}
            className=" nextslide w-20 h-20 border-2 border-black rounded-full"
            onClick={() => swiper?.slideNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} className=" text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolscomponent;
