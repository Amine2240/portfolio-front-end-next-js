// import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Works } from "@/data/works";
import Workschema from "../work/workschema";
import WorkContactButtons from "@/components/ui/home/work-contact-buttons";

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

  // const router = useRouter();
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
        <WorkContactButtons />
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
