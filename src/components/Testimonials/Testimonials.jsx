import QuoteImage from "../../assets/images/bg-quotes.png";
import { TestimonialCard } from "./TestimonialCard";

import data from "../../static/Testimonials.json";

export const Testimonials = () => {

    return (
        <section className="bg-main pt-24 pb-96" id="testimonials">
            <div className="relative container-section">
                <div className="relative font-raleway text-primary text-wrap grid grid-rows-3 grid-cols-1 gap-10 px-0
                    md:grid-rows-1 md:grid-cols-3 md:gap-5 lg:gap-10 lg:px-3">
                    <img className="absolute z-10 -translate-y-11" src={ QuoteImage }></img>
                    {
                        data.map(item => 
                            <TestimonialCard
                                key={item.id} {...item}
                            />    
                        ) 
                    }
                </div>
            </div>
        </section>
    )

}
