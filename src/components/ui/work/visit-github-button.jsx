import { useHoverEffect } from "@/hooks/useHoverEffect.ts";
import { useState,  useRef } from "react";
const VisitGithubButton = () => {
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const visitref = useRef();

  useHoverEffect({ button: visitref, setxPos, setyPos });
  return (
    <a href="https://github.com/Amine2240" target="_blank" rel="noreferrer">
      <button
        ref={visitref}
        className=" capitalize h-[80px] w-[200px] bg-white text-black border border-black rounded-[50px] mb-10"
        style={{
          transform: `translate(${xPos}px, ${yPos}px)`,
        }}
      >
        visit my github
      </button>
    </a>
  );
};

export default VisitGithubButton;
