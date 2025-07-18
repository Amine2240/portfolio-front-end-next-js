import { useRef } from "react";
// import { motion, useTransform, useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { hoverfunction } from "@/utils/hoverfunction";
import { useEffect, useState } from "react";
// import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import { toolsList } from "@/data/tools";

const Toolscomponent = () => {
  const rightbutton = useRef();
  const leftbutton = useRef();
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [xPosright, setxPosright] = useState(0);
  const [yPosright, setyPosright] = useState(0);

  useEffect(() => {
    hoverfunction(leftbutton, setxPos, setyPos);
    hoverfunction(rightbutton, setxPosright, setyPosright);
  }, []);
  const swiper = useSwiper();

  const [slidesperview, setslidesperview] = useState(3);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 1300
        ? setslidesperview(3)
        : window.innerWidth <= 1300 && window.innerWidth > 700
        ? setslidesperview(2)
        : setslidesperview(1);
    });
  }, []);
  return (
    <div>
      <div
        className="   "
        //  ref={targetRef}
      >
        <p className=" text-9xl font-bold capitalize tracking-tighter ">
          tools i use :{" "}
        </p>
        {/* it was sticky in this div */}

        <Swiper
          slidesPerView={slidesperview}
          spaceBetween={0}
          // slidesPerGroup={3}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".nextslide",
            prevEl: ".previousslide",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // scrollbar={{ draggable: true }}
          // speed="500"
          // loop="true"
          // css-mode="true"
          // className=' w-full'
          className=" mt-20"
        >
          {toolsList.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className={`${item.id == 0 ? "xl:ml-5 md:ml-12 " : "0"}`}
              >
                <div
                  className="section bg-gradient-to-tr from-black to-[#272a30e6] xl:w-[435px] xl:h-[435px] lg:w-[450px] lg:h-[450px] md:w-[380px] md:h-[380px] w-[350px] h-[350px] mx-2 mb-5 flex flex-col items-center rounded-md place-content-center"
                  // ref={item.reference}
                  key={item.id}
                >
                  <div className=" w-[300px] h-[300px] ml-5">
                    <Image
                      src={item.image}
                      alt="skill image"
                      className=" w-[90%]"
                    />
                    {/* <img  /> */}
                  </div>
                  <p className=" text-3xl text-white capitalize">{item.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className=" w-[200px] mx-auto flex place-content-between my-10">
          <button
            ref={leftbutton}
            style={{
              transform: `translate(${xPos}px, ${yPos}px)`,
            }}
            className=" previousslide w-20 h-20 border-2 border-black rounded-full"
            onClick={() => swiper?.slidePrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} className=" text-2xl" />
          </button>
          <button
            ref={rightbutton}
            style={{
              transform: `translate(${xPosright}px,${yPosright}px)`,
            }}
            className=" nextslide w-20 h-20 border-2 border-black rounded-full"
            onClick={() => swiper?.slideNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} className=" text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolscomponent;
