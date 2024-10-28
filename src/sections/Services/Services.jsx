import { useState } from "react";
import { Server, Database, Layout, Code, Cloud } from "lucide-react";

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <Layout size={40} />,
      details: [
        "React.js & Redux for state management",
        "Modern React Hooks & Custom Hooks",
        "Responsive UI with Bootstrap/Material-UI",
        "RESTful API integration & Axios",
        "React Router for SPA navigation",
        "Form handling with Formik/React Hook Form",
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <Server size={40} />,
      details: [
        "Node.js & Express.js REST APIs",
        "JWT Authentication & Authorization",
        "API Security & Rate Limiting",
        "File Upload & Image Processing",
        "Email Services Integration",
        "Payment Gateway Integration (Stripe)",
      ],
    },
    {
      id: "database",
      title: "Database Management",
      icon: <Database size={40} />,
      details: [
        "MongoDB Database Design",
        "Mongoose ODM Integration",
        "Complex Aggregation Pipelines",
        "Data Validation & Sanitization",
        "Indexing & Query Optimization",
        "Database Backup & Recovery",
      ],
    },
    {
      id: "deployment",
      title: "DevOps & Deployment",
      icon: <Cloud size={40} />,
      details: [
        "AWS/Heroku/Digital Ocean Deployment",
        "Docker Containerization",
        "CI/CD Pipeline Setup",
        "Environment Configuration",
        "Performance Optimization",
        "Server Monitoring & Logging",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-4">My Services</h2>
        <p className="lead text-muted">Full Stack MERN Development Solutions</p>
      </div>

      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-lg-6">
            <div
              className="card h-100 shadow-sm position-relative hover-shadow"
              onClick={() =>
                setExpandedCard(expandedCard === service.id ? null : service.id)
              }
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="card-body text-center p-4">
                <div className="mb-3 text-primary">{service.icon}</div>
                <h3 className="card-title h4 mb-3">{service.title}</h3>
                <button className="btn btn-outline-primary mt-2">
                  View Details
                </button>
              </div>

              {expandedCard === service.id && (
                <div
                  className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    zIndex: 1050,
                  }}
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      setExpandedCard(null);
                    }
                  }}
                >
                  <div className="card w-75 mx-auto">
                    <div className="card-body position-relative p-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(null);
                        }}
                        className="btn-close position-absolute top-0 end-0 m-3"
                        aria-label="Close"
                      ></button>

                      <div className="text-center mb-4">
                        <div className="text-primary mb-3">{service.icon}</div>
                        <h3 className="card-title">{service.title}</h3>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <ul className="list-group list-group-flush">
                            {service.details.map((detail, index) => (
                              <li
                                key={index}
                                className="list-group-item d-flex align-items-center"
                              >
                                <Code size={20} className="text-primary me-2" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
