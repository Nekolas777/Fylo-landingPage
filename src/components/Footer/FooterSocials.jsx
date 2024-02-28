import FacebookIcon from "../../assets/images/facebook.svg"
import TwitterIcon from "../../assets/images/twitter.svg"
import InstagramIcon from "../../assets/images/instagram.svg"

const hoverBgCyan = "hover:bg-cta duration-200 transition-all ease-linear"

export const FooterSocials = () => {
    return (
        <div className="flex items-start justify-center md:items-center md:justify-start 
                        md:order-4 lg:order-4 lg:items-start lg:justify-center">
            <div className="flex flex-row gap-4 justify-self-end">
                <a className={`social-effect ${hoverBgCyan}`} href="/" >
                    <img className="w-4 h-4" src={FacebookIcon} alt="_facebook" />
                </a>
                <a className={`social-effect ${hoverBgCyan}`} href="/" >
                    <img className="w-4 h-4" src={TwitterIcon} alt="_twitter" />
                </a>
                <a className={`social-effect ${hoverBgCyan}`} href="/" >
                    <img className="w-4 h-4" src={InstagramIcon} alt="_instagram" />
                </a>
            </div>
        </div>
    )
}
