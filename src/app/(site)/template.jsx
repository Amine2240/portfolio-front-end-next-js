"use client";
import { motion } from "framer-motion";
import "./transition.css";

// const Template = (Component) => {
//   // eslint-disable-next-line react/display-name
//   return () => (
//     <>
//       <Component />
//       <motion.div
//         className="slide-in"
//         initial={{ scaleY: 0 }}
//         animate={{ scaleY: 0 }}
//         exit={{ scaleY: 1.5 }}
//         transition={{ duration: 0.6 }}
//       />

//       <motion.div
//         className="slide-out"
//         initial={{ scaleY: 1.5 }}
//         animate={{ scaleY: 0 }}
//         exit={{ scaleY: 0 }}
//         transition={{ duration: 0.6 }}
//       />
//     </>
//   );
// };

// export default Template;

export default function Template({ children }) {
  return (
    <>
      {children}
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0}}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1.3 }}
        transition={{ duration: 0.6 }}
      ></motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1.5 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          // delay: 0.6,
          duration: 0.6,
        }}
      ></motion.div>

      {/* <motion.div
        className="slide-out"
        initial={{ scaleY: 1.5 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.6 }}
      /> */}
    </>
  );
}
