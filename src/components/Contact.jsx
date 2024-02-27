
export const Contact = () => {
    
  return (
    <section className="bg-transparent py-20 hidden" id="contact">
        <div className="container-section border-[1px] border-purple-500 px-40">
            <div className="h-full text-primary text-center font-raleway bg-slate-800 rounded-lg p-10 flex flex-col 
                px-24 shadow-xl">
                <h1 className="text-4xl text-wrap text-primary font-semibold leading-snug">Get Early access today</h1>
                <p className="text-wrap mt-6 mb-9">It only takes a minute to sign up and our free starter tier is extremely 
                    generous. If you have any questions, our support team would be happy to help you.</p>
                <div className="flex flex-row gap-5">
                    <input className="rounded-full p-2 py-4 flex-1 indent-5 text-slate-950" 
                        type="email" placeholder="email@example.com"/>
                    <button className="rounded-full bg-cta px-6">Get Started For Free</button>
                </div>
            </div>
        </div>
    </section>
  )

}
