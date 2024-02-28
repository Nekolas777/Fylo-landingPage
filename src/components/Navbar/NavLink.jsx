
export const NavLink = ({ name, path }) => {

    return (
        <li className="text-secondary font-medium tracking-wide self-center md:text-primary 
            md:font-light md:transform-none">
            <a 
                style={{ position: 'relative'}}
                className="underline-effect after:bg-primary md:transition-none"
                href={ path } 
                rel="noopener noreferrer"
            >
            { name }</a>
        </li>
    )

}
