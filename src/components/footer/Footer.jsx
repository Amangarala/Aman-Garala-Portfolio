import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer__container container">
        <h1 className="footer__title" >Aman Garala</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link" >
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link" >
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link" >
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/aman-garala/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Amangarala"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://discord.com/channels/aman_garala"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-discord"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Amangarala. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
