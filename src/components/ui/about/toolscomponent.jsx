import { useRef } from "react";
// import { motion, useTransform, useScroll } from "framer-motion";

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
import LeftRightButtons from "@/components/ui/about/left-right-buttons";

const Toolscomponent = () => {
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth > 1300) return 3;
    if (window.innerWidth > 700) return 2;
    return 1;
  };

  const [slidesperview, setslidesperview] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setslidesperview(getSlidesPerView());

    const handleResize = () => {
      setslidesperview(getSlidesPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden">
      <div>
        <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold capitalize tracking-tighter px-4 sm:px-0">
          tools i use:{" "}
        </p>
        {/* it was sticky in this div */}

        <Swiper
          slidesPerView={slidesperview}
          spaceBetween={10}
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
          className="mt-10 sm:mt-20 px-4 sm:px-0"
        >
          {toolsList.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className={`${
                  item.id == 0 ? "xl:ml-5 md:ml-12" : ""
                } flex justify-center`}
              >
                <div
                  className="section bg-gradient-to-tr from-black to-[#272a30e6] w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[435px] xl:h-[435px] mx-auto mb-5 flex flex-col items-center rounded-md place-content-center"
                  key={item.id}
                >
                  <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt="skill image"
                      className="w-[90%] h-auto"
                    />
                  </div>
                  <p className="text-xl sm:text-2xl md:text-3xl text-white capitalize mt-2">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <LeftRightButtons />
      </div>
    </div>
  );
};

export default Toolscomponent;
