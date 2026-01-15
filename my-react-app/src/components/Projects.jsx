function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Guess Craft – Number Guessing Game</h3>
          <p>
            An interactive number guessing game focused on logical thinking and
            user input validation. Designed to strengthen problem-solving skills
            through simple and engaging gameplay.
          </p>
        </div>

        <div className="project-card">
          <h3>Java Quiz Application</h3>
          <p>
            A console-based quiz application consisting of three quizzes:
            <strong> C++, Python, and Java</strong>. Includes multiple-choice
            questions, score calculation, and result evaluation using OOP
            concepts.
          </p>
        </div>

        <div className="project-card">
          <h3>Scientific Calculator</h3>
          <p>
            A scientific calculator capable of performing arithmetic and
            mathematical operations such as powers, roots, and trigonometric
            functions with accurate results.
          </p>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website built to showcase my skills, projects,
            and contact information. Developed with a clean UI and responsive
            design.
          </p>
        </div>

      </div>
    </section>
  );
}
export default Projects;
