import React from "react";
import '../../App.css';
import pictn from "../../assets/pic10.webp";
import piceg from "../../assets/pic8.webp";
import pictl from "../../assets/pic12.webp";

export const Flavour = () => {
  return (
    <>
      <div className=" sm:relative sm:-top-60 max-w-[1100px] mx-auto">
        <h3 className="text-2xl text-[#512131]">Find your flavor</h3>
        {/* Apply Grid */}
        <div className="pt-8 sm:pt-6 grid  ">
          <div className="item1  sm:hover:scale-105 duration-700 transition-transform ">
            <img
              src={pictn}
              className="sm:h-96 border-2 border-[#512131] border-b-4 rounded-xl"
            />
            <p className="text-lg pt-2 text-[#512131]">
              Other goodies <i class="fa-solid fa-arrow-right"></i>
            </p>
          </div>
          
          
          
          <div className="item3   sm: hover:scale-105 duration-700 transition-transform  ">
            <img
              src={pictl}
              className="border-2  sm:w-full sm:h-[51rem] border-[#512131] border-b-4 rounded-xl  "
              
            />
            <p className="text-lg pt-2 text-[#512131]">
              Meal starters <i class="fa-solid fa-arrow-right"></i>
            </p>
          </div>
          <div className="item2 sm:hover:scale-105 duration-700 transition-transform  ">
            <img
              src={piceg}
              className="sm:h-96 border-2 border-[#512131] border-b-4 rounded-xl"
            />
            <p className="text-lg pt-2 text-[#512131]">
              Combo Packs <i class="fa-solid fa-arrow-right"></i>
            </p>
          </div>
          
          
        </div>
      </div>
    </>
  );
};
