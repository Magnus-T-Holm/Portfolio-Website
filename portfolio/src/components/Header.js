import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";


const Header = () => {
  let { pathname } = useLocation();
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
      <div id="header_content">
        <div id="logo">
          <img src="logo.png" alt="" />
          <span>Magnus Holm</span>
        </div>
        <nav>
          <ul>
            <li><a href="">{isDanish ? "Hjem" : "Home"}</a></li>
            <li><a href="./#about">{isDanish ? "Om mig" : "About"}</a></li>
            <li><a href="./#projects">{isDanish ? "Projekter" : "Projects"}</a></li>
          </ul>
        </nav>
      </div>
    </header >
  );
};

export default Header;
