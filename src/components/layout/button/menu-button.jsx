import { useState, useEffect, useRef } from "react";
import { useHoverEffect } from "@/hooks/useHoverEffect.ts";

const MenuButton = ({ setnavbar2bool, navbar2bool }) => {
  const [scrollyvalue, setscrollyvalue] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Default to true for SSR
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsLargeScreen(window.innerWidth > 568);

    const handleScroll = () => {
      setscrollyvalue(window.scrollY);
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 568);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menubutton = useRef();
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  useHoverEffect({ button: menubutton, setxPos, setyPos });

  // Determine scale - only apply scale(0) after component has mounted on client
  const shouldHide =
    isMounted && !navbar2bool && scrollyvalue < 20 && isLargeScreen;

  return (
    <div
      onClick={() => {
        setnavbar2bool(!navbar2bool);
      }}
      ref={menubutton}
      style={{
        transform: `translate(${xPos}px, ${yPos}px) ${
          shouldHide ? "scale(0)" : "scale(1)"
        }`,
        // transform: !navbar2bool && scrollyvalue < 20 ? "scale-0" : "scale-100",
        // top : 'calc(100% -20px)'
      }}
      className={` cursor-pointer  transition-all flex items-center place-content-center gap-[2px] bg-[#1C1D20] border border-gray-700 flex-col z-30 h-[70px] shadow-xl w-[70px] rounded-full text-2xl fixed sm:top-10 sm:right-10 top-8 right-10`}
    >
      <span
        className={`${
          !navbar2bool
            ? ""
            : "rotate-[315deg] translate-x-[.5px] translate-y-[4px]"
        } h-[2px]  w-[25px] bg-white transition-all duration-[1s]`}
      ></span>
      <span
        className={`${
          !navbar2bool ? "" : "rotate-[405deg] "
        } h-[2px] w-[25px] bg-white transition-all duration-[1s]`}
      ></span>
    </div>
  );
};

export default MenuButton;
