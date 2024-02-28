import { useEffect, useRef, useState } from "react";
import { NavLink } from "./NavLink";

import Favicon from "../../assets/images/logo.svg";
import HamburguerMenu from "../../assets/images/hamburguer.svg";
import CloseMenu from "../../assets/images/close.svg";

const body = document.body;

const links = [
  { name: 'Features', path: "#feature" },
  { name: 'Team', path: "#service" },
  { name: 'Testimonials', path: "#testimonials" },
]

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
        <div className={`w-11/12 fixed opacity-100 mx-auto
          ${nav? 'top-32 translate-x-[0%] opacity-100 transition-all duration-300 ease-out' : 'translate-x-[-120%] opacity-0'} 
          md:relative md:flex md:h-auto md:w-auto md:mx-0 md:transform-none md:content-none md:transition-none`}>
          <ul className="h-full bg-slate-100 flex flex-col place-items-center gap-6 py-6 rounded-lg 
              md:relative md:flex md:flex-row md:gap-12 md:rounded-none md:py-0 md:bg-transparent
              font-raleway text-xl">
            {
              links.map(link => 
                <NavLink 
                  key={link.name} name={link.name} path={link.path}
                />
              )
            }
            <button className="btn-cta py-3 px-8">
                Sign in
            </button>
          </ul>
        </div>
        <div onClick={ toogleNav } className="block md:hidden cursor-pointer">
          {nav? <img src={ CloseMenu } className="w-6"/> : <img src={ HamburguerMenu } className="w-6"/>}
        </div>
      </nav>
    </header>
  )

}
