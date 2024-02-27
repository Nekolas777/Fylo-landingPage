
export const Contact = () => {

    return (
        <section className="relative w-11/12 max-w-[1000px] mx-auto">
            <div className="absolute z-40 px-0 -translate-y-72 md:-translate-y-48">
                <div className="text-primary text-center font-raleway 
                bg-slate-900 rounded-lg py-12 flex flex-col px-8 md:px-10 lg:px-24 shadow-xl">
                    <h1 className="text-2xl md:text-4xl text-pretty text-primary font-semibold leading-snug">Get early access today</h1>
                    <p className="text-pretty mt-6 mb-9 px-0 xl:px-8">It only takes a minute to sign up and our free starter tier is extremely
                        generous. If you have any questions, our support team would be happy to help you.</p>
                    <div className="flex flex-col md:flex-row gap-6">
                        <input className="rounded-full p-2 py-3 flex-1 indent-5 text-slate-950"
                            type="email" placeholder="email@example.com" />
                        <button className="text-lg font-bold rounded-full bg-cta px-6 py-3">Get Started For Free</button>
                    </div>
                </div>
            </div>
        </section>
    )

}
