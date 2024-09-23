interface HeroProps {
    title: string,
    subTitle: string,
    body: string,
    imgUrl: string,

}

const Hero = (props: HeroProps) => {
    const { title, subTitle, body, imgUrl } = props
    return (
        <section
            id="hero"
            className="flex flex-col md:flex-row justify-center items-center py-10"
        >
            <div 
                id="text-section"
                className="max-w-2xl flex flex-col justify-center items-start mb-8 md:mb-0 md:mr-10"
            >
                <header 
                    id="hero-title"
                    className="hero-title"
                >
                    <h1 className="text-4xl font-bold mb-4">
                        {title}
                    </h1>
                </header>
                <div 
                    id="hero-subtitle"
                    className="text-4xl font-bold mb-4"
                >
                    <h1 className="text-4xl font-bold mb-6">
                        {subTitle}
                    </h1>
                </div>
                <div 
                    id="hero-body"
                    className="text-base leading-relaxed"
                >
                    <p>{body}</p>
                </div>
            </div>
            <div 
                id="hero-profile-pic"
                className="max-w-2xl flex justify-center"
            >
                <img
                    src={imgUrl}
                    alt="Faisal profile picture."
                    className="w-40 h-40 rounded-full object-cover shadow-lg"
                />
            </div>
        </section>
    )
}

export default Hero