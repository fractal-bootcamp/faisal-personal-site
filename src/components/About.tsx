interface AboutProps {
    title: string,
    body: string,
}

const About = (props: AboutProps) => {
    const { title, body } = props
    return (
        <section 
            id="about" 
            className="flex flex-col justify-center items-center py-10"
        >
            <header id="about-title">
                <h2
                    className="text-2xl font-bold mb-6"
                >
                    {title}
                </h2>
            </header>
            <div 
                id="about-body" 
                className="max-w-2xl"
            >
                <p className="text-base leading-relaxed text-center">
                    {body}
                </p>
            </div>
        </section>
    )
}

export default About