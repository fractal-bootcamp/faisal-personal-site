interface SkillsProps {
    title: string,
    skills: string[],
}

const Skills = (props: SkillsProps) => {
    const { title, skills } = props

    return (
        <section 
            id="skills" 
            className="flex flex-col justify-center items-center py-10"
        >
            <header id="skills-title">
                <h2 className="text-2xl font-bold mb-4">
                    {title}
                </h2>
            </header>
            <div 
                id="skills-skills" 
                className="flex flex-wrap gap-2 max-w-2xl"
            >
                {skills.map((skill) => (
                    <div 
                        key={skill} 
                        className="badge badge-ghost p-3 text-sm"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills