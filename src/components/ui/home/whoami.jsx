"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Link from "next/link";
import { useHoverEffect } from "@/hooks/useHoverEffect";

gsap.registerPlugin(ScrollTrigger);

const Whoami = () => {
  const moremebutton = useRef(null);
  const tlRef = useRef(null);                    // ✅ stable ref for timeline
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  // ✅ Magnetic hover — consistent with Herocomp, desktop only
  useHoverEffect({ button: moremebutton, setxPos, setyPos });

  // ✅ "Who am I?" char animation
  useEffect(() => {
    const split = new SplitType(".whoami", { types: "chars" });

    const anim = gsap.from(split.chars, {
      y: 80,
      stagger: 0.05,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".whoami",
        toggleActions: "play play resume reset",
      },
    });

    return () => {
      anim.kill();
      split.revert();                            // ✅ cleanup: restore original DOM
    };
  }, []);

  // ✅ Resume word animation — single parent element, no span soup
  useEffect(() => {
    const split = new SplitType(".resume", { types: "words" });

    const anim = gsap.fromTo(
      split.words,
      { y: 40 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".resume",
          toggleActions: "play play resume reset",
        },
      }
    );

    return () => {
      anim.kill();
      split.revert();
    };
  }, []);

  // ✅ Button scroll parallax — desktop only, stable timeline ref
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    tlRef.current = gsap.timeline();
    tlRef.current.fromTo(
      moremebutton.current,
      { y: 0 },
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

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  return (
    <div className="sm:m-20 m-5 flex flex-wrap flex-col">
      <p
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        className="font-bold md:text-8xl text-6xl md:ml-20 sm:mb-10 whoami tracking-tighter"
      >
        Who am I?
      </p>

      <div className="flex sm:flex-row flex-col-reverse sm:place-content-around place-content-center items-center gap-8 sm:gap-0 mt-10 sm:mt-0 sm:h-[200px]">
        {/*
          ✅ Single clean paragraph — SplitType splits .resume's words automatically.
             No more manual span soup with repeated inline styles.
        */}
        <p className="resume text-xl sm:text-2xl sm:w-[500px] w-full px-2 sm:px-0 font-medium text-center sm:text-left overflow-hidden">
          Hey there, my name is Amine. I am a full-stack developer — I freelance
          with high quality work across websites and mobile apps. Currently
          studying at ESI Algiers, Algeria.
        </p>

{
  /*
  
  I want see more button to redirect to linkedin  not about page
  before:
  <Link href="about">
  */
}
        <Link href="https://www.linkedin.com/in/amine-kadoum-4a885b272/" target="_blank">
          <button
            ref={moremebutton}
            style={{ transform: `translate(${xPos}px, ${yPos}px)` }}
            className="text-lg h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] sm:mt-32 bg-black rounded-full text-white shrink-0"
          >
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Whoami;