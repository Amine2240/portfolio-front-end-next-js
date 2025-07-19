import React from "react";
import { useRef , useState , useEffect} from "react";
import { hoverfunction } from "@/utils/hoverfunction";
import { motion } from "framer-motion";



const WorkLinks = ({setindex , index , webworks , mobileworks}) => {
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
  );
};

export default WorkLinks;
