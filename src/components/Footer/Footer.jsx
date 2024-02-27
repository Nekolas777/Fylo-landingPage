import Favicon from "../../assets/images/logo.svg";
import LocationIcon from "../../assets/images/icon-location.svg";
import PhoneIcon from "../../assets/images/icon-phone.svg";
import EmailIcon from "../../assets/images/icon-email.svg";
import FacebookIcon from "../../assets/images/facebook.svg"
import TwitterIcon from "../../assets/images/twitter.svg"
import InstagramIcon from "../../assets/images/instagram.svg"

const hoverTextCyan = "hover:text-cta_hover duration-200 transition-all ease-linear";
const hoverBgCyan = "hover:bg-cta duration-200 transition-all ease-linear"

export const Footer = () => {

    return (
        <footer className="bg-footer pt-52 pb-16" id="footer">
            <div className="container-footer">
                <img className="min-w-36 mb-16" src={Favicon} />
                <div className="text-primary font-raleway grid grid-auto-rows grid-cols-1 gap-10
                    md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg: lg:grid-cols-4" >
                    <div className="flex flex-row gap-5 md:items-center 
                        md:order-1 lg:order-1 lg:items-start">
                        <img className="min-h-5 min-w-5 self-start md:self-auto" src={ LocationIcon } alt="_location"/>
                        <p className="font-sans max-w-fit text-balance">
                            Calle de los Sueños 666 Ciudad Soñada, SO 12345 País de las Maravillas, Imaginario S.A.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center 
                        md:order-3 lg:order-2 lg:items-center lg:justify-start">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-5">
                                <img className="h-5 w-5 cursor-pointer" src={PhoneIcon} alt="_phone"/>
                                <p className="font-sans">+1-543-123-4567</p>
                            </div>
                            <div className="flex flex-row gap-5">
                                <img className="h-5 w-5 cursor-pointer" src={EmailIcon} alt="_email"/>
                                <p>example@fylo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 justify-center
                        md:gap-3 md:flex-col md:order-2 lg:gap-14 lg:flex-row lg:order-3 lg:justify-center">
                        <ul className="flex flex-col md:flex-row lg:flex-col gap-3">
                            <li><a className={ hoverTextCyan } href="/">About us</a></li>
                            <li><a className={ hoverTextCyan } href="/">Jobs</a></li>
                            <li><a className={ hoverTextCyan } href="/">Press</a></li>
                            <li><a className={ hoverTextCyan } href="/">Service</a></li>
                        </ul>
                        <ul className="flex flex-col md:flex-row lg:flex-col gap-3">
                            <li><a className={ hoverTextCyan } href="/">Contact us</a></li>
                            <li><a className={ hoverTextCyan } href="/">Terms</a></li>
                            <li><a className={ hoverTextCyan } href="/">Privacy</a></li>
                            <li><a className={ hoverTextCyan } href="/">Questions</a></li>
                        </ul>
                    </div>
                    <div className="flex items-start justify-center md:items-center md:justify-start 
                        md:order-4 lg:order-4 lg:items-start lg:justify-center">
                        <div className="flex flex-row gap-4 justify-self-end">
                            <a className={`social-effect ${ hoverBgCyan }`} href="/" >
                                <img className="w-4 h-4" src={FacebookIcon} alt="_facebook"/>
                            </a>
                            <a className={`social-effect ${ hoverBgCyan }`} href="/" >
                                <img className="w-4 h-4" src={TwitterIcon} alt="_twitter"/>
                            </a>
                            <a className={`social-effect ${ hoverBgCyan }`} href="/" >
                                <img className="w-4 h-4" src={InstagramIcon} alt="_instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}
