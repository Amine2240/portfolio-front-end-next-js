import React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import { useHoverEffect } from "@/hooks/useHoverEffect";

const WorkContactButtons = () => {
  const [xPos2, setxPos2] = useState(0);
  const [yPos2, setyPos2] = useState(0);
  const [xPos3, setxPos3] = useState(0);
  const [yPos3, setyPos3] = useState(0);
  const moreworkbutton = useRef();
  const contactmebutton = useRef();
  useHoverEffect({
    button: moreworkbutton,
    setxPos: setxPos2,
    setyPos: setyPos2,
  });

  useHoverEffect({
    button: contactmebutton,
    setxPos: setxPos3,
    setyPos: setyPos3,
  });

  return (
    <div className=" flex place-content-center w-full flex-wrap">
      <Link href="/work">
        <button
          className=" h-[85px] w-[300px] sm:h-[80px] sm:w-[200px] bg-black text-white rounded-[20px] mb-5 md:mr-5"
          style={{
            transform: `translate(${xPos2}px, ${yPos2}px)`,
          }}
          ref={moreworkbutton}
        >
          more work{" "}
        </button>
      </Link>
      <Link href="/contact">
        <button
          className=" h-[85px] w-[300px] sm:h-[80px] sm:w-[200px] bg-white text-black border-black border-2 rounded-[20px] mb-5"
          style={{
            transform: `translate(${xPos3}px, ${yPos3}px)`,
          }}
          ref={contactmebutton}
        >
          contact me{" "}
        </button>
      </Link>
    </div>
  );
};

export default WorkContactButtons;
