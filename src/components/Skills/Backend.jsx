import React from "react";

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check skills__badge__icon"></i>

            <div className="">
              <h3 className="skills__name">ExpressJS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__badge__icon"></i>

            <div className="">
              <h3 className="skills__name">Node JS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check skills__badge__icon"></i>

            <div className="">
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check skills__badge__icon"></i>

            <div className="">
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermidiate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
