
export const TestimonialCard = ({ name, description, img, job }) => {

    return (
        <article className="bg-testimonial flex flex-col justify-center gap-6 px-8 pt-10 pb-6 rounded-lg">
            <p className="text-base text-slate-300 font-medium">{ description }</p>
            <div className="flex flex-row items-center gap-3">
                <img className="rounded-full w-10" src={ img } alt={ name }></img>
                <div className="h-full flex flex-col justify-between">
                    <h3 className="font-semibold">{ name }</h3>
                    <small className="font-extralight">{ job }</small>
                </div>
            </div>
        </article>
    )

}
