import LocationIcon from "/public/images/icon-location.svg";

export const FooterDirection = () => {
    return (
        <div className="flex flex-row gap-5 md:items-center md:order-1 lg:order-1 lg:items-start">
            <img className="min-h-5 min-w-5 self-start md:self-auto hover:scale-110 cursor-pointer"
                src={LocationIcon} alt="_location" />
            <p className="font-sans max-w-fit text-balance">
                Calle de los Sueños 666 Ciudad Soñada, SO 12345 País de las Maravillas, Imaginario S.A.</p>
        </div>
    )
}
