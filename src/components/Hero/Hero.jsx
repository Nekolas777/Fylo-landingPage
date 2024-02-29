import HeroImg from "/public/images/illustration-intro.png"
import './Hero.css';

export const Hero = () => {

    return (
        <section id="hero" className="bg-intro border-[1px] py-10 pb-20">
            <div className="container-section flex flex-col items-center">
                <img src={HeroImg} className="max-w-[38rem] w-full" />
                <div className="font-raleway text-center mt-12 max-w-[38rem] flex flex-col items-center gap-7 px-2 md:px-10">
                    <h1 className="text-4xl text-wrap text-primary font-semibold leading-normal">
                        All your file in one secure location, accesible anywhere.</h1>
                    <p className="text-lg text-wrap text-slate-300 font-medium">
                        Fylo stores all your must important files in one secure location.
                        Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                    <button className="btn-cta py-4 px-20">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )

}
