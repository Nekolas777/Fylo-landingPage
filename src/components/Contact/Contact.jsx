import { useRef, useState } from "react";

export const Contact = () => {

    const [formState, setFormState] = useState({});
    const [InputError, setInputError] = useState(false);

    const buttonRef = useRef(null);

    // para controlar la renderizacion cuando description es undefined
    const { description = '' } = formState;

    const onInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })

    }

    const handleSubmit = () => {

        if (description.length <= 0) return;

        if (!description.includes('@')) {

            setInputError(true);
            buttonRef.current.disabled = true;

            setTimeout(() => {

                setInputError(false);
                buttonRef.current.disabled = false;
                
            }, 2500);
        }

    }

    return (
        <section className="relative w-11/12 max-w-[1000px] mx-auto" id="contact">
            <div className="absolute z-40 px-0 -translate-y-72 md:-translate-y-48">
                <div className="relative text-primary text-center font-raleway 
                bg-slate-800 rounded-lg py-12 flex flex-col px-8 md:px-10 lg:px-24 shadow-xl">
                    <h1 className="text-2xl md:text-4xl text-pretty text-primary font-semibold leading-snug">Get early access today</h1>
                    <p className="text-pretty mt-6 mb-9 px-0 xl:px-8">It only takes a minute to sign up and our free starter tier is extremely
                        generous. If you have any questions, our support team would be happy to help you.</p>
                    <div className="relative flex flex-col md:flex-row gap-6">
                        <input 
                            className="font-sans rounded-full p-2 py-3 flex-1 indent-5 text-slate-950"
                            type="email" 
                            placeholder="email@example.com" 
                            name="description"
                            value={ description }
                            onChange={ onInputChange }
                        />
                        <button 
                            ref={ buttonRef }
                            className="btn-cta px-6 py-3" 
                            onClick={ handleSubmit }
                            >Get Started For Free
                        </button>
                        {
                            InputError && 
                            <small 
                                className="text-error font-semibold text-sm w-full absolute bottom-0 pl-0 
                                    translate-y-8 text-center md:text-start md:pl-6"
                                >Please enter a valid email address
                            </small>
                        }
                    </div>
                </div>
            </div>
        </section>
    )

}
