/* eslint-disable react-refresh/only-export-components */
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef, useState, useEffect } from "react";
import axios from "axios";
// import facebook from "../assets/icons/facebook.png";
// import instagram from "../assets/icons/instagram.png";
// import Transition from "../transition";
import { hoverfunction } from "../../components/hoverfunction";
import Contactdetails from "../../components/contactdetails";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setsuccessbooleen } from "../redux/successSlice";
// import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Contact = () => {
  // const navigateTo = useNavigate();
  // const successbooleen = useSelector((state) => state.successbooleen.value);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [clientinfo, setclientinfo] = useState({
    name: "",
    email: "",
    need: "",
  });

  // const submitclientinfo = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const response = await axios.post(
  //       // "https://amine-portfolio-backend.onrender.com/client",
  //       "http://localhost:5000/client",
  //       clientinfo
  //     );
  //     if (response.status == 200 && Object.keys(response.data).length != 0) {
  //       navigateTo("/success");
  //     } else {
  //       navigateTo("/fail");
  //     }
  //     // response.status == 200 && dispatch(setsuccessbooleen(true));
  //     // console.log("successbooleen", successbooleen);
  //     console.log("response status", response.status);
  //     console.log("response", response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const button = useRef();
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [isSubmitting, setisSubmitting] = useState(false);
  useEffect(() => {
    hoverfunction(button, setxPos, setyPos);
  }, [xPos, yPos]);

  useEffect(() => {
    gsap.fromTo(
      button.current,
      {
        y: 50,
      },
      {
        y: -100,
        duration: 0.3,
        scrollTrigger: {
          trigger: button.current,
          scrub: true,
        },
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kadoumamine@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(clientinfo),
        }
      );
      if (response.ok) {
        sessionStorage.setItem("formSubmitted", "true");
        // small delay to ensure sessionStorage is persisted
        await new Promise((resolve) => setTimeout(resolve, 50));
        router.push("/success");
      } else {
        console.error("FormSubmit failed", await response.json());
        router.push("/not-found");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      router.push("/not-found");
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <ReactLenis root>
      <div className=" text-white bg-[#1C1D20] pt-32">
        <p className="2xl:text-7xl xl:text-7xl lg:text-6xl  text-5xl sm:ml-14 ml-5 sm:mb-0 transition-all duration-300 font-semibold capitalize">
          lets work together
        </p>
        <div className=" flex w-full   place-content-between pt-16 flex-wrap-reverse">
          <div className=" xl:w-[70%] md:w-[60%]  w-full">
            <form
              onSubmit={handleSubmit}
              className="   flex flex-col place-content-between w-full h-[170vh]  p-10"
            >
              <label
                className=" sm:text-4xl text-3xl capitalize font-semibold"
                htmlFor="name"
              >
                what is your name
              </label>
              <input
                className=" pl-5 sm:h-[80px] h-[40px] bg-transparent border-b focus:outline-none placeholder:opacity-20   sm:text-4xl text-2xl"
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setclientinfo({ ...clientinfo, name: e.target.value });
                }}
              />
              <label
                className=" sm:text-4xl text-3xl capitalize font-semibold xl:mt-0 mt-10"
                htmlFor="email"
              >
                what is your email
              </label>
              <input
                className=" pl-5   sm:h-[80px] h-[40px] bg-transparent  border-b focus:outline-none placeholder:opacity-20 sm:text-4xl text-2xl"
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setclientinfo({ ...clientinfo, email: e.target.value });
                }}
              />
              <label
                className=" sm:text-4xl text-3xl capitalize font-semibold xl:mt-0 mt-10"
                htmlFor="need"
              >
                what are you looking for?
              </label>

              <textarea
                className=" h-[300px] bg-transparent border-b focus:outline-none placeholder:opacity-20  sm:text-5xl text-2xl"
                name="need"
                id="need"
                cols="30"
                rows="10"
                placeholder="hello amine..."
                onChange={(e) => {
                  setclientinfo({ ...clientinfo, need: e.target.value });
                }}
              ></textarea>
              <input type="text" name="_honey" style={{ display: "none" }} />

              <section className=" relative mb-10 z-0">
                <button
                  className="  md:h-[200px] md:w-[200px] h-[180px] w-[180px] bg-red-500 rounded-full z-30 ml-10 text-2xl"
                  ref={button}
                  style={{
                    transform: `translate(${xPos}px, ${yPos}px)`,
                  }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "...Sunding" : "Send"}
                </button>
                {/* <div className=" h-[.2px] w-full bg-white absolute z-[-1] top-1/2"></div> */}
              </section>
            </form>
          </div>
          <Contactdetails />
        </div>
      </div>
    </ReactLenis>
  );
};

export default Contact;
