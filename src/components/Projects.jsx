
import "./Projects.css"

function Projects() {
    const projects = [
        {
            title: "E-Commerce Website",
            description: "Built using React and Context API"
        },
        {
            title: "Portfolio Website",
            description: "Responsive personal portfolio"
        }
    ];
    return (
        <section>
            <h2>Projects</h2>

           
                    <section id="projects">

                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </section>
        </section>
    );
}

export default Projects;

// function Projects() {
//     const projects = [
//         {
//             title: "E-Commerce Website",
//             description: "Built using React and Context API"
//         },
//         {
//             title: "Portfolio Website",
//             description: "Responsive personal portfolio"
//         }
//     ];

//     return (
//         <section id="projects">
//             <h2>Projects</h2>

//             <img
//                 src="/assets/project1.png"
//                 alt="Project"
//                 loading="lazy"
//             />

//             {projects.map((project, index) => (
//                 <div key={index} className="project-card">
//                     <h3>{project.title}</h3>
//                     <p>{project.description}</p>
//                 </div>
//             ))}
//         </section>
//     );
// }

// export default Projects;