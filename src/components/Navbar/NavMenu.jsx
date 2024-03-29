import { NavLink } from "./NavLink";

const links = [
    { name: 'Features', path: "#feature" },
    { name: 'Team', path: "#service" },
    { name: 'Testimonials', path: "#testimonials" },
]

export const NavMenu = ({ nav }) => {

    return (
        <div className={`w-11/12 fixed opacity-100 mx-auto
          ${nav ? 'top-36 translate-x-[0%] opacity-100 transition-all duration-300 ease-out' : 'translate-x-[-120%] opacity-0'} 
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
    )
}
