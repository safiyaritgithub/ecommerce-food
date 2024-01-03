import React from "react";
import picftn from "../../assets/pic14.webp";

export const Maker = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto mt-24 border-2 border-[#512131] border-b-8 rounded-lg flex flex-col  sm:flex sm:flex-row overflow-hidden">
        {/* Content Box */}
        <div className="order-3 text-[#513121] text-left  text-sm px-14  pt-8 sm:pl-24 sm:pt-16 sm:pr-36 sm:order-2 border-[#512131]">
          <h2 className="text-3xl sm:text-4xl">Trusted</h2>
          <h2 className="text-3xl sm:text-4xl sm:pt-4">tastemakers</h2>
          <div className="leading-[20px] pb-20   sm:text-[16px]">
          <p className="pt-4  ">
            Maiko Kyogoku's signature cooking style is a bal
          </p>
          <p className="pt-1  ">
            ance of refinement + whimsy. And she's lent her
          </p>
          <p className="pt-1 ">
            tangy expertise to our favorite starters.
          </p>
          </div>
        </div>
        {/* Image Box */}
        <div className="order-2 sm:order-3" >
          <img src={picftn} className=" sm:h-96 " />
        </div>
      </div>
    </>
  );
};
