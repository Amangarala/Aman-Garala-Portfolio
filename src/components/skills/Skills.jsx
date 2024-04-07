import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <>
    <div id="skills"></div>
    <section className="skills section" id="skills" data-aos="fade-up">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle" style={{  color:'#1AB9A7' }}>My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
    </>
  );
};

export default Skills;



