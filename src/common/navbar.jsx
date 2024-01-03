import React from "react";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";

export const Navbar = ({toggleMenu}) => {
  
  return (
    <nav>
      {/* Top Navbar */}
      <div className="tracking-wide">
        <p className="bg-[#910F37] text-white text-center font-light p-2 sm:text-sm md:text-[14px] lg:text-[15px]">
          Free shipping on orders $35+ 🚀
        </p>
      </div>

      {/* Bottom Navbar */}
      <div  className="max-w-[1100px] mx-auto  px-4 sm:px-6   lg:px-8 flex justify-between items-center py-6 ">
        <div className="flex items-center justify-center  md:flex md:items-center md:justify-center ">
          
          <div  className="flex justify-center items-center gap-6 text-[#513121] ">
            <div onClick={toggleMenu} className=" text-2xl flex lg:hidden">
              <FaBars/>
            </div>
            <div className="flex gap-5">
            <Link to={"/"} >
              <img
                src="https://theme-crave-demo.myshopify.com/cdn/shop/files/CRAVE_95cb960d-0933-4ba8-b51a-3c4853b96029_70x.png?v=1642089232"
                className=" grow md:w-20  lg:w-16"
              />
            </Link>
            <div className="hidden lg:flex justify-center items-center gap-5  ">
            <Link to={"/shop"} className="hover:underline">
              Shop
              <span className="relative top-1 pl-2">
                <i className="fa-solid fa-angle-down "></i>
              </span>
            </Link>
            <Link to={"/meetUs"} className="hover:underline">
              
              Meet us
            </Link>
            <Link to={"/recipes"} className="hover:underline">
              Recipes
            </Link>
            <Link to={"/contact"} className="hover:underline">
              
              Contact
            </Link>
            </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6  ">
          <i className="text-lg hover:text-xl cursor-pointer fas fa-search"></i>
          <i className="text-lg hover:text-2xl cursor-pointer fas fa-shopping-bag"></i>
        </div>
      </div>
    </nav>
  );
};
