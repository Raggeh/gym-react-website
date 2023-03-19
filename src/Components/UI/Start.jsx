import React from 'react';
import './Start.css';
import TrainerImage from '../../img/trainer.png';

const Start = () => {
  return (
    <section id="Classses">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img src={TrainerImage} alt="" />
          </div>
          <div className="start__content">
            <h2 className="section__title">
              Ready to make a <span className="highlights"> change?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Laborum corporis aliquid, libero quasi nisi dignissimos
              exercitationem fugiat perspiciatis <br />
              impedit assumenda cupiditate minus nostrum tenetur architecto id
              velit dicta expedita numquam?
            </p>
            <button className="register__btn">Get Started </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Start