import { useEffect, useState } from "react";

import Favicon from "../../assets/images/logo.svg";
import HamburguerMenu from "../../assets/images/hamburguer.svg";
import CloseMenu from "../../assets/images/close.svg";
import { NavMenu } from "./NavMenu";

const body = document.body;

export const NavBar = () => {

  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  const toogleNav = () => {
    setNav(!nav);

    body.classList.toggle('overlay');
  }

  const changeBackground = () => {
    setHeader(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, []);
  

  return (
    <header className={`w-full sticky top-0 z-50 ${header? "bg-gray-900": "bg-intro"} 
      transition-all duration-300 ease`}>
      <nav className="container relative min-h-full h-28 flex items-center justify-between">
        <a href="#"><img className="min-w-36" src={ Favicon }/></a>
        <NavMenu
          nav={ nav }
        />
        <div onClick={ toogleNav } className="block md:hidden cursor-pointer">
          {nav? <img src={ CloseMenu } className="w-6"/> : <img src={ HamburguerMenu } className="w-6"/>}
        </div>
      </nav>
    </header>
  )

}
