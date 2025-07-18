import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import amineetic1 from "@/assets/amineetic1.jpg";
import SplitType from "split-type";
import Image from "next/image";

const AmineEtic = () => {
  const eticdivref = useRef();

  useEffect(() => {
    gsap.fromTo(
      eticdivref.current,
      {
        height: "100%",
        width: "100%",
      },
      {
        height: "115%",
        width: "115%",
        scrollTrigger: {
          trigger: eticdivref.current,
          scrub: true,
          start: "top 30%",
          end: "80% 10%",
          // markers: true,
        },
      }
    );

    const mytext2 = new SplitType(".aboutme2");
    gsap.fromTo(
      mytext2.words,
      {
        opacity: 0,

        y: 150,
        // stagger: 0.1,
      },
      {
        y: 0,
        // delay: 0.05,
        duration: 0.8,
        opacity: 1,
        scrollTrigger: {
          trigger: ".aboutme2",
          toggleActions: "play play resume reset",
        },
      }
    );
  }, []);
  return (
    <div className=" flex flex-wrap-reverse  place-content-around items-center w-[100vw] gap-36 my-20">
      <div className=" lg:w-[450px] lg:h-[600px] md:w-[400px] md:h-[550px] sm:w-[350px] sm:h-[500px] w-[450px] overflow-hidden">
        <Image
          src={amineetic1}
          ref={eticdivref}
          alt=""
          className=" w-[full] object-cover"
          loading="lazy"
        />
      </div>

      <p className=" sm:w-[40%] sm:text-2xl text-xl font-medium aboutme2">
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          These are my go to tech stack to make any{" "}
        </span>{" "}
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {" "}
          projects happen. I am always eager of learning{" "}
        </span>
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {" "}
          more about my current stack, and new{" "}
        </span>
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {" "}
          technologies that could expand my horizons.
        </span>
      </p>
    </div>
  );
};

export default AmineEtic;
