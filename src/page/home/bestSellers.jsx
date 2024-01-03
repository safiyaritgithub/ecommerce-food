import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "../styles.css";


import picto from "../../assets/pic2.webp";
import pictr from "../../assets/pic3.webp";
import picfr from "../../assets/pic4.webp";
import picfv from "../../assets/pic5.webp";
import picsi from "../../assets/pic6.webp";
import picsn from "../../assets/pic7.webp";
import picegt from "../../assets/pic8.webp";
import picni from "../../assets/pic9.webp";





export const BestSellers = () => {

  


  return (

    
    <>
    
      
      <div className="mt-8 sm:relative sm:-top-60  max-w-[1100px] mx-auto px-4 lg:hidden ">

        <h3 className="text-xl sm:text-3xl">Get your hands on our bestsellers 🔥</h3>
        
        {/* cards */}
        <Swiper 
        cssMode={true}
        slidesPerView={3}
        spaceBetween={30}
        
         breakpoints={{
           320: {
        spaceBetween:80,
        width: 320,
       },
       768: {
        slidesPerView:4,
        spaceBetween:90,
         width: 768,
       },
           
         }}

        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
       
        <div className=" flex ">
          <SwiperSlide>
           <div className="flex-shrink-0 w-32  md:w-52  hover:scale-105 duration-700 transition-transform">
            <img
              src={picto}
              className="   border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px]  text-[#512131] pt-2 hover:underline cursor-pointer">
              Larb Starter 3-Pack
            </p>
            <p className="    text-[#512131] pt-3 ">
              $12.00 CAD
            </p>
          </div>
          </SwiperSlide>

<SwiperSlide>
            <div className="flex-shrink-0 w-32  md:w-52 hover:scale-105 duration-700 transition-transform">
            <img
              src={pictr}
              className=" border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px]  text-[#512131] pt-2 hover:underline cursor-pointer">
              Lemongrass BBQ Starter 3-Pack
            </p>
            <p className="   text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div>
          </SwiperSlide>
<SwiperSlide>
          <div className="flex-shrink-0 w-32  md:w-52 hover:scale-105 duration-700 transition-transform">
            <img
              src={picfr}
              className="border-2 border-[#512131] border-b-4  rounded-xl "
            />
            <p className=" text-[13px]    text-[#512131] pt-2 hover:underline cursor-pointer">
              The East Asian Sampler
            </p>
            <p className="  text-[#512131] pt-3">
              $22.00 CAD
            </p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex-shrink-0 w-32 md:w-52  hover:scale-105 duration-700 transition-transform">
            <img
              src={picfv}
              className=" border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px]  text-[#512131] pt-2 hover:underline cursor-pointer">
              Mala Salad Starter 3-Pack
            </p>
            <p className="  text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex-shrink-0 w-32  md:w-52 hover:scale-105 duration-700 transition-transform">
            <img
              src={picsi}
              className=" border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px]  text-[#512131] pt-2 hover:underline cursor-pointer">
              The Southeast Asian Sample
            </p>
            <p className="  text-[#512131] pt-3">
              $29.00 CAD
            </p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex-shrink-0 w-32 md:w-52 hover:scale-105 duration-700 transition-transform">
            <img
              src={picsn}
              className="border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px]  text-[#512131] pt-2 hover:underline cursor-pointer">
              The Heat lover's Set
            </p>
            <p className="  text-[#512131] pt-3">
              $50.00 CAD
            </p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="flex-shrink-0 w-32 md:w-52 hover:scale-105 duration-700 transition-transform">
            <img
              src={picegt}
              className=" border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px]  text-[#512131] pt-2 hover:underline cursor-pointer">
              The Best Sellers Set
            </p>
            <p className=" text-[#512131] pt-3">
              $45.00 CAD
            </p>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className=" flex-shrink-0 w-32 md:w-52  hover:scale-105 duration-700 transition-transform">
            <img
              src={picni}
              className=" border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px] text-[#512131] pt-2 hover:underline cursor-pointer">
              Spicy Bulgogi Starter 3-Pack
            </p>
            <p className="  text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div> 
          </SwiperSlide>

          
          
        </div> 
        </Swiper>

                
        
        
        
        <div className="mt-4 flex items-center justify-center gap-4 text-xs font-light p-6 sm:hidden ">
          <i className="fa-solid fa-angle-left " ></i>
          <p>1/7</p>
          <i className="fa-solid fa-angle-right" ></i>
        </div>

      </div>
      <div className="mt-8 sm:relative sm:-top-[21rem] max-w-[1100px] mx-auto px-4 hidden lg:block ">
        <h3 className="text-xl sm:text-3xl">Get your hands on our bestsellers 🔥</h3>

      <div className=" sm:mt-8   grid grid-cols-4 gap-2 ">
           <div className="  lg:w-full  hover:scale-105 duration-700 transition-transform">
            <img
              src={picto}
              className="  sm:h-72  border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px] sm:text-[15px] text-[#512131] pt-2 hover:underline cursor-pointer">
              Larb Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]   text-[#512131] pt-3 ">
              $12.00 CAD
            </p>
          </div>

            <div className="flex-shrink-0 w-36 sm:w-full hover:scale-105 duration-700 transition-transform">
            <img
              src={pictr}
              className="w-96 h-auto sm:h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px] sm:text-[15px] text-[#512131] pt-2 hover:underline cursor-pointer">
              Lemongrass BBQ Starter 3-Pack
            </p>
            <p className=" sm:text-[15px]  text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div>
          <div className="flex-shrink-0 w-36 sm:w-full hover:scale-105 duration-700 transition-transform">
            <img
              src={picfr}
              className="w-96 h-auto sm:h-72 border-2 border-[#512131] border-b-4  rounded-xl "
            />
            <p className=" text-[13px] sm:text-[15px]   text-[#512131] pt-2 hover:underline cursor-pointer">
              The East Asian Sampler
            </p>
            <p className=" sm:text-[15px] text-[#512131] pt-3">
              $22.00 CAD
            </p>
          </div>
          
          <div className="flex-shrink-0 w-36 sm:w-full hover:scale-105 duration-700 transition-transform">
            <img
              src={picfv}
              className="w-96 h-auto sm:h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px] sm:text-[15px] text-[#512131] pt-2 hover:underline cursor-pointer">
              Mala Salad Starter 3-Pack
            </p>
            <p className=" sm:text-[15px] text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div>
         

          
          <div className="flex-shrink-0 w-36 sm:w-full hover:scale-105 duration-700 transition-transform">
            <img
              src={picsi}
              className="w-96 h-auto sm:h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px] sm:text-[15px] text-[#512131] pt-2 hover:underline cursor-pointer">
              The Southeast Asian Sample
            </p>
            <p className=" sm:text-[15px] text-[#512131] pt-3">
              $29.00 CAD
            </p>
          </div>
         

          
          <div className="flex-shrink-0 w-36 sm:w-full hover:scale-105 duration-700 transition-transform">
            <img
              src={picsn}
              className="w-96 h-auto sm:h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px] sm:text-[15px] text-[#512131] pt-2 hover:underline cursor-pointer">
              The Heat lover's Set
            </p>
            <p className=" sm:text-[15px] text-[#512131] pt-3">
              $50.00 CAD
            </p>
          </div>
        

       
          <div className="flex-shrink-0 w-36 sm:w-full hover:scale-105 duration-700 transition-transform">
            <img
              src={picegt}
              className="w-96 h-auto sm:h-72  border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px] sm:text-[15px] text-[#512131] pt-2 hover:underline cursor-pointer">
              The Best Sellers Set
            </p>
            <p className="sm:text-[15px] text-[#512131] pt-3">
              $45.00 CAD
            </p>
          </div>
          

          
          <div className=" flex-shrink-0 w-36 sm:w-full hover:scale-105 duration-700 transition-transform">
            <img
              src={picni}
              className="w-96 h-auto sm:h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className="text-[13px] sm:text-[15px] text-[#512131] pt-2 hover:underline cursor-pointer">
              Spicy Bulgogi Starter 3-Pack
            </p>
            <p className=" sm:text-[15px] text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div> 
          

          
          
        </div> 
        </div> 



    </>
  );
};


