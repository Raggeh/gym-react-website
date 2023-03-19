import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id='Pricing'>
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing </span>
            Plan
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing <br />
            elit. Quasi molestiae architecto rem magnam ut officia?
          </p>
        </div>

        {/* =======Pricing Wrapper ======== */}
        <div className="pricing__wrapper">

          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title"> Regular Members </h2>
              <h2 className="pricing section__title">
                $50 <span>/Month</span>
              </h2>
            </div>

            <div className="services">
              <ul className="list__style">
                <li>
                  <span>Unlimited Access to the gym</span>
                </li>
                <li>
                  <span>Customer Support</span>
                </li>
                <li>
                  <span>Personal Trainer</span>
                </li>
                <li>
                  <span>Standard Options</span>
                </li>
                <li>
                  <span>5 Classes Per Week</span>
                </li>
              </ul>

              <button className="register__btn"> Join Now </button>
            </div>
          </div>

          <div className="pricing__item pricing__item-02">
            <div className="pricing__card-top">
              <h2 className="section__title"> Premium Members </h2>
              <h2 className="pricing section__title">
                $70 <span>/Month</span>
              </h2>
            </div>

            <div className="services">
              <ul className="list__style">
                <li>
                  <span>Unlimited Access to the gym</span>
                </li>
                <li>
                  <span>Customer Support</span>
                </li>
                <li>
                  <span>Personal Trainer</span>
                </li>
                <li>
                  <span>Standard Options</span>
                </li>
                <li>
                  <span>5 Classes Per Week</span>
                </li>
              </ul>

              <button className="register__btn"> Join Now </button>
            </div>
          </div>

          <div className="pricing__item">
            <div className="pricing__card-top">
              <h2 className="section__title"> Standard Members </h2>
              <h2 className="pricing section__title">
                $100 <span>/Month</span>
              </h2>
            </div>

            <div className="services">
              <ul className="list__style">
                <li>
                  <span>Unlimited Access to the gym</span>
                </li>
                <li>
                  <span>Customer Support</span>
                </li>
                <li>
                  <span>Personal Trainer</span>
                </li>
                <li>
                  <span>Standard Options</span>
                </li>
                <li>
                  <span>5 Classes Per Week</span>
                </li>
              </ul>

              <button className="register__btn"> Join Now </button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Pricing