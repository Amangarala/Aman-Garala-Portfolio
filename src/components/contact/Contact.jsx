import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact"></div>
      <section className="contact section" id="contact" data-aos="fade-up">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle" style={{ color: "#1AB9A7" }}>
          Contact Me
        </span>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div>
              <div
                className="contact__info"
                style={{ display: "flex", columnGap: "20px", flexWrap: "wrap" }}
              >
                <div className="contact__card" style={{ width: "220px" }}>
                  <i
                    className="bx bx-mail-send contact__card-icon"
                    style={{ color: "#1AB9A7" }}
                  ></i>

                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">
                    amangarala.it@gmail.com
                  </span>

                  <a
                    href="mailto: amangarala.it@gmail.com"
                    className="contact__button"
                  >
                    Write me
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>

                <div className="contact__card" style={{ width: "220px" }}>
                  <i
                    className="bx bxl-telegram contact__card-icon"
                    style={{ color: "#1AB9A7" }}
                  ></i>

                  <h3 className="contact__card-title">Telegram</h3>
                  <span className="contact__card-data">Aman_garala</span>

                  <a
                    href="https://t.me/Aman_garala"
                    className="contact__button"
                  >
                    Write me
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
