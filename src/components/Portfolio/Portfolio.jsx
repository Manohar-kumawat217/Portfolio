import React from "react";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import "./portfolio.css";
function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent work</span>

      <div className="portfolio__container container grid">
        <ul className="project__content">
          <a
            href="https://blog-app-five-lime.vercel.app/"
            className="project__card"
          >
            <div className="project__img">
              <img src={work3} alt="" />
            </div>

            <div>
              <h3 className="project__title">Blog Website</h3>
            </div>
          </a>

          <a
            href="https://todo-app-eight-lyart-38.vercel.app/"
            className="project__card"
          >
            <div className="project__img">
              <img src={work2} alt="" />
            </div>

            <div>
              <h3 className="project__title">Todo App</h3>
            </div>
          </a>

          <a
            href="https://wonderlust-hqah.onrender.com/listings"
            className="project__card"
          >
            <div className="project__img">
              <img src={work1} alt="" />
            </div>

            <div>
              <h3 className="project__title">Wonderlust</h3>
            </div>
          </a>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
