
export const FeatureCard = ({ name, description, img }) => {

    return (
        <article className="text-primary text-center text-wrap
            flex flex-col items-center px-10">
            <img className="w-18 h-20" src={ img } alt={ name } />
            <h2 className="text-xl font-semibold mt-7 mb-2">{ name }</h2>
            <p className="text-base text-slate-300">{ description }</p>
        </article>
    )

}
