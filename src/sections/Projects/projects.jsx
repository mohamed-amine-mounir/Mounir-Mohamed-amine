import "./Projects.css";
import proj1 from "./ecomerce.png";
import proj2 from "./resaurant.png";

const Projects = () => {
  const projects = [
    {
      img: proj1,
      title: "Advanced E-commerce Platform",
      description: `A feature-rich e-commerce platform built with Vite and React, styled with TailwindCss for enhanced responsiveness. Key features include:
        • Comprehensive product catalog with search and filter options
        • Real-time shopping cart with persistent state management
        • Secure checkout process with multiple payment options
        • User authentication and profile management
        • Responsive design ensuring a seamless experience across all devices
        • Performance optimization for fast loading times
        
        This project showcases proficiency in building complex, scalable web applications with modern technologies and best practices in e-commerce development.`,
      technologies: [
        "Vite",
        "React",
        "Tailwind CSS",
        "React Router",
        "Framer Motion",
        "Swiper.js",
      ],
      url: "https://e-commerce-five-iota-38.vercel.app/",
    },
    {
      img: proj2,
      title: "Aurum - Hotel & Restaurant Management App",
      description: `A comprehensive web application for hotel and restaurant management, showcasing:
    
      • Dynamic menu with category filtering
      • Interactive slideshow for amenities
      • Integrated hotel services and contact information
      • Fitness center schedule and pricing
      • Responsive design for all devices
    
      Built with modern web technologies, this project demonstrates proficiency in creating complex, user-friendly applications for the hospitality industry.`,
      technologies: [
        "Vite",
        "React",
        "Tailwind CSS",
        "React Router",
        "Framer Motion",
        "Swiper.js",
      ],
      url: "//aurum-beta.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.img} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.url}
                    className="btn btn-view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
