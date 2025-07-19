import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {  useState, useRef } from "react";
import { useSwiper } from "swiper/react";
import { useHoverEffect } from "@/hooks/useHoverEffect.ts";

const LeftRightButtons = () => {
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [xPosright, setxPosright] = useState(0);
  const [yPosright, setyPosright] = useState(0);

  const rightbutton = useRef();
  const leftbutton = useRef();

  const swiper = useSwiper();

  useHoverEffect({
    button: rightbutton,
    setxPos: setxPosright,
    setyPos: setyPosright,
  });
  useHoverEffect({ button: leftbutton, setxPos, setyPos });

  return (
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
  );
};

export default LeftRightButtons;
