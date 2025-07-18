// import  { useRef, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setsuccessbooleen } from "@/stores/successSlice";
// import { hoverfunction } from "@/utils/hoverfunction";

const BackToHomeButton = ({ button, xPos, yPos }) => {
  return (
    <button
      className="  sm:h-[200px] sm:w-[200px] h-[170px] w-[170px]  bg-red-500 rounded-full z-10 ml-10 text-xl mr-40 buttonref"
      ref={button}
      style={{
        transform: `translate(${xPos}px, ${yPos}px)`,
      }}
      // onClick={() => {
      //   dispatch(setsuccessbooleen(true));
      // }}
    >
      Back to home
    </button>
  );
};

export default BackToHomeButton;
