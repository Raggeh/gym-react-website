import React from "react";
import HeroImage from "../../img/gym-02.png"
import './Hero.css';

const Hero = () => {
  return (
    <section >
      <div className="container">
        <div className="hero__wrapper">
          {/* =======Hero Content */}
          <div className="hero__content">
            <h2 className="section__title">
              {" "}
              Exercise is the key to a{" "}
              <span className="highlights"> Healthy </span> lifestyle{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Deserunt molestias accusantium ipsam veritatis sequi. Nam?
            </p>

            <button className="register__btn">Get Started</button>
          </div>
          {/* =====Hero image ========== */}
          <div className="boxes__and__img">
            <div className="box-01">
              <div className="box-02">
                <div className="box-03">
                  <div className="box-img">
                    
                    <img src={HeroImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
