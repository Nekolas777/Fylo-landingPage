const hoverTextCyan = "hover:text-cta_hover duration-200 transition-all ease-linear";

export const FooterLinks = () => {
    return (
        <div className="flex flex-col gap-10 justify-center
                        md:gap-3 md:flex-col md:order-2 lg:gap-14 lg:flex-row lg:order-3 lg:justify-center">
            <ul className="flex flex-col md:flex-row lg:flex-col gap-3">
                <li><a className={hoverTextCyan} href="/">About us</a></li>
                <li><a className={hoverTextCyan} href="/">Jobs</a></li>
                <li><a className={hoverTextCyan} href="/">Press</a></li>
                <li><a className={hoverTextCyan} href="/">Service</a></li>
            </ul>
            <ul className="flex flex-col md:flex-row lg:flex-col gap-3">
                <li><a className={hoverTextCyan} href="/">Contact us</a></li>
                <li><a className={hoverTextCyan} href="/">Terms</a></li>
                <li><a className={hoverTextCyan} href="/">Privacy</a></li>
                <li><a className={hoverTextCyan} href="/">Questions</a></li>
            </ul>
        </div>
    )
}
