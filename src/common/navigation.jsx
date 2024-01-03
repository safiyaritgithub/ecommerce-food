import { useState } from "react";
import { Navbar } from './navbar'
import { Drawer } from "./drawer";



export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
  <Drawer menuOpen={menuOpen} toggleMenu={toggleMenu}/>
  <Navbar toggleMenu={toggleMenu}/>
    </>
  )
}
