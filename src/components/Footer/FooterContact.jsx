import PhoneIcon from "../../assets/images/icon-phone.svg";
import EmailIcon from "../../assets/images/icon-email.svg";

export const FooterContact = () => {
    return (
        <div className="flex flex-col items-start justify-center 
                        md:order-3 lg:order-2 lg:items-center lg:justify-start">
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-5">
                    <img className="h-5 w-5 cursor-pointer hover:scale-110"
                        src={PhoneIcon} alt="_phone" />
                    <p className="font-sans">+1-543-123-4567</p>
                </div>
                <div className="flex flex-row gap-5">
                    <img className="h-5 w-5 cursor-pointer hover:scale-110"
                        src={EmailIcon} alt="_email" />
                    <p>example@fylo.com</p>
                </div>
            </div>
        </div>
    )
}
