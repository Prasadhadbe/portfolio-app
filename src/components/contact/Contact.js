import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to Me</h3>
        </div>
        <div className="contact__info">
          <div className="contact__card">
            <i className="bx bx-mail-send contact__card-icon"></i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">
              Prasadahadbe313@gmail.com
            </span>
            <a
              href="mailto:prasadahadbe313@gmail.com"
              className="contact__button"
            >
              Write me
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
          <div className="contact__card">
            <i className="bx bxl-whatsapp contact__card-icon"></i>
            <h3 className="contact__card-title">WhatsApp/Call</h3>
            <span className="contact__card-data">+919623370313</span>
            <a href="tel:+919623370313" className="contact__button">
              Reach Out
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
          <div className="contact__card">
            <i className="bx bxl-linkedin contact__card-icon"></i>
            <h3 className="contact__card-title">LinkedIn</h3>
            <span className="contact__card-data">Prasad Hadbe</span>
            <a
              href="https://www.linkedin.com/in/prasad-hadbe-7907b316b/"
              className="contact__button"
            >
              Add me
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
        </div>
        {/* <div className="contact__content">
          <h3 className="contact__title"></h3>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
