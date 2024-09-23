interface ProjectsProps {
    title: string,

}

const Projects = (props: ProjectsProps) => {
    const { title } = props

    return (
        <section 
            id="projects"
            className="flex flex-col justify-center items-center py-10"
        >
            <header id="project-title">
                <h2 className="text-2xl font-bold mb-4">
                    {title}
                </h2>
            </header>
        </section>
    )
}

export default Projects