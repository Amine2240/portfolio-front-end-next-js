/* eslint-disable react/jsx-no-target-blank */
import { useRef, useEffect, useState } from "react";
import amine1 from "../assets/amine01compressed.webp";

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
          <img
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
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amine-kadoum-4a885b272/"
            rel="noreferrer"
          >
            <li className=" flex place-content-start flex-row-reverse text-2xl  mt-3">
              <p className=" ml-0 mb-1">Linkedin</p>{" "}
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
          <a target="_blank" href="https://github.com/Amine2240">
            <li className=" flex place-content-start flex-row-reverse text-2xl ">
              <p className=" ml-0 mb-1">Github</p>{" "}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                viewBox="0,0,256,256"
                style={{ fill: "white" }}
              >
                <g
                  fill="#white"
                  stroke="none"
                  style={{ mixBlendMode: "-moz-initial" }}
                >
                  <g transform="translate(-0.00003,0.00183) scale(4,4)">
                    <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
                  </g>
                </g>
              </svg> */}
            </li>
          </a>
          <a target="_blank" href="https://www.instagram.com/amine_kadoum/">
            <li className=" flex place-content-start flex-row-reverse text-2xl  ">
              <p className=" ml-0 mb-1">Instagram</p>{" "}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                viewBox="0 0 64 64"
                style={{ fill: "white" }}
              >
                <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
              </svg> */}
            </li>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/amine.kadoum.3?locale=fr_FR"
          >
            <li className=" flex place-content-start flex-row-reverse text-2xl ">
              <p className=" ml-0 mb-1">Facebook</p>{" "}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                viewBox="0 0 50 50"
                style={{ fill: "white" }}
              >
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg> */}
            </li>
          </a>
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
