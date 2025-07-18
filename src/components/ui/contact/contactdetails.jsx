/* eslint-disable react/jsx-no-target-blank */
import { useRef, useEffect, useState } from "react";
import amine1 from "@/assets/amine01compressed.webp";
import Image from "next/image";
import {socialsList} from '@/data/socials'

const Contactdetails = () => {
  const contactref = useRef();
  const [time, settime] = useState("");

  const gettime = () => {
    const now = new Date();
    const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    const minutes =
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    const seconds =
      now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
    settime(hours + ":" + minutes + ":" + seconds);

    setTimeout(() => {
      gettime();
    }, 1000);
  };

  useEffect(() => {
    gettime();
  }, [time]);
  return (
    <>
      <ul
        ref={contactref}
        className="  flex xl:flex-col xl:h-[600px] lg:h-[400px] md:h-[200px]  place-content-around flex-wrap  md:fixed xl:top-20 md:top-32 sm:right-0  xl:w-[30%] md:w-[40%] w-[90%]"
      >
        <div className=" h-28 w-28 mx-auto bg-[#335e79] rounded-full overflow-hidden mb-5">
          <Image
            src={amine1}
            alt=""
            className=" translate-y-1 scale-110 w-full"
          />
        </div>
        <ul className="">
          <span className=" capitalize text-lg text-gray-500">
            contact details
          </span>
          <li className=" flex place-content-between text-2xl  mt-3 sm:mr-3">
            <p>
              {" "}
              <a href="mailto:kadoumamine@gmail.com">kadoumamine@gmail.com</a>
            </p>
          </li>
        </ul>
        <ul className="">
          <span className=" capitalize text-lg text-gray-500">
            digital spaces
          </span>

          {socialsList.map((item) => {
            return (
              <a target="_blank" href={item.link} rel="noreferrer">
                <li className=" flex place-content-start flex-row-reverse text-2xl  mt-3">
                  <p className=" ml-0 mb-1">{item.text}</p>{" "}
                  {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                viewBox="0 0 50 50"
                style={{ fill: "white" }}
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>{" "} */}
                </li>
              </a>
            );
          })}
        </ul>
        <li>
          <span className=" capitalize text-lg text-gray-500 ">location</span>
          <p className=" flex place-content-between text-2xl  mt-3">
            Algiers, Algeria <br />
            {time}
          </p>
        </li>
      </ul>
    </>
  );
};

export default Contactdetails;
