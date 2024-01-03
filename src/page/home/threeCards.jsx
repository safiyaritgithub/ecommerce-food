import React from "react";
import picstn from "../../assets/pic16.webp";
import picsvntn from "../../assets/pic15.webp";
import picegtn from "../../assets/pic17.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ThreeCards = () => {
  return (
    <>
    {/* using swiper library for functionality only for before md breakpoint */}

      <div className="max-w-[1100px] mx-auto mt-20 block md:hidden">

        <Swiper
          cssMode={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          modules={[Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >

        {/* Three cards have separate divs */}
          <SwiperSlide>
            <div className=" text-[#513121] border-2 border-[#513121] border-b-8 rounded-lg h-60 ">
              <div className="flex items-center justify-center ">
                <img src={picstn} className="h-16 pt-5" />
              </div>
              <div className=" flex flex-col items-center justify-center mt-4 text-xl">
              <p className=" pt-3">"It's completely transformed</p>
              <p >home cooking."</p>
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" text-[#513121] border-2 border-[#513121] border-b-8 rounded-lg h-60">
              <div className="flex items-center justify-center">
                <img src={picsvntn} className=" h-16  pt-6" />
              </div>

              <div className=" flex flex-col items-center justify-center mt-4 text-xl">
                <p className=" pt-3">"I was nothing short of amazed</p>
              <p className=" pt-1">to taste flavors I'd had only in</p>
              <p className=" pt-1 ">restaurants!"</p>
            </div>
            </div>

          </SwiperSlide>

          <SwiperSlide>
            <div className="text-[#513121] border-2 border-[#513121] border-b-8 rounded-lg  h-60">
              <div className="flex items-center justify-center">
                <img src={picegtn} className="h-16  pt-5" />
              </div>
              <div className="flex flex-col items-center justify-center mt-4 text-xl">
                <p className=" pt-6">""I made my best quarantine</p>
                <p className=" pt-1 ">meal with Asian Meal Starter</p>
                <p className=" pt-1 ">Kit."</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    {/* without using swiper library only for md and lg breakpoints Ui */}
      <div className="hidden md:block">
        <div className="  max-w-[1100px] mx-auto mt-20  flex gap-2  ">
          <div className=" text-[#513121] border-2 border-[#513121] border-b-8 rounded-lg md:w-52 md:h-64  lg:w-fit lg:h-auto lg:px-16 ">
            <div className="flex justify-center items-center">
              <img src={picstn} className=" md:h-14 lg:h-20  pt-6 " />
            </div>
            <div className="md:ml-8 md:text-[20px] lg:text-xl lg:-ml-8">
              <p className=" pt-5">"It's completely transformed</p>
              <p className=" pt-1  lg:pb-5 lg:pl-9">home cooking."</p>
            </div>
          </div>

          <div className=" text-[#513121] border-2 border-[#513121] border-b-8 rounded-lg  md:w-52 md:h-64  lg:w-fit lg:h-auto  lg:px-16 ">
            <div className="flex justify-center items-center">
              <img src={picsvntn} className=" md:h-14  lg:h-20   pt-5" />
            </div>
            <div className="md:ml-8 md:text-[20px] lg:text-xl lg:-ml-8">
              <p className=" pt-3">"I was nothing short of amazed</p>
              <p className=" pt-1">to taste flavors I'd had only in</p>
              <p className=" pt-1  lg:pb-5 lg:pl-9">restaurants!"</p>
            </div>
          </div>

          <div className="text-[#513121] border-2 border-[#513121] border-b-8 rounded-lg md:w-52 md:h-64  lg:w-fit lg:h-auto lg:px-16">
            <div className="flex justify-center items-center">
              <img src={picegtn} className="md:h-14 lg:h-20 pt-5" />
            </div>
            <div className="md:ml-8 md:text-[20px] lg:text-xl lg:-ml-8 ">
              <p className=" pt-4">""I made my best quarantine</p>
              <p className=" pt-1 ">meal with Asian Meal Starter</p>
              <p className=" pt-1  lg:pb-5 lg:pl-24">Kit."</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
