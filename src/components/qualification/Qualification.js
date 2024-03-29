import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>
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
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
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
                <h3 className="qualification__title">Bachelor of Technology</h3>
                <span className="qualification__subtitle">
                  Vishwakarma University - Pune
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2022
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
                <h3 className="qualification__title">12th SSC</h3>
                <span
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  role="button"
                  tabIndex="-3"
                >
                  {hover
                    ? "Vishwakarma College of Arts, Commerce & Science"
                    : "VCACS - Pune"}
                </span>
                {/* <span className="qualification__subtitle">VCACS - Pune</span> */}
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th SSC</h3>
                <span className="qualification__subtitle">
                  Vidya Vardhini - Parli-V
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016
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
                <h3 className="qualification__title">Flutter Developer</h3>
                <span className="qualification__subtitle">Tradexa - Pune</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2022 - Aug 2022
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
                <h3 className="qualification__title">Flutter Developer</h3>
                <span className="qualification__subtitle">
                  Quantime World - Pune
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2022 - Sep 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
