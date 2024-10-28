import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Qualification.css";

const QualificationTimeline = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="qualification section">
      <div className="container">
        <h2 className="section-title text-center mb-4">Qualification</h2>
        <p className="text-center text-muted mb-5">My personal journey</p>

        {/* Tabs */}
        <div className="qualification__tabs d-flex justify-content-center gap-4 mb-5">
          <button
            className={`qualification__button btn btn-link d-flex align-items-center gap-2 ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <i className="bi bi-mortarboard fs-5"></i>
            Education
          </button>
          <button
            className={`qualification__button btn btn-link d-flex align-items-center gap-2 ${
              activeTab === "work" ? "active" : ""
            }`}
            onClick={() => setActiveTab("work")}
          >
            <i className="bi bi-briefcase fs-5"></i>
            Work
          </button>
        </div>

        {/* Content */}
        <div className="qualification__sections">
          {/* Education Content */}
          <div
            className={`qualification__content ${
              activeTab === "education" ? "d-block" : "d-none"
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Front-End Web Development
                </h3>
                <span className="qualification__subtitle">
                  Advanced React Certification
                </span>
                <div className="qualification__calendar">
                  <i className="bi bi-calendar3"></i> 2023 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  React - The Complete Guide
                </h3>
                <span className="qualification__subtitle">
                  Udemy - Jonas Schmedtmann
                </span>
                <div className="qualification__calendar">
                  <i className="bi bi-calendar3"></i> 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  JavaScript & CSS Course
                </h3>
                <span className="qualification__subtitle">
                  Elzero Web School
                </span>
                <div className="qualification__calendar">
                  <i className="bi bi-calendar3"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          {/* Work Content */}
          <div
            className={`qualification__content ${
              activeTab === "work" ? "d-block" : "d-none"
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-End Developer</h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__calendar">
                  <i className="bi bi-calendar3"></i> 2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Administrative Assistant
                </h3>
                <span className="qualification__subtitle">
                  Lycée Ibn Abdoun
                </span>
                <div className="qualification__calendar">
                  <i className="bi bi-calendar3"></i> 2022 (3 months)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationTimeline;
