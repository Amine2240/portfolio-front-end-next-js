"use client";
import Minifooter from "./minifooter";
import TogetherThings from "@/components/ui/footer/Together-things";
import EmailContactButtons from "@/components/ui/footer/email-contact-buttons"
// import { motion } from "framer-motion";
const Footer = () => {
  

  return (
    <section
      className="bg-[#1C1D20] text-white  pt-16  relative "
    >
      <div className=" h-[95vh] flex flex-col place-content-between">
        <TogetherThings />
        <EmailContactButtons/>
        <Minifooter />
      </div>
    </section>
  );
};

export default Footer;
