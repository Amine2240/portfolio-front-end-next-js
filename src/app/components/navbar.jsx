"use client"
// import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link'
// import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navbar = () => {
  // const navigateTo = useNavigate();
  const [scrollboolen, setscrollboolen] = useState(true);
  // const location = useLocation();
  // const { pathname } = location;
  const pathname = usePathname()


  // const [index, setindex] = useState(
  //   localStorage.getItem("index") == null
  //     ? -1
  //     : JSON.parse(localStorage.getItem("index"))
  // );
  const navelements = [
    {
      id: 0,
      name: "work",
      link: "work",
    },
    {
      id: 1,
      name: "about",
      link: "about",
    },
    {
      id: 2,
      name: "contact",
      link: "contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        setscrollboolen(false);
      } else {
        setscrollboolen(true);
      }
    });
  }, [scrollboolen]);

  // const navbarindex = useSelector((state) => state.navbarindex.value);
  // const [scrollyvalue, setscrollyvalue] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setscrollyvalue(window.scrollY);
  //   });
  // }, []);

  // useEffect(() => {
  //   const tmp = JSON.parse(localStorage.getItem("index"));
  //   if (tmp !== null) {
  //     setindex(tmp);
  //   }
  // }, [index]);
  // localStorage.setItem("index", JSON.stringify(index));
  return (
    // || scrollyvalue < 520
    // ${
    //   !scrollboolen
    //     ? "bg-transparent text-black translate-y-[-150px]"
    //     : "bg-richblack text-white translate-y-0"
    // }
    <nav
      className={` navbar bg-transparent absolute transition-all duration-300  w-full  sm:flex hidden place-content-between h-[10vh] items-center z-[2] `}
      // style={{
      //   backgroundColor:
      //     pathname == "/"
      //       ? "#2c5269de"
      //       : pathname == "/contact"
      //       ? "#1C1D20"
      //       : "transparent",
      //     transitionDelay : 2.5,
      // }}
    >
      <Link href="/">
      <p
        onClick={() => {
          // navigateTo("/");
          // setindex(-1);
        }}
        className=" capitalize  font-medium text-2xl mylabel  cursor-pointer ml-5"
        style={{
          color:
            pathname == `/work` || pathname == "/about" ? "black" : "white",
          transition: "all ease 0.3s",
          transitionDelay: "0.3s",
        }}
      >
        amine dev
      </p>
      </Link>

      <ul className=" flex  w-[300px] place-content-around mr-5  ">
        {navelements.map((item) => {
          return (
            <Link href={`/${item.link}`} >
            <li
              key={item.id}
              onClick={() => {
                // navigateTo(`${item.link}`);
                // setindex(i);
              }}
            >
              <p
                style={{
                  color:
                    // JSON.parse(localStorage.getItem("navbarindex"))
                    pathname == `/${item.name}`
                      ? "red"
                      : pathname == `/work` || pathname == "/about"
                      ? "black"
                      : "white",
                  transition: "all ease 0.3s",
                  transitionDelay: "0.3s",
                }}
                className=" text-lg mylabel cursor-pointer capitalize font-medium"
              >
                {item.name}
              </p>
            </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
