
function Projects() {
  const projects = [
    {
      id: 1,
      title: "React Portfolio Website",
      image: "https://via.placeholder.com/300x200", // Add your own image
      description: "A modern portfolio website built with React, showcasing various projects.",
      link: "/project/react-portfolio"
    },
    {
      id: 2,
      title: "JavaScript Weather App",
      image: "https://via.placeholder.com/300x200", // Add your own image
      description: "A simple weather application that fetches data from an API.",
      link: "/project/weather-app"
    },
    // Add more projects here...
  ];

  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

