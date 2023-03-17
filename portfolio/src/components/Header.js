import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let isDanish;

  if (localStorage.getItem("isDanish") == null) {
    localStorage.setItem("isDanish", "true")
  }


  if (localStorage.getItem("isDanish") === "true") {
    isDanish = true
  } else {
    isDanish = false
  }

  function languageSwitchDanish() {
    if (localStorage.getItem("isDanish") === "false") {
      localStorage.setItem("isDanish", "true")
      window.location.reload();
    }
  }

  function languageSwitchEnglish() {
    if (localStorage.getItem("isDanish") === "true") {
      localStorage.setItem("isDanish", "false")
      window.location.reload();
    }
  }

  function mobileOpenClose() {
    let menu = document.querySelector("#mobile_overlay");
    let body = document.querySelector("body");
    if (menu.style.width === "100%") {
      menu.style.width = "0";
      body.style.overflow = "visible";
    } else {
      menu.style.width = "100%";
      body.style.overflow = "hidden";
    }
  }

  return (
    <header>
      <div id="mobile_header">
        <FontAwesomeIcon icon={faBars} id="open_button" onClick={mobileOpenClose} />
      </div>
      <div id="mobile_overlay">
        <FontAwesomeIcon icon={faXmark} id="close_button" onClick={mobileOpenClose} />
        <div id="overlay_content">
          <ul>
            <li>
              <NavHashLink to="/portfolio/#home" onClick={mobileOpenClose}>{isDanish ? "Hjem" : "Home"}</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/portfolio/#about" onClick={mobileOpenClose}>{isDanish ? "Om mig" : "About"}</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/portfolio/#projects" onClick={mobileOpenClose}>{isDanish ? "Projekter" : "Projects"}</NavHashLink>
            </li>
            <div id="language_selectors_mobile">
              <span onClick={languageSwitchDanish}>Dansk</span>
              <hr />
              <span onClick={languageSwitchEnglish}>English</span>
            </div>
          </ul>
        </div>
      </div>
    </header >
  );
};

export default Header;
