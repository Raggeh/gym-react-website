import React from "react";
import "./Header.css";

import logo from "../../img/dumble.png";

const nav__links = [
  {
    path: "#",
    display: "Home",
  },
  {
    path: "#Schedule",
    display: "Schedule",
  },
  {
    path: "#Classses",
    display: "Classses",
  },
  {
    path: "#Pricing",
    display: "Pricing",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <div className="logo__image">
              <img src={logo} alt="logo" />
            </div>
            <h2>Fitbody</h2>
          </div>
          {/* ======== Navigation meneu ========== */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item">
                  <a href={item.path}> {item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ========Nav Right =============== */}
          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>

   
  );
};

export default Header;
