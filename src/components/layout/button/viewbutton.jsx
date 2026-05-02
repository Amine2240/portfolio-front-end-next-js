"use client";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";

const Viewbutton = () => {
  const hoverbooleen = useSelector((state) => state.hoverbooleen.value);
  const cursorref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cursorref.current) return;
      // Using translate3d for hardware acceleration (smoother movement)
      cursorref.current.style.transform = `translate3d(${e.clientX - 9}px, ${e.clientY - 9}px, 0) ${
        hoverbooleen ? "scale(7)" : "scale(0)"
      }`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoverbooleen]); // Re-bind when scale changes to ensure transform isn't overwritten

  return (
    <div
      ref={cursorref}
      className={`
        fixed top-0 left-0 z-50 pointer-events-none flex items-center justify-center
        h-[18px] w-[18px] rounded-full
        /* Modern Glassmorphism & Gradient */
        bg-gradient-to-br from-[#23395B]/90 to-[#8EA8C3]/90
        backdrop-blur-sm border border-[#8EA8C3]/40 shadow-xl
        transition-transform duration-[400ms] ease-out
      `}
      style={{
        willChange: "transform",
      }}
    >
      <span
        className={`
          text-white font-bold uppercase tracking-widest select-none
          text-[2px] leading-none
          ${hoverbooleen ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          transition-all duration-300 delay-100
        `}
      >
        View
      </span>
    </div>
  );
};

export default Viewbutton;