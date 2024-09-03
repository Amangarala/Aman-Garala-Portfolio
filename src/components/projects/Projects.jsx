import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div id="projects"></div>
      <section className="services section" id="projects" data-aos="fade-up">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle" style={{ color: "#1AB9A7" }}>
          What I have worked on
        </span>

        <div className="services__container container grid">
          <div className="services__content">
            <div style={{ padding: "0" }}>
              
              <img
                className="services__img"
                src={require("../../assets/StudyNotion.png")}
                alt=""
              />
              <h3 className="services__title">
                Study Notion
                <h5>Web App</h5>
              </h3>
            </div>

            <span
              className="services__button"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div onClick={() => toggleTab(1)} className="view_button">
                View More
                <i className="uil uil-arrow-right services__boutton-icon"></i>
              </div>
              <a
                href="https://github.com/Amangarala/edTech"
                className="footer__social-link"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Study Notion</h3>

                <p
                  className="services__modal-description"
                  style={{ textAlign: "justify" }}
                >
                 Study Notion is a comprehensive ed-tech platform that empowers users to create, access, and rate educational content, enhancing learning and connecting students with expert instructors globally.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">User Authentication</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Student and Educator side
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Create Courses</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Explore Courses</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Personal dashboard
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              {/* <i className="uil uil-arrow services__icon"></i> */}
              <img
                className="services__img"
                src={require("../../assets/TechSolver.png")}
                alt=""
              />
              <h3 className="services__title" style={{ marginTop: "10px" }}>
                Tech-Solver
                <h5>Web App</h5>
              </h3>
            </div>

            <span
              className="services__button"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div onClick={() => toggleTab(2)} className="view_button">
                View More
                <i className="uil uil-arrow-right services__boutton-icon"></i>
              </div>
              <a
                href="https://github.com/Amangarala/Tech-Solver"
                className="footer__social-link"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Tech-Solver</h3>

                <p
                  className="services__modal-description"
                  style={{ textAlign: "justify" }}
                >
                  Tech-Solver is a web application designed for solving
                  computer-related problems. Users can ask questions, and anyone
                  with the solution can provide assistance. It fosters a
                  collaborative environment for efficient problem-solving in the
                  digital realm, spanning software issues, hardware challenges,
                  and more.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">User Authentication</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Ask Questions Section
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Answer Questions Section
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Tags & Profile Section
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Share, Delete, Upvote and Downvote features
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              {/* <i className="uil uil-arrow services__icon"></i> */}
              <img
                className="services__img"
                src={require("../../assets/AniLearn.jpg")}
                alt=""
              />
              <h3 className="services__title">
                Anilearn
                <h5>Web App</h5>
              </h3>
            </div>

            <span
              className="services__button"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div onClick={() => toggleTab(3)} className="view_button">
                View More
                <i className="uil uil-arrow-right services__boutton-icon"></i>
              </div>

              <a
                href="https://github.com"
                className="footer__social-link"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Anilearn</h3>

                <p
                  className="services__modal-description"
                  style={{ textAlign: "justify" }}
                >
                  A comprehensive learning platform designed for visualization,
                  comprising student, educator, and administrative interfaces.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Authentication via Google
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Upload courses and videos section for educators
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Student suggestions Section
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Explore all courses section and payment via RazorPay
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Profile and some other sections
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div style={{ padding: "0" }}>
              
              <img
                className="services__img"
                src={require("../../assets/OSCF logo.png")}
                alt=""
              />
              <h3 className="services__title">
                OSCF
                <h5>Mobile App</h5>
              </h3>
            </div>

            <span
              className="services__button"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div onClick={() => toggleTab(4)} className="view_button">
                View More
                <i className="uil uil-arrow-right services__boutton-icon"></i>
              </div>
              <a
                href="https://github.com/Amangarala/OSCF"
                className="footer__social-link"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
            </span>

            <div
              className={
                toggleState === 4
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">OSCF</h3>

                <p
                  className="services__modal-description"
                  style={{ textAlign: "justify" }}
                >
                  Catalyzes open-source community growth through centralized
                  resources and support. Focuses on collaboration, project
                  showcasing, technical aid, and community engagement.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">User Authentication</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Major Projects section
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Article section</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Forum section</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Donation section & Search section
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div style={{ padding: "0" }}>
              
              <img
                className="services__img"
                src={require("../../assets/sociopedia.jpeg")}
                alt=""
              />
              <h3 className="services__title">
                Socialnetworker
                <h5>Web App</h5>
              </h3>
            </div>

            <span
              className="services__button"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div onClick={() => toggleTab(5)} className="view_button">
                View More
                <i className="uil uil-arrow-right services__boutton-icon"></i>
              </div>
              <a
                href="https://github.com/Amangarala/socialnetworker"
                className="footer__social-link"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
            </span>

            <div
              className={
                toggleState === 5
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Socialnetworker</h3>

                <p
                  className="services__modal-description"
                  style={{ textAlign: "justify" }}
                >
                  Socialnetworker is a social media platform where users can post, send requests, and interact with photos by liking or disliking them.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">User Authentication</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Make Friends
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Like or Dislike Photos</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">User Profiles</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Post Photos
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div style={{ padding: "0" }}>
              
              <img
                className="services__img"
                src={require("../../assets/Snappy.png")}
                alt=""
              />
              <h3 className="services__title">
                Snappy
                <h5>Web App</h5>
              </h3>
            </div>

            <span
              className="services__button"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div onClick={() => toggleTab(6)} className="view_button">
                View More
                <i className="uil uil-arrow-right services__boutton-icon"></i>
              </div>
              <a
                href="https://github.com/Amangarala/snappy"
                className="footer__social-link"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
            </span>

            <div
              className={
                toggleState === 6
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Snappy</h3>

                <p
                  className="services__modal-description"
                  style={{ textAlign: "justify" }}
                >
                  Snappy is a chat application that allows users to communicate with others and customize their profiles with personal avatars.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">User Authentication</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Real-time Chat
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Personal Avatars</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">User Profiles</p>
                  </li>

                  {/* <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Donation section & Search section
                    </p>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;
