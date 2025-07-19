import {  useEffect, useRef } from "react";
// import Transition from "../../transition";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";
// import { memo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar2Links = ({setnavbar2bool , navbar2bool}) => {
  const pathname = usePathname()
  const navref0 = useRef();
  const navref1 = useRef();
  const navref2 = useRef();
  const navref3 = useRef();
  const navelements = [
    {
      id: 0,
      name: "work",
      reference: navref1,
      link: "work",
      classname: "textwork",
    },
    {
      id: 1,
      name: "about",
      reference: navref2,
      link: "about",
      classname: "textabout",
    },
    {
      id: 2,
      name: "contact",
      reference: navref3,
      link: "contact",
      classname: "textcontact",
    },
  ];

  useEffect(() => {
    navelements.map((item) => {
      const mytext = new SplitType(`.${item.classname}`);
      gsap.from(mytext.chars, {
        y: 90,
        // opacity: 0.3,
        delay: 0.1,
        stagger: 0.03,
        duration: 0.25,
        // ease: "back.out(1)",
        scrollTrigger: {
          trigger: navref0.current,
          // trigger: !navbar2bool ? mytext : "",
          // markers: true,
        },
      });
    });

    const mytext = new SplitType(".texthome");
    gsap.from(mytext.chars, {
      y: 90,
      // opacity: 0.3,
      delay: 0.1,
      stagger: 0.03,
      duration: 0.25,
      // ease: "back.out(1)",
      scrollTrigger: {
        trigger: navref0.current,
        // trigger: !navbar2bool ? mytext : "",
        // markers: true,
      },
    });
  }, [navbar2bool]);
  return (
    <ul className=" flex flex-col place-content-around items-center my-auto">
      <Link href="/">
        <li
          onClick={() => {
            setnavbar2bool(false);

            // setindex(-1);
          }}
          style={{
            color: pathname == `/` ? "red" : "white",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          className=" capitalize navref0 texthome hover:text-red-500 group mx-auto  "
          ref={navref0}
        >
          <p className="  mylabel cursor-pointer tracking-tighter font-medium    sm:text-8xl text-6xl">
            home
          </p>
          <div className=" h-1 w-0 rounded-full bg-white group-hover:w-full transition-all duration-150"></div>
        </li>
      </Link>
      {navelements.map((item) => {
        return (
          <Link href={`/${item.link}`}>
            <li
              onClick={() => {
                setnavbar2bool(false);
              }}
              style={{
                color: pathname == `/${item.name}` ? "red" : "white",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
              className={` capitalize navref0 ${item.classname} group `}
              ref={item.reference}
              key={item.id}
            >
              <p
                className={`mylabel cursor-pointer tracking-tighter font-medium sm:text-8xl text-6xl hover:text-red-500 `}
              >
                {item.name}
              </p>
              {/* <div className=" h-1 w-0 rounded-full bg-white group-hover:w-full transition-all duration-300 mx-auto"></div> */}
            </li>
          </Link>
        );
      })}

      <li>
        <div className=" h-10 w-5 rounded-full border  relative">
          <div className=" h-2 w-2 rounded-full bg-white left-[5.6px] scrollindic absolute"></div>
        </div>
      </li>
    </ul>
  );
};

export default Navbar2Links;
