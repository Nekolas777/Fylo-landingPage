import HeroImg from "../assets/images/illustration-intro.png"
import { Button } from "./Button"

/* className="w-6/12 mx-auto border-[1px] border-gray-100 flex flex-col items-center 
                    justify-center gap-5 text-primary" */

export const Hero = () => {

    return (
        <section id="hero" className="bg-intro py-5 pb-20">
            <div className="container-section border-[1px] border-gray-100 flex flex-col items-center">
                <img src={HeroImg} className="max-w-[38rem] w-full" />
                <div className="font-raleway text-center mt-12 max-w-[38rem] flex flex-col items-center gap-7 px-2 md:px-10">
                    <h1 className="text-4xl text-wrap text-primary font-semibold leading-normal">
                        All your file in one secure location, accesible anywhere.</h1>
                    <p className="text-lg text-wrap text-slate-300 font-medium">
                        Fylo stores all your must important files in one secure location.
                        Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                    <Button />
                </div>
            </div>
        </section>
    )

}
