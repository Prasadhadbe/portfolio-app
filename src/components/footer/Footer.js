import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Prasad</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          {/* <li>
            <a href="#" className="footer__link"></a>
          </li> */}
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/prasad_._._/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          {/* <a href="" className="home__social-icon" target="_blank"></a> */}
          <a
            href="https://www.linkedin.com/in/prasad-hadbe-7907b316b/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          {/* <a href="#" className="home__social-icon" target="_blank"></a> */}
          <a
            href="https://github.com/Prasadhadbe"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; PrasadHadbe. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
