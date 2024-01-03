import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";



export const Drawer = ({ menuOpen, toggleMenu}) => {
  return (
    <>
   {menuOpen && <div onClick={toggleMenu} className='h-full w-full z-[100] absolute top-0 left-0 
   '
   >
     </div> } 

    <SDrawer menuOpen={menuOpen} className='z-[150] absolute top-[6rem] h-screen
     w-[92%] bg-[#f2efdd] border-r-4 border-[#910f37] lg:hidden'>
      <div className="  flex flex-col pt-10 pl-10 text-lg text-[#513121] leading-[2.5rem] ">
            <Link to={"/shop"} className=" ">
              Shop
              <span className="pl-96">
              <i class="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
            <Link to={"/meetUs"} className="">
              
              Meet us
            </Link>
            <Link to={"/recipes"} className="">
              Recipes
            </Link>
            <Link to={"/contact"} className="">
              
              Contact
            </Link>

            <div className="text-[#513121]  flex gap-3 pt-[28rem] pl-4 text-xl cursor-pointer lg:hidden ">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-pinterest"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-tiktok"></i>
        </div>
            </div>
       


     </SDrawer>
        </>
  )
}

const SDrawer = styled.div`
transform : translateX(${(props)=>(props.menuOpen ? "0" :"-100%")})


`;






