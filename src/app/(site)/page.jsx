"use client";
import Image from "next/image";

/* eslint-disable react/jsx-no-target-blank */
import Herocomp from "../components/herocomp";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/footer";
gsap.registerPlugin(ScrollTrigger);
import Transition from "../../../transition";
import Whoami from "../components/whoami";
import Worksection from "../components/worksection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log("resume", myresume.chars);

  return (
    <ReactLenis root>
      <Herocomp />
      <Whoami />
      <Worksection />
      <Footer />
    </ReactLenis>
  );
};

export default Transition(Home);
