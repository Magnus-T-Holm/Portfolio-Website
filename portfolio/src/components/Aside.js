import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import $ from 'jquery';

const Aside = () => {
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

  let asideOpen;

  if (localStorage.getItem("menuStatus") == null) {
    localStorage.setItem("menuStatus", "closed")
  }

  if (localStorage.getItem("menuStatus") === "open") {
    asideOpen = true
  } else {
    asideOpen = false
  }

  function menuOpenClose() {
    $("#menu_button").toggleClass("menu_open_button");
    $("aside").toggleClass("aside_open");
    $("nav").toggleClass("menu_closed");
    $("#section_wrapper").toggleClass("menu_closed_wrapper");
    if (localStorage.getItem("menuStatus") == "open") {
      localStorage.setItem("menuStatus", "closed")
    } else {
      localStorage.setItem("menuStatus", "open")
    }
  }

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function glitchText(e) {
    let interval = null;
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            if (isDanish) {
              return e.target.dataset.danish[index];
            } else {
              return e.target.dataset.english[index];
            }
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      if (isDanish) {
        if (iteration >= e.target.dataset.danish.length) {
          clearInterval(interval);
        }
      } else {
        if (iteration >= e.target.dataset.english.length) {
          clearInterval(interval);
        }
      }
      iteration += 1 / 3;
    }, 40);
  }

  return (
    <aside className={asideOpen ? "aside_open" : ""}>
      <FontAwesomeIcon icon={faBars} id="menu_button" onClick={menuOpenClose} className={asideOpen ? "menu_open_button" : ""} />
      <nav className={asideOpen ? "" : "menu_closed"}>
        <ul>
          <li><a href="./#" data-danish="Hjem" data-english="Home" onPointerEnter={glitchText}>{isDanish ? "Hjem" : "Home"}</a></li>
          <li><a href="./#about" data-danish="Om mig" data-english="About" onPointerEnter={glitchText}>{isDanish ? "Om mig" : "About"}</a></li>
          <li><a href="./#projects" data-danish="Projekter" data-english="Projects" onPointerEnter={glitchText}>{isDanish ? "Projekter" : "Projects"}</a></li>
        </ul>
        <div id="language_selectors">
          <a href="./#" onClick={languageSwitchDanish}>Dansk</a>
          <span>|</span>
          <a href="./#" onClick={languageSwitchEnglish}>English</a>
        </div>
        <div id="social_links">
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/magnus-thestrup-holm/" target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a id="github" href="https://github.com/Magnus-T-Holm" target="blank">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
        <div id="email">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>magnusthestrup@hotmail.com</p>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
