import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { hoverfunction } from "../../../utils/hoverfunction";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";
import Link from "next/link";
const Whoami = () => {
  const moremebutton = useRef();
  const tl = gsap.timeline();
  const resumeref = useRef();
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  useEffect(() => {
    window.innerWidth > 768
      ? hoverfunction(moremebutton, setxPos, setyPos)
      : "";
  }, []);
  useEffect(() => {
    if (window.innerWidth > 768) {
      tl.fromTo(
        moremebutton.current,
        {
          y: 0,
        },
        {
          y: -100,
          scrollTrigger: {
            trigger: moremebutton.current,
            start: "top 90%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    }
    // else {
    //   tl.fromTo(
    //     moremebutton.current,
    //     {
    //       y: 0,
    //     },
    //     {
    //       y: -150,
    //       scrollTrigger: {
    //         trigger: moremebutton.current,
    //         start: "top bottom",
    //         end: "bottom 50%",
    //         scrub: true,
    //       },
    //     }
    //   );
    // }
  }, []);
  useEffect(() => {
    const myresume = new SplitType(".resume");
    gsap.fromTo(
      myresume.words,
      {
        y: 40,
      },
      {
        y: 0,
        // stagger: { each: 0.05 },
        duration: 1,
        scrollTrigger: {
          trigger: moremebutton.current,
          // scrub: true,
          toggleActions: "play play resume reset",
        },
      }
    );
  }, []);

  useEffect(() => {
    const mytext = new SplitType(".whoami");
    gsap.from(mytext.chars, {
      // opacity: 0,
      y: 80,
      stagger: 0.05,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".whoami",
        toggleActions: "play play resume reset",
      },
    });
  }, []);
  return (
    <div className=" sm:m-20 m-5 flex flex-wrap flex-col">
      <p
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        className=" font-bold md:text-8xl text-6xl md:ml-20 sm:mb-10 whoami tracking-tighter"
      >
        Who am I?
      </p>
      <div className=" flex sm:place-content-around place-content-center h-[200px] items-center flex-wrap flex-row-reverse  mt-40 sm:mt-0">
        <p
          className="text-2xl  sm:w-[500px] w-full  resume font-medium sm:mt-0 mt-20"
          ref={resumeref}
        >
          <span
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            Hey there my name is amine, I am a full{" "}
          </span>{" "}
          <span
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            {" "}
            stuck developer , I freelance with high{" "}
          </span>
          <span
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            {" "}
            quality work , I do websites and mobile{" "}
          </span>
          <span
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            {" "}
            apps , currently studying at ESI algiers
          </span>
          <span
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            {" "}
            (algeria).
          </span>
        </p>
        <Link href="/about">
          <button
            className=" text-lg sm:mt-32 sm:mb-0 mb-2 h-[200px] w-[200px] bg-black rounded-full sm:mr-0 mr-10 text-white"
            ref={moremebutton}
            style={{
              transform: `translate(${xPos}px, ${yPos}px)`,
            }}
          >
            More me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Whoami;
