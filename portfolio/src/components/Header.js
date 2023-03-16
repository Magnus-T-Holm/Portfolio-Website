import React from "react";
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
              <a href="./#" onClick={mobileOpenClose}>{isDanish ? "Hjem" : "Home"}</a>
            </li>
            <li>
              <a href="./#about" onClick={mobileOpenClose}>{isDanish ? "Om mig" : "About"}</a>
            </li>
            <li>
              <a href="./#projects" onClick={mobileOpenClose}>{isDanish ? "Projekter" : "Projects"}</a>
            </li>
            <div id="language_selectors_mobile">
              <a href="./#" onClick={languageSwitchDanish}>Dansk</a>
              <hr />
              <a href="./#" onClick={languageSwitchEnglish}>English</a>
            </div>
          </ul>
        </div>
      </div>
    </header >
  );
};

export default Header;
