import React from "react";

export const Inbox = () => {
  return (
    <>
      <div className="text-center px-4  mt-20 max-w-[1100px] mx-auto border-2 border-[#513121] border-b-8 text-[#513121] bg-[#faf9e1] flex flex-col items-center justify-center rounded-xl ">
        <h2 className="text-3xl  sm:text-5xl pt-8">Spice up your inbox</h2>
        <p className="pt-6 tracking-wide">
           Sign up for our newsletter to get exclusive recipes, cooking tips, and
          more.
        </p>
        <div className="flex text-[#512131] mt-6 items-center  pr-3 pb-12">
          <input
            type="email"
            placeholder="Email "
            className="border-[3px] rounded-xl sm:w-[22rem] pl-2 text-md  py-3 border-[#513121] focus:border-[3.5px] "
          />
          {/* Apply Right arrow */}
          <i className="fa-solid fa-arrow-right absolute left-[56rem] "></i>
        </div>
      </div>
    </>
  );
};
