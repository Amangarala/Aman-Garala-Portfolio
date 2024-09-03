import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div id="qualification"></div>
      <section
        className="qualification section"
        style={{ backgroundColor: "black", paddingBottom: "100px" }}
        data-aos="fade-up"
      >
        <h2 className="section__title" style={{ color: "white" }}>
          Qualification
        </h2>
        <span className="section__subtitle" style={{ color: "#1AB9A7" }}>
          My personal journey
        </span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">B.Tech (I.T)</h3>
                  <span className="qualification__subtitle">
                    Charusat University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"> </i>
                    2021 - Present
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
                  <h3 className="qualification__title">HSC</h3>
                  <span className="qualification__subtitle">
                    Saint Xavier's School
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"> </i>
                    2020 - 2021
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">SSC</h3>
                  <span className="qualification__subtitle">
                    Saint Xavier's School
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"> </i>
                    2018 - 2019
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Internauts Infotech</h3>
                  <span className="qualification__subtitle">Ahmedabad</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"> </i>2 months -
                    Internship
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
                <h3 className="qualification__title">Charusat University</h3>
                <span className="qualification__subtitle">
                  Anand
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2 months Internship
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX </h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> </i>
                  2017 - 2018
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
