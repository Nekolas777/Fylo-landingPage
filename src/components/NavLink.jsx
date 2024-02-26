
export const NavLink = ({ name, path }) => {

    return (
        <li className="text-primary font-light ease-in-out tracking-wide self-center">
            <a 
                style={{ position: 'relative'}}
                className="transform-none after:content-none md:after:content-[''] after:w-0 after:h-[2px] after:bg-primary 
                    after:absolute after:m-auto after:bottom-[-4px] after:left-0 after:block
                    hover:after:w-full hover:after:transition-all duration-300 ease-linear"
                href={ path } 
                rel="noopener noreferrer"
            >
            { name }</a>
        </li>
    )

}
