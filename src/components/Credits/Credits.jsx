import HeartIcon from "../../assets/images/heart-icon.png";

export const Credits = () => {
    return (
        <div className="w-full py-3 text-primary font-raleway bg-slate-950
            font-medium flex flex-row items-center justify-center tracking-wider" >
            Created with <img className="w-5 h-5 mx-2" src={ HeartIcon } alt="_heart" /> 
            by <strong className="ml-2 text-cyan-300">Neko</strong>las
        </div>
    )
}
