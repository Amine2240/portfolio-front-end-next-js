/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import { useDispatch } from "react-redux";
import { sethoverbooleen } from "../../../stores/hoverslice";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Workschema = ({ item }) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   gsap.fromTo("item.reference",
  //   {
  //     y : -10,

  //   },{
  //     y : 0,
  //     duration : 0.3,

  //   })

  // }, []);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    dispatch(sethoverbooleen(false));
  }, [dispatch, pathname]);
  return (
    <div>
      <a href={item.weblink} target="_blank">
        <div
          className={`sm:h-[550px] sm:w-[600px] h-[350px] w-[350px] cursor-pointer group  flex place-content-center items-center px-5 hover:rounded-[20px] transition-all relative overflow-hidden`}
          // data-cursor-icon='../assets/icons/facebook.png'
          onMouseOver={() => {
            dispatch(sethoverbooleen(true));
          }}
          onMouseLeave={() => {
            dispatch(sethoverbooleen(false));
          }}
          style={{
            backgroundColor: item.color,
          }}
        >
          <Image
            src={item.image}
            alt="work picture"
            className=" w-full h-[250px] object-contain group-hover:scale-[1.04] transition-all duration-300 max-w-full"
            // loading="lazy"
            width="300"
            height="200"
          />

          {item.type == "mobile" ? (
            <Image
              src={item.image2}
              alt="work picture"
              className=" w-full h-[250px] object-contain group-hover:scale-[1.04] transition-all duration-300 max-w-full"
              // loading="lazy"
              width="300"
              height="200"
            />
          ) : (
            ""
          )}
          <div
            style={{
              background: item.resumecolor,
              backdropFilter: "blur(5px)",
            }}
            className={` w-full absolute shadow-2xl sm:h-[300px] h-[200px] bottom-0 rounded-xl transition-all p-5  flex flex-col place-content-around translate-y-[300px] group-hover:translate-y-0 duration-500  `}
          >
            <p className=" sm:text-4xl text-xl capitalize text-white">
              {item.title}{" "}
            </p>
            <p className=" text-white sm:text-lg text-sm ">{item.resume}</p>
          </div>
        </div>
      </a>
      <p className=" text-4xl capitalize mt-5 font-semibold">{item.title}</p>
      <div className=" h-[1.5px] w-full bg-gray-200 my-5"></div>
      <div className=" flex place-content-between text-xl">
        <a href={item.codelink} target="_blank">
          <button className=" ">View code</button>
        </a>
        <p>{item.year}</p>
      </div>
    </div>
  );
};

export default Workschema;
