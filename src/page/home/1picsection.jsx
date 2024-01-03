
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
export const Picsection = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        // pagination={{
        //   type: 'fraction',
         
          
        // }}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://theme-crave-demo.myshopify.com/cdn/shop/files/OMSOM_EastAsia_17_2_1_2400x_300a3201-6891-4949-b9db-b281a95cffa4_2000x.jpg?v=1641468810"
            className="w-[900px] h-[350px]  sm:w-[1600px] sm:h-[550px]"
          />
          {/* On Image Content Box */}
          <div className="relative mt-6  text-center px-4 sm:border-2 sm:border-[#512131] sm:border-b-8 sm:rounded-xl w-fit text-[#512131] sm:py-12 sm:text-left sm:px-12  bg-[#F2EFDD] sm:relative sm:-top-[27rem] sm:left-36 lg:ml-16">
            <h3 className="text-4xl sm:text-5xl text-[#3D081B] ">
              Meet your new
            </h3>
            <h3 className="text-4xl sm:text-5xl  text-[#3D081B]  pt-2">
              favorite pantry staple!
            </h3>
            <p className="text-[18px] sm:text-md font-light pt-3">
              Cook restaurant-quality Asian dishes in under 30 minutes
            </p>
            <p className="text-[18px] sm:text-md font-light pt-1">
              
              with our meal starters.
            </p>
            <button className=" border-2 rounded-3xl border-[#512131] px-8 py-3 border-b-4 mt-5 text-sm hover:border-t-4 hover:border-r-4 hover:border-l-4 cursor-pointer sm:-mb-9 mb-9">
              Shop now
            </button>
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://theme-crave-demo.myshopify.com/cdn/shop/files/07_14_21_Omsom12073_1_1_1600x_3eacc9f6-ea33-4247-a7ed-71a14ec1cd1c.jpg?v=1642616287"
            className="w-[900px] h-[350px]  sm:w-[1600px] sm:h-[550px]"
          />
          {/* On Image Content Box */}
          <div className="relative mt-[92px]   text-center px-4 sm:border-2 sm:border-[#512131] sm:border-b-8 sm:rounded-xl w-fit text-[#512131] sm:py-12 sm:text-left sm:px-12  bg-[#F2EFDD] sm:relative sm:-top-[27rem] sm:left-36  lg:ml-16 ">
          <h3 className="text-3xl sm:text-5xl text-[#3D081B] ">
          Bring the heat.
            </h3>
            <p className="text-[18px] sm:text-md font-light pt-3">Fire up our hottest flavors with the Heat Lover's Set!</p>
            <button className=" border-2 rounded-3xl border-[#512131] px-8 py-3 border-b-4 mt-5 text-sm hover:border-t-4 hover:border-r-4 hover:border-l-4 cursor-pointer sm:-mb-9 mb-9">
              Shop now
            </button>
           
          </div>
         

        </SwiperSlide>
      </Swiper>
       
      
      <hr className="border-b-2 border-[#513121] mt-[1px] sm:relative bottom-80 sm:border-[#ebe6d5] sm:mt-2"/>
      <div className="mt-4 flex items-center justify-center gap-4 text-xs font-light p-6 sm:relative bottom-96 ">
          <i className="fa-solid fa-angle-left " ></i>
          <p>1/2</p>
          <i className="fa-solid fa-angle-right" ></i>
        </div>

    </>
  );
};
