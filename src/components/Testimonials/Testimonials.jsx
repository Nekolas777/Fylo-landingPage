import ProfileOne from "../../assets/images/profile-1.jpg";
import ProfileTwo from "../../assets/images/profile-2.jpg";
import ProfileThree from "../../assets/images/profile-3.jpg";
import QuoteImage from "../../assets/images/bg-quotes.png";

export const Testimonials = () => {

    return (
        <section className="bg-main pt-24 pb-96" id="testimonials">
            <div className="relative container-section">
                <div className="relative font-raleway text-primary text-wrap grid grid-rows-3 grid-cols-1 gap-10 px-0
                    md:grid-rows-1 md:grid-cols-3 md:gap-5 lg:gap-10 lg:px-3">
                    <img className="absolute z-10 -translate-y-11" src={ QuoteImage }></img>
                    <article className="bg-testimonial flex flex-col justify-center gap-6 px-8 pt-10 pb-6 rounded-lg">
                        <p className="text-base text-slate-300 font-medium">Fylo has improved our team productivity by an order of magnitude. Since making the switch
                            our team has become a well-oiled collaboration machine.</p>
                        <div className="flex flex-row items-center gap-3">
                            <img className="rounded-full w-10" src={ ProfileOne }></img>
                            <div className="h-full flex flex-col justify-between">
                                <h3 className="font-semibold">Satish Patel</h3>
                                <small className="font-extralight">Founder & CEO, Huddle</small>
                            </div>
                        </div>
                    </article>
                    <article className="bg-testimonial flex flex-col justify-center gap-5 px-8 pt-10 pb-6 rounded-lg">
                        <p className="text-base text-slate-300 font-medium">Fylo has significantly enhanced our team productivity. Since making the transition, our team has evolved into a 
                            seamlessly coordinated collaboration team.</p>
                        <div className="flex flex-row items-center gap-3">
                            <img className="rounded-full w-10" src={ ProfileTwo }></img>
                            <div className="h-full flex flex-col justify-between">
                                <h3 className="font-semibold">Bruce McKenzie</h3>
                                <small className="font-extralight">Founder & CEO, Huddle</small>
                            </div>
                        </div>
                    </article>
                    <article className="bg-testimonial flex flex-col justify-center gap-5 px-8 pt-10 pb-6 rounded-lg">
                        <p className="text-base text-slate-300 font-medium">Our team now operates with unparalleled efficiency, and the collaborative synergy is 
                            truly remarkable. Fylo has undoubtedly propelled heights of productivity.</p>
                        <div className="flex flex-row items-center gap-3">
                            <img className="rounded-full w-10" src={ ProfileThree }></img>
                            <div className="h-full flex flex-col justify-between">
                                <h3 className="font-semibold">Iva Boyd</h3>
                                <small className="font-extralight">Founder & CEO, Huddle</small>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )

}
