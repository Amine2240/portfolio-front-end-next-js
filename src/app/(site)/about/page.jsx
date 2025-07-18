"use client";
import Footer from "@/components/layout/footer/footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import Toolscomponent from "@/components/ui/about/toolscomponent";
import AmineDahou from "@/components/ui/about/amine-dahou";
import AmineEtic from "@/components/ui/about/amine-etic";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root>
      <div className=" overflow-hidden">
        <AmineDahou />
        <AmineEtic />
        <Toolscomponent />
        <Footer />
      </div>
    </ReactLenis>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default About;
