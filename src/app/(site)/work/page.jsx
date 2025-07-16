/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
import Footer from "../../components/footer";
// import Transition from "../transition";
import { Works } from "../../components/works";
import { hoverfunction } from "../../components/hoverfunction";
import { motion } from "framer-motion";
import Workschema from "../../components/workschema";

// import works from "../../../server/works";
// import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
const Work = () => {
  // const workref0 = useRef();
  // const workref1 = useRef();
  // const workref2 = useRef();
  // const workref3 = useRef();
  // const workref4 = useRef();
  // const workref5 = useRef();
  // const worklist = [workref0, workref1, workref2, workref3, workref4, workref5];

  const [allworks, setallworks] = useState(Works);
  //if we want to use the works from the front we replace [] by works that are imported and delete getallworks function
  // const getallworksfromdb = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/getallworks");
  //     console.log("response after getting : ", response.data);
  //     setallworks(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getallworksfromdb();
  // }, []);

  const [index, setindex] = useState(0);
  const action0 = useRef();
  const action1 = useRef();
  const action2 = useRef();

  const [xPos0, setxPos0] = useState(0);
  const [yPos0, setyPos0] = useState(0);
  const [xPos1, setxPos1] = useState(0);
  const [yPos1, setyPos1] = useState(0);
  const [xPos2, setxPos2] = useState(0);
  const [yPos2, setyPos2] = useState(0);
  const toggleactions = [
    {
      id: 0,
      para: "all",
      reference: action0,
      x: xPos0,
      y: yPos0,
      setx: setxPos0,
      sety: setyPos0,
    },
    {
      id: 1,
      para: "web",
      reference: action1,
      x: xPos1,
      y: yPos1,
      setx: setxPos1,
      sety: setyPos1,
    },
    {
      id: 2,
      para: "mobile",
      reference: action2,
      x: xPos2,
      y: yPos2,
      setx: setxPos2,
      sety: setyPos2,
    },
  ];

  const [webworks, setwebworks] = useState(allworks);
  const [mobileworks, setmobileworks] = useState(allworks);
  useEffect(() => {
    // setallworks(
    //   allworks.map((item, i) => {
    //     return { ...item, reference: worklist[i] };
    //   })
    // );

    setwebworks(
      allworks.filter((item) => {
        return item.type == "web";
      })
    );
    setmobileworks(
      allworks.filter((item) => {
        return item.type == "mobile";
      })
    );
  }, [allworks]);
  const [workstoappear, setworkstoappear] = useState([]);

  const workstoappearfunction = () => {
    if (index == 0) {
      setworkstoappear(allworks);
    }
    if (index == 1) {
      setworkstoappear(webworks);
    }
    if (index == 2) {
      setworkstoappear(mobileworks);
    }
  };
  useEffect(() => {
    workstoappearfunction();
  }, [index, allworks]);

  const containerref = useRef();
  const visitref = useRef();

  // useEffect(() => {
  //   gsap.fromTo(
  //     visitref.current,
  //     {
  //       y: 0,
  //     },
  //     {
  //       y: -100,
  //       scrollTrigger: {
  //         scrub: 1,
  //         trigger: visitref.current,
  //       },
  //     }
  //   );
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);

  useEffect(() => {
    hoverfunction(visitref, setxPos, setyPos);
  }, [xPos, yPos]);

  useEffect(() => {
    toggleactions.map((item, i) => {
      hoverfunction(
        toggleactions[i].reference,
        toggleactions[i].setx,
        toggleactions[i].sety
      );
    });
  }, []);

  return (
    <ReactLenis root>
      <div className="">
        <div className=" flex flex-col items-center pt-20">
          <p className=" text-5xl font-semibold text-center capitalize 2xl:text-8xl xl:text-8xl lg:text-7xl tracking-tighter">
            Developing unforgettable digital experiences.
          </p>
          <div className=" mt-12">
            {toggleactions.map((item) => {
              return (
                <>
                  <button
                    key={item.id}
                    onClick={() => {
                      // navigateTo("/contact");
                      setindex(item.id);
                    }}
                    className=" capitalize relative sm:h-[70px] sm:w-[120px] h-[50px] w-[100px] mx-2  rounded-[50px] mb-5 border border-black"
                    style={{
                      transform: `translate(${item.x}px, ${item.y}px)`,
                      // backgroundColor: index == item.id ? "black" : "transparent",
                      color: index == item.id ? "white" : "black",
                    }}
                    ref={item.reference}
                  >
                    {item.id == index && (
                      <motion.div
                        layoutId="tgl-div"
                        className=" bg-black w-full h-full absolute -z-50 rounded-[50px] top-0"
                      ></motion.div>
                    )}
                    {item.para}{" "}
                    <p className=" absolute sm:top-3 sm:right-7 top-2 right-4 text-sm">
                      {item.id == 1
                        ? `${webworks.length}`
                        : item.id == 2
                        ? `${mobileworks.length}`
                        : ""}{" "}
                    </p>
                  </button>
                </>
              );
            })}
          </div>
          <div
            className="flex flex-wrap place-content-center gap-28 items-end "
            ref={containerref}
          >
            {workstoappear.map((item) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    translateY: 20,
                  }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  ref={item?.reference}
                  className=" sm:mb-20 my-10 mywork"
                  key={item.id}
                >
                  <Workschema item={item} />
                </motion.div>
              );
            })}
          </div>

          <a
            href="https://github.com/Amine2240"
            target="_blank"
            rel="noreferrer"
          >
            <button
              ref={visitref}
              className=" capitalize h-[80px] w-[200px] bg-white text-black border border-black rounded-[50px] mb-10"
              style={{
                transform: `translate(${xPos}px, ${yPos}px)`,
              }}
            >
              visit my github
            </button>
          </a>
        </div>
        <Footer />
      </div>
    </ReactLenis>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Work;
