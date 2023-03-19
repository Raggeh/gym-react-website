import React from 'react'
import './Testimonials.css';
import avatar01 from '../../img/avatar01.png';
import avatar02 from "../../img/avatar02.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">

            <h2 className="section__title"> Testimonials </h2>

          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>
                <h4> Jesica Fernandes </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Minus fugit et dolor laudantium quibusdam doloribus magnam ea
                  nemo! <br />
                  Assumenda commodi fugiat illo sint doloremque ratione
                  voluptas? Consectetur, <br />
                  nostrum. Cum, similique.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt="" />
                </div>
                <h4> Jesica Fernandes </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Minus fugit et dolor laudantium quibusdam doloribus magnam ea
                  nemo! <br />
                  Assumenda commodi fugiat illo sint doloremque ratione
                  voluptas? Consectetur, <br />
                  nostrum. Cum, similique.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar01} alt="" />
                </div>
                <h4> Jesica Fernandes </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Minus fugit et dolor laudantium quibusdam doloribus magnam ea
                  nemo! <br />
                  Assumenda commodi fugiat illo sint doloremque ratione
                  voluptas? Consectetur, <br />
                  nostrum. Cum, similique.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}