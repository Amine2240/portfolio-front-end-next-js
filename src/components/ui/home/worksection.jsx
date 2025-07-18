// import { useNavigate } from "react-router-dom";
import { hoverfunction } from "@/utils/hoverfunction";
import { useState, useEffect, useRef } from "react";
import { Works } from "@/data/works";
import Workschema from "../work/workschema";
import { useRouter } from "next/navigation";

const Worksection = () => {
  const [homeworks, sethomeworks] = useState(Works.slice(0, 4));
  const workref0 = useRef();
  const workref1 = useRef();
  const workref2 = useRef();
  const workref3 = useRef();
  const worklist = [workref0, workref1, workref2, workref3];
  const sethomeworksfunction = () => {
    sethomeworks((prevhomeworks) =>
      prevhomeworks.map((item, i) => ({
        ...item,
        reference: worklist[i],
      }))
    );
  };
  useEffect(() => {
    sethomeworksfunction();
  }, []);
  // console.log("homeworks", homeworks);
  const worktitle = useRef(null);
  const workdiv = useRef(null);

  // const navigateTo = useNavigate();
  const [xPos2, setxPos2] = useState(0);
  const [yPos2, setyPos2] = useState(0);
  const [xPos3, setxPos3] = useState(0);
  const [yPos3, setyPos3] = useState(0);
  const moreworkbutton = useRef();
  const contactmebutton = useRef();
  useEffect(() => {
    hoverfunction(moreworkbutton, setxPos2, setyPos2);
    hoverfunction(contactmebutton, setxPos3, setyPos3);
  }, []);
  const router = useRouter();
  return (
    <div
      className=" flex place-content-around flex-wrap items-start  mt-44  h-fit mb-10"
      ref={workdiv}
    >
      <div
        className=" sm:w-[500px] w-full flex flex-col items-center  lg:sticky top-20 sm:place-content-between place-content-around h-[500px]"
        ref={worktitle}
      >
        <p
          className=" font-bold sm:text-[3rem] text-[2rem] tracking-tighter  h-fit "
          //
        >
          My work during <br /> 3 year of experience
        </p>
        <p className=" sm:w-[400px] w-full font-medium text-[1.5rem] text-gray-800 sm:p-0 px-5">
          As a full-stack developer specialised in MERN-stack and flutter, I
          cover all your needs and deliver them within a short period of time!
        </p>
        <div className=" flex place-content-center w-full flex-wrap">
          <button
            onClick={() => {
              // navigateTo("/work");
              router.push("/work");
            }}
            className=" h-[85px] w-[300px] sm:h-[80px] sm:w-[200px] bg-black text-white rounded-[20px] mb-5 md:mr-5"
            style={{
              transform: `translate(${xPos2}px, ${yPos2}px)`,
            }}
            ref={moreworkbutton}
          >
            more work{" "}
          </button>
          <button
            onClick={() => {
              // navigateTo("/contact");
              router.push("/contact");
            }}
            className=" h-[85px] w-[300px] sm:h-[80px] sm:w-[200px] bg-white text-black border-black border-2 rounded-[20px] mb-5"
            style={{
              transform: `translate(${xPos3}px, ${yPos3}px)`,
            }}
            ref={contactmebutton}
          >
            contact me{" "}
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap  2xl:w-[65%] xl:w-[50%] lg:w-[40%] gap-5 place-content-center w-[100vw]">
        {homeworks.map((item) => {
          return (
            <div key={item.id} ref={item?.reference} className=" m-3">
              <Workschema item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Worksection;
