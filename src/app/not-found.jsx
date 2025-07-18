"use client";
import { useRef } from "react";
// import Transition from "../../../../transition";
import Minifooter from "@/components/layout/footer/minifooter";
import { useState, useEffect } from "react";
import { hoverfunction } from "@/utils/hoverfunction";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "@/components/layout/navbar/navbar";
import BackToHomeButton from "@/components/ui/shared/back-to-home-button";

gsap.registerPlugin(ScrollTrigger);
// eslint-disable-next-line react/prop-types
const Notfound = () => {
  const button = useRef();
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  useEffect(() => {
    hoverfunction(button, setxPos, setyPos);
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".buttonref",
      {
        x: -250,
      },
      {
        ease: "back.out(1)",
        delay: 0.35,
        duration: 0.7,
        x: 0,
      }
    );
  }, []);
  return (
    <>
      <Header />
      <div
        className=" bg-[#1C1D20]
      h-[100vh]  text-white sm:overflow-hidden pt-10"
      >
        <div className=" w-[80%] mx-auto h-[70vh] flex flex-col md:place-content-end place-content-around sm:mb-20 mb-10">
          <div className=" flex md:place-content-around items-center flex-wrap">
            <p className=" capitalize md:text-8xl text-6xl mb-16 md:mb-5">
              failed. <br /> Page not found!
            </p>
            <p className=" text-xl"></p>
          </div>
          <section className=" relative flex place-content-end">
            <Link href="/" className="z-10">
              <BackToHomeButton button={button} xPos={xPos} yPos={yPos} />
            </Link>
            <div className=" h-[1.5px] w-[94%] mx-auto bg-gray-600 my-5 absolute bottom-20 "></div>
          </section>
        </div>
        <Minifooter />
      </div>
    </>
  );
};

export default Notfound;
