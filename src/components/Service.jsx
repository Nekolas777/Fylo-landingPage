import ServiceIcon from "../assets/images/illustration-stay-productive.png";
import ArrowIcon from "../assets/images/icon-arrow.svg";

export const Service = () => {

    return (
        <section className="bg-main py-20" id="service">
            <div className="container-section grid grid-auto-rows grid-cols-1 gap-10 
                md:grid-rows-1 md:grid-cols-2 md:gap-5 lg:gap-0">
                <div>
                    <img className="w-full h-full" src={ServiceIcon} />
                </div>
                <div className="font-raleway text-wrap text-center md:text-start
                    flex flex-col gap-5 justify-center p-0 lg:pl-14 lg:pr-6">
                    <h1 className="text-4xl text-wrap text-primary font-semibold leading-snug">
                        Stay Productive,<br /> wherever you are</h1>
                    <p className="text-base text-slate-300">Never let location be in issue when accessing your files. Fylo has you covered
                        for all of your file storage needs.</p>
                    <p className="text-base text-slate-300">Securely share files and folders with friends, family and colleagues for live
                        collaboration. No email attachments required</p>
                    <div className="flex flex-row items-center gap-2 justify-center md:justify-start">
                        <a
                            style={{ position: "relative" }}
                            href="/"
                            /* -underline effect- is a custom compoonent, go to index.css to see */
                            className="text-cta_hover inline-flex items-center gap-2 underline-effect after:bg-cta_hover"
                        >
                            See how Fylo works <img className="w-4 h-4" src={ArrowIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )

}
