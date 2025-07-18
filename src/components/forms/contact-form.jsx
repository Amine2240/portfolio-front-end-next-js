import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { hoverfunction } from "@/utils/hoverfunction";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const router = useRouter();
  const [clientinfo, setclientinfo] = useState({
    name: "",
    email: "",
    need: "",
  });

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
          {isSubmitting ? "...Sending" : "Send"}
        </button>
        {/* <div className=" h-[.2px] w-full bg-white absolute z-[-1] top-1/2"></div> */}
      </section>
    </form>
  );
};

export default ContactForm;
