
export const NavLink = ({ name, path }) => {

    return (
        <li className="text-primary font-light ease-in-out tracking-wide self-center">
            <a 
                style={{ position: 'relative'}}
                className="transform-none underline-effect after:bg-primary"
                href={ path } 
                rel="noopener noreferrer"
            >
            { name }</a>
        </li>
    )

}
