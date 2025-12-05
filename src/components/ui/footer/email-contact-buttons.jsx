import React from "react";
import { useRef, useState } from "react";
import Link from "next/link";
import { useHoverEffect } from "@/hooks/useHoverEffect";

const EmailContactButtons = () => {
  const emailbutton = useRef();
  const contactbutton = useRef();
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [xPos2, setxPos2] = useState(0);
  const [yPos2, setyPos2] = useState(0);
  useHoverEffect({
    button: contactbutton,
    setxPos: setxPos2,
    setyPos: setyPos2,
  });
  useHoverEffect({ button: emailbutton, setxPos, setyPos });

  return (
    <div className="flex place-content-center flex-wrap gap-3 px-4 sm:px-0">
      <a href="mailto:kadoumamine@gmail.com" className="w-full sm:w-[450px]">
        <button
          style={{
            transform: `translate(${xPos}px, ${yPos}px)`,
          }}
          ref={emailbutton}
          className="refbutton border hover:bg-[#0d486c] sm:h-[100px] h-[60px] w-full capitalize text-lg sm:text-xl font-semibold rounded-full"
        >
          email me{" "}
        </button>
      </a>
      <Link href="/contact" className="w-full sm:w-[450px]">
        <button
          onClick={() => {
            // navigateTo("/contact");
          }}
          style={{
            transform: `translate(${xPos2}px, ${yPos2}px)`,
          }}
          ref={contactbutton}
          className="refbutton border hover:bg-[#0d486c] sm:h-[100px] h-[60px] w-full capitalize text-lg sm:text-xl font-semibold rounded-full"
        >
          contact me
        </button>
      </Link>
    </div>
  );
};

export default EmailContactButtons;
