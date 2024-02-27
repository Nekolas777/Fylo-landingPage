import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./Button";

import Favicon from "../assets/images/logo.svg";
import HamburguerMenu from "../assets/images/hamburguer.svg";
import CloseMenu from "../assets/images/close.svg";

const links = [
  { name: 'Features', path: "#feature" },
  { name: 'Team', path: "#service" },
  { name: 'Testimonials', path: "#testimonials" },
]

export const NavBar = () => {

  const [nav, setNav] = useState(false);

  const toogleNav = () => {
    setNav(!nav);
  }

  //flex flex-row gap-12 text-xl text-primary font-raleway font-light

  return (
    <header className="w-full bg-intro sticky top-0 z-50">
      <nav className="container relative min-h-full h-32 flex items-center justify-between">
        <a href="#"><img className="min-w-36" src={ Favicon }/></a>
        <div className={`h-[unset] w-11/12 fixed mx-auto ${nav? 'translate-y-[80%]' : 'translate-y-[-100%]'} 
          md:relative md:flex md:transform-none md:h-auto md:w-auto md:mx-0`}>
          <ul className="h-full bg-slate-500 flex flex-col place-items-center gap-6 py-6 rounded-lg 
              md:relative md:flex md:flex-row md:gap-12 md:rounded-none md:py-0 md:bg-transparent
              font-raleway text-xl">
            {
              links.map(link => 
                <NavLink 
                  key={link.name} name={link.name} path={link.path}
                />
              )
            }
            <Button/> 
          </ul>
        </div>
        <div onClick={ toogleNav } className="block md:hidden cursor-pointer">
          {nav? <img src={ CloseMenu } className="w-6"/> : <img src={ HamburguerMenu } className="w-6"/>}
        </div>
      </nav>
    </header>
  )

}
