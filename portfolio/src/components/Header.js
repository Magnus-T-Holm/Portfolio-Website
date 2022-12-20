import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";


const Header = () => {
  var { pathname } = useLocation();
  var isDanish;

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
    var menu = document.querySelector("#mobile_overlay");
    var body = document.querySelector("body");
    if (menu.style.width === "100%") {
      menu.style.width = "0";
      body.style.overflow = "visible";
    } else {
      menu.style.width = "100%";
      body.style.overflow = "hidden";
    }
  }

  let currentPage;
  if (pathname === '/about-me') {
    currentPage = isDanish ? "Om mig" : "About me";
  } else if (/projects/g.test(pathname)) {
    currentPage = isDanish ? "Projekter" : "Projects";
  } else {
    currentPage = isDanish ? "Hjem" : "Home";
  }

  return (
    <header>
      <nav>
        <div id="desktop">
          <ul>
            <li className={pathname === '/' ? "active" : ""}><Link to={"/"} >{isDanish ? "Hjem" : "Home"}</Link></li>
            <li className={/projects/g.test(pathname) ? "active" : ""}><Link to={"/projects"} >{isDanish ? "Projekter" : "Projects"}</Link></li>
            <li className={pathname === '/about-me' ? "active" : ""}><Link to={"/about-me"} >{isDanish ? "Om mig" : "About me"}</Link></li>
            <li className="languageSwitch">
              <p>{isDanish ? "Sprog" : "Language"}</p>
              <button className={isDanish ? "currentLanguage" : ""} onClick={languageSwitchDanish}>Dansk</button>
              <button className={isDanish ? "" : "currentLanguage"} onClick={languageSwitchEnglish}>English</button>
            </li>
          </ul>
        </div>
        <div id="mobile_header">
          <div id="mobile_header_top">
            <h1>{currentPage}</h1>
            <FontAwesomeIcon id="mobile_menu_button" icon={faBars} onClick={mobileOpenClose} />
          </div>
          <div id="mobile_overlay">
            <FontAwesomeIcon className="close_button" icon={faX} onClick={mobileOpenClose} />
            <div id="overlay_content">
              <ul>
                <li className={pathname === '/' ? "active" : ""}><Link onClick={mobileOpenClose} to={"/"} >{isDanish ? "Hjem" : "Home"} </Link></li>
                <li className={/projects/g.test(pathname) ? "active" : ""}><Link onClick={mobileOpenClose} to={"/projects"} >{isDanish ? "Projekter" : "Projects"}</Link></li>
                <li className={pathname === '/about-me' ? "active" : ""}><Link onClick={mobileOpenClose} to={"/about-me"} >{isDanish ? "Om mig" : "About me"}</Link></li>
                <li className="languageSwitch">
                  <p>{isDanish ? "Sprog" : "Language"}</p>
                  <button className={isDanish ? "currentLanguage" : ""} onClick={languageSwitchDanish}>Dansk</button>
                  <button className={isDanish ? "" : "currentLanguage"} onClick={languageSwitchEnglish}>English</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Header;
