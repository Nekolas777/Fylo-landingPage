import Favicon from "../../assets/images/logo.svg";
import { FooterDirection } from "./FooterDirection";
import { FooterContact } from "./FooterContact";
import { FooterLinks } from "./FooterLinks";
import { FooterSocials } from "./FooterSocials";

export const Footer = () => {

    return (
        <footer className="bg-footer pt-52 pb-16" id="footer">
            <div className="container-footer">
                <img className="min-w-36 mb-16" src={Favicon} />
                <div className="text-primary font-raleway grid grid-auto-rows grid-cols-1 gap-10
                    md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg: lg:grid-cols-4" >
                    <FooterDirection />
                    <FooterContact />
                    <FooterLinks />
                    <FooterSocials />
                </div>
            </div>
        </footer>
    )

}
