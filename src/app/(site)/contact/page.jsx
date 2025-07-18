/* eslint-disable react-refresh/only-export-components */
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import Contactdetails from "@/components/ui/contact/contactdetails";
import ContactForm from "@/components/forms/contact-form";

const Contact = () => {
  return (
    <ReactLenis root>
      <div className=" text-white bg-[#1C1D20] pt-32">
        <p className="2xl:text-7xl xl:text-7xl lg:text-6xl  text-5xl sm:ml-14 ml-5 sm:mb-0 transition-all duration-300 font-semibold capitalize">
          lets work together
        </p>
        <div className=" flex w-full   place-content-between pt-16 flex-wrap-reverse">
          <div className=" xl:w-[70%] md:w-[60%]  w-full">
            <ContactForm />
          </div>
          <Contactdetails />
        </div>
      </div>
    </ReactLenis>
  );
};

export default Contact;
