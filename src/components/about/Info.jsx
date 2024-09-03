import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon" style={{ color: "#1AB9A7" }}></i>

        <h3 className="about__title" style={{ color: "white " }}>
          Experience
        </h3>
        <span className="about__subtitle" style={{ color: "grey" }}>
          4 months Internship
        </span>
      </div>

      <div className="about__box">
        <i
          class="bx bx-briefcase-alt about__icon"
          style={{ color: "#1AB9A7" }}
        ></i>

        <h3 className="about__title" style={{ color: "white " }}>
          Completed
        </h3>
        <span className="about__subtitle" style={{ color: "grey" }}>
          4 + Projects
        </span>
      </div>
    </div>
  );
};

export default Info;
