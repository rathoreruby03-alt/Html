import "./skills.css";

function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git",
        "GitHub",
        "SQL",
    ];

    return (
        <section id="skills" className="skills-section">
            <h2>My Skills</h2>

            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;