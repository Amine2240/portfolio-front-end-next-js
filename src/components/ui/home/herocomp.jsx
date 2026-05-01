"use client";
import "./herocomp.css";
import amine1 from "@/assets/amine01compressed.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useHoverEffect } from "@/hooks/useHoverEffect";

gsap.registerPlugin(ScrollTrigger);

const Herocomp = () => {
  const heroref = useRef(null);
  const contactbutton = useRef(null);
  const imageRef = useRef(null);
  const [time, settime] = useState("");
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  // ✅ Move timeline creation inside component but use a ref to avoid re-creation
  const tlRef = useRef(null);

  // ✅ Clock effect — unchanged, correct
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const ampm = now.getHours() < 12 ? "AM" : "PM";
      settime(`${h}:${m} ${ampm}`);
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  // ✅ Hero container shrink on scroll
  useEffect(() => {
    const isMd = window.innerWidth >= 768;
    gsap.fromTo(
      heroref.current,
      { height: isMd ? "105vh" : "80vh" },
      {
        height: isMd ? "90vh" : "70vh",
        scrollTrigger: {
          trigger: heroref.current,
          start: "center 40%",
          end: "bottom 5%",
          scrub: true,
        },
      }
    );

    // ✅ Parallax on text — grouped in one effect for clarity
    gsap.to(".name", { y: -100, scrollTrigger: { scrub: true } });
    gsap.to(".skill", { y: -100, scrollTrigger: { scrub: true } });
    gsap.to(".time", { y: -150, scrollTrigger: { scrub: true } });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // ✅ Contact button scroll animation
  useEffect(() => {
    tlRef.current = gsap.timeline();
    tlRef.current.to(contactbutton.current, {
      y: -100,
      scrollTrigger: {
        trigger: contactbutton.current,
        start: "-60% 5%",
        end: "bottom top",
        scrub: 3,
      },
    });
  }, []);

  // ✅ Image reveal: runs ONLY after the image has fully loaded
  const handleImageLoad = useCallback(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 24, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power3.out",
      }
    );
  }, []);

  useHoverEffect({ button: contactbutton, setxPos, setyPos });

  return (
    <div className="herobg overflow-hidden relative" ref={heroref}>
      <div className="overflow-hidden">

        {/*
          ✅ KEY CHANGES:
          1. `priority` — tells Next.js to preload this image in <head>, massively improves LCP
          2. `sizes` — gives the browser accurate srcset hints per breakpoint
          3. `placeholder="blur"` — shows blurred LQIP while full image loads (works natively with static imports)
          4. `width` / `height` — re-added to prevent CLS (layout shift)
          5. `onLoad` — triggers GSAP reveal only when image is fully decoded
          6. `style={{ opacity: 0 }}` — hides image initially so GSAP controls the reveal
        */}
        <Image
          ref={imageRef}
          src={amine1}
          priority
          placeholder="blur"
          sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1280px) 380px, 490px"
          width={490}
          height={700}
          style={{ opacity: 0 }}
          className="z-[0] absolute left-1/2 translate-x-[-52%] bottom-0 xl:top-10 image xl:w-[490px] md:w-[380px] w-[280px] sm:w-[350px] transition-all max-w-full h-auto"
          alt="Amine Kadoum"
          onLoad={handleImageLoad}
        />

        <div className="relative flex pb-[40px] flex-col items-center place-content-end h-[90vh] px-4 sm:px-0">
          <a href="mailto:kadoumamine@gmail.com">
            <button
              style={{ transform: `translate(${xPos}px, ${yPos}px)` }}
              ref={contactbutton}
              className="absolute xl:top-[150px] top-[100px] sm:top-[125px] right-2 sm:right-5 sm:left-auto md:left-[60%] h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] xl:h-[180px] xl:w-[180px] md:h-[160px] md:w-[160px] bg-[#141517] text-white rounded-full text-base sm:text-lg letswork"
            >
              <p className="z-30">Lets Work</p>
            </button>
          </a>
          <p className="absolute capitalize top-[160px] sm:top-[190px] left-2 sm:left-4 xl:left-[400px] md:left-[150px] text-lg sm:text-xl md:text-2xl z-10 time text-white">
            local time <br />
            {time}
            <span className="tracking-tighter"> GMT+1</span>
          </p>
          <p className="capitalize font-semibold xl:text-[7em] md:text-[5em] sm:text-[4em] text-[32px] z-10 name text-center">
            AMINE KADOUM
          </p>
          <p className="text-white font-semibold xl:text-[6em] md:text-[4em] z-10 skill tracking-tighter text-[22px] sm:text-[30px] w-full sm:w-fit mx-auto sm:mb-[-40px] mb-28 text-center">
            FULL-STACK DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herocomp;