import resumePDF from "../assets/Ruby.pdf";

function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>

            <p>Download my resume below.</p>

            <a href={resumePDF} download>
                <button>Download Resume</button>
            </a>
        </section>
    );
}

export default Resume;
