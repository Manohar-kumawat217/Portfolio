import React, { useState } from "react";
import "./Qualification.css";
function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="qualification section">
        <h2 className="section__title">Qualifiaction</h2>
        <span className="section__subtitle">Eduactional Journey</span>

        <div className="qualification__conatiner container">
          <div className="qualification__tab">
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
              <i className="uil uil-graduation-cap qualification__icon"></i>
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
                  <h3 className="qualification__title">
                    Bachelor Of Computer <br />
                    Application
                  </h3>
                  <span className="qualification__subtitle">
                    Govt Bangur PG College
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt qualifiaction__calendar-icon"></i>
                    2021 - 2024
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
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle">Apna College</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt qualifiaction__calendar-icon"></i>
                    2022 - 2024
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div className="">
                  <h3 className="qualification__title">12th</h3>
                  <span className="qualification__subtitle">
                    Shree Aadarsh Vidhya Mandir Nadol (Pali)
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt qualifiaction__calendar-icon"></i>
                    2020 - 2021
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
                <div className="">
                  <h3 className="qualification__title">10th</h3>
                  <span className="qualification__subtitle">
                    Shree Aadarsh Vidhya Mandir Nadol (Pali)
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt qualifiaction__calendar-icon"></i>
                    2018 - 2019
                  </div>
                </div>
              </div>
            </div>

            {/* Professional */}
            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div className="">
                  <h3 className="qualification__title">
                    Full Stack Developer Intern
                  </h3>
                  <span className="qualification__subtitle">
                    Orinson Technologies
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt qualifiaction__calendar-icon"></i>
                    2024 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Qualification;
