"use client";
/* eslint-disable react/jsx-no-target-blank */
import Herocomp from "@/components/ui/home/herocomp";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import Footer from "@/components/layout/footer/footer";
// import Transition from "./transition";
import Whoami from "@/components/ui/home/whoami";
import Worksection from "@/components/ui/home/worksection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root>
      <Herocomp />
      <Whoami />
      <Worksection />
      <Footer />
    </ReactLenis>
  );
};

export default Home;
