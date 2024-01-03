import React from "react";
import { Footer } from "../../common/footer";

export const MeetUs = () => {
  return (
    <>
      <div className="">
        <div className="relative">
           <div className="flex items-center">
          <img
            src="https://theme-crave-demo.myshopify.com/cdn/shop/files/highres_04_1100x.jpg?v=1642678672"
            className="w-[768px] h-[400px]"
          />
          <img
            src="https://theme-crave-demo.myshopify.com/cdn/shop/files/highres_04_1100x.jpg?v=1642678672"
            className="w-[768px] h-[400px]"
          />
        </div>
        <div className="border-4 border-b-8 border-[#3d081b] w-fit py-14 px-10 absolute bottom-[20%] left-[20%] translate-[-50%] transform-[-50%] bg-[#f2efdd] rounded-xl">
          <p className="text-xs text-[#3d081b] flex justify-center">WE ARE</p>
          <p className="text-5xl text-[#3d081b]">
            Bringing loud + proud Asian flavors to
          </p>
          <p className="text-5xl text-[#3d081b] flex justify-center">
            your fingertips.
          </p>
        </div>
        </div>


        <div className="mt-20  max-w-[1100px] mx-auto sm:flex sm:gap-[8rem] border-2 border-[#513121] rounded-xl border-b-8 overflow-hidden">
          {/* Content Box */}
          <div className="text-[#513121] pt-28  px-4 sm:pt-24 leading-7 pl-14">
            <h3 className="text-3xl  sm:text-5xl">The founders</h3>
            <div className="text-left">
              <p className="pt-6 ">
                We’re Vanessa + Kim Pham, the sisters and co-
              </p>
              <p>founders behind Omsom. We’re daughters of</p>
              <p>Vietnamese refugees, who grew up at our family’s</p>
              <p>kitchen counter, watching our Mẹ cook Viet dinners</p>
              <p>from scratch every night</p>
              <p>Pull up a stool and grab a bowl – welcome to our</p>
              <p>house. 🤗</p>
            </div>
          </div>

          {/* Image Box */}
          <div className="border-l-2 border-[#512131] ">
            <img
              src="https://theme-crave-demo.myshopify.com/cdn/shop/files/phamsisters-contact-web_1600x_2425c5f1-44be-4c51-940e-fe2d9f97c39f_750x.png?v=1642616047"
              className=" sm:h-[33rem] lg:w-[33rem] h-[36rem]"
            />
          </div>
        </div>
        {/* footer */}
      <div className="relative">
          <div className="pt-24">
          <img
            src="https://theme-crave-demo.myshopify.com/cdn/shop/files/bg_2000x.png?v=1638944606"
            className="w-[1550px] h-[550px]"
          />
        </div>
        <div className="border-4 border-b-8 border-[#3d081b] w-fit py-14 px-10 absolute bottom-[20%] left-[20%] translate-[-50%] transform-[-50%] bg-[#f2efdd] rounded-xl">
          <p className="text-4xl text-[#3d081b] flex justify-center">
            Our promise
          </p>
          <p className="text-lg text-[#3d081b] pt-3">
            No more diluted dishes, no more cultural compromise. Real deal Asian
            cuisine developed with chef
          </p>
          <p className="text-lg text-[#3d081b] flex justify-center">
            tastemakers from your our favorite restaurants.
          </p>
        </div>
      </div>

      <div className="-mt-20">
          <Footer />
        </div>
        
      </div>
    </>
  );
};
