import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import aminedahou from "@/assets/aminedahou.jpg";
import SplitType from "split-type";
import Image from "next/image";

const AmineDahou = () => {
  const dahoudivref = useRef();
  useEffect(() => {
    gsap.fromTo(
      dahoudivref.current,
      {
        // scale: "1",
        height: "100%",
        width: "100%",
      },
      {
        // scale: "1.25",
        height: "115%",
        width: "115%",
        scrollTrigger: {
          trigger: dahoudivref.current,
          scrub: true,
          start: "top top",
          end: "80% 10%",
        },
      }
    );

    const mytext1 = new SplitType(".aboutme1");
    gsap.fromTo(
      mytext1.words,
      {
        opacity: 0,

        y: 150,
      },
      {
        delay: 0.1,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".aboutme1",
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
  }, []);
  return (
    <div className=" flex flex-wrap  place-content-center items-center w-[100vw] gap-36 pt-32 ">
      <p className=" sm:w-[40%] sm:text-2xl text-xl font-medium aboutme1">
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          i am computer science esi student passionate{" "}
        </span>{" "}
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {" "}
          about every single thing related to tech i{" "}
        </span>
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {" "}
          start working seriously since a year from{" "}
        </span>
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {" "}
          now, i have a strong background on web
        </span>
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {" "}
          development, the powever of knowing
        </span>
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {" "}
          tools and keeping myself updated allows
        </span>
        <span
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {" "}
          me to offer you a pretty work
        </span>
      </p>
      <div className=" lg:w-[450px] lg:h-[600px] md:w-[400px] md:h-[550px] sm:w-[350px] sm:h-[500px] w-[450px]   overflow-hidden">
        <Image
          src={aminedahou}
          ref={dahoudivref}
          alt=""
          className=" w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AmineDahou;
