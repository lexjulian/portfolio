
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project Container",
      image: "https://via.placeholder.com/300x200", // Add your own image
      description: "Enter the project description",
      link: "/project/sample-project"
    },
    {
      id: 2,
      title: "Project Container",
      image: "https://via.placeholder.com/300x200", // Add your own image
      description: "Enter the project description",
      link: "/project/sample-project"
    },
    // Add more projects here...
    {
      id: 3,
      title: "Project Container",
      image: "https://via.placeholder.com/300x200", // Add your own image
      description: "Enter the project description",
      link: "/project/sample-project"
    },
    {
      id: 4,
      title: "Project Container",
      image: "https://via.placeholder.com/300x200", // Add your own image
      description: "Enter the project description",
      link: "/project/sample-project"
    },

  ];

  return (
    <div className="container">
      <h1 className="title">Projects</h1>
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

