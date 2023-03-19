import React from 'react';
import './Exercises.css';
import lunges from '../../img/lunges.png';
import yoga from "../../img/yoga-pose.png";
import extended from "../../img/extended.png";

const Exercises = () => {
  return (
    <section id="Schedule">
      <div className="container container__exercise">
        {/* ==============Exercise Top ================== */}
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights"> Exercises </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Temporibus illo fuga dignissimos voluptatibus sint est.
          </p>
        </div>
        {/* ======= Exercise List ======== */}
        <div className="exercise__wrapper">
          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise__content">
              <h4> Healthy Life</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Dolores, iure! Voluptatem deserunt quidem sequi molestias!
              </p>
            </div>
          </div>

          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={yoga} alt="" />
            </span>

            <div className="exercise__content">
              <h4> Increased Flexibility</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Dolores, iure! Voluptatem deserunt quidem sequi molestias!
              </p>
            </div>
          </div>

          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={extended} alt="" />
            </span>

            <div className="exercise__content">
              <h4> Reducing Blood Pessure</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Dolores, iure! Voluptatem deserunt quidem sequi molestias!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exercises