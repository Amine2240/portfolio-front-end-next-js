"use client"
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
const Viewbutton = () => {
  const hoverbooleen = useSelector((state) => state.hoverbooleen.value);
  const cursorref = useRef();
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  useEffect(() => {
    const handlemousemove = (e) => {
      setx(e.clientX - 9);
      sety(e.clientY - 9);
    };
    window.addEventListener("mousemove", handlemousemove);
  }, []);
  return (
    <div
      style={{
        top: y + "px",
        left: x + "px",
        transform: hoverbooleen ? "scale(7)" : "scale(0)",
        backgroundColor: "#067BC2",
        // backgroundImage : "linear-gradient(to top , black,blue)",
        zIndex: "50",
        // animationDelay : 3,
        // transform: 'skewY(8)',
        pointerEvents: "none",
        borderRadius: "100%",
        position: "fixed",
        height: "18px",
        width: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transitionDuration: "0.3s",
        transitionTimingFunction: "ease-out",
        transition: "transform .3s cubic-bezier(0.7, 0, 0.3, 1)",
      }}
      className={`cursor`}
      ref={cursorref}
    >
      <p
        className={`${
          hoverbooleen ? " scale-100  font-medium" : " scale-0"
        } transition-all text-white text-[3px]`}
      >
        View
      </p>
    </div>
  );
};

export default Viewbutton;
