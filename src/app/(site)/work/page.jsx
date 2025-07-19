/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/layout/footer/footer";
// import Transition from "../transition";
import { Works } from "@/data/works";
import { motion } from "framer-motion";
import Workschema from "@/components/ui/work/workschema";
import WorkLinks from "@/components/ui/work/work-links";
import VisitGithubButton from "@/components/ui/work/visit-github-button";

// eslint-disable-next-line react-refresh/only-export-components
const Work = () => {
  const [allworks, setallworks] = useState(Works);

  const [index, setindex] = useState(0);

  const [webworks, setwebworks] = useState(allworks);
  const [mobileworks, setmobileworks] = useState(allworks);
  useEffect(() => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root>
      <div className="">
        <div className=" flex flex-col items-center pt-20">
          <p className=" mt-10 text-5xl font-semibold text-center capitalize 2xl:text-8xl xl:text-8xl lg:text-7xl tracking-tighter">
            Developing unforgettable <br /> digital experiences.
          </p>
          <WorkLinks
            setindex={setindex}
            index={index}
            webworks={webworks}
            mobileworks={mobileworks}
          />
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
          <VisitGithubButton />
        </div>

        <Footer />
      </div>
    </ReactLenis>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Work;
