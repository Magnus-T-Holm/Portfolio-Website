import React from "react";
import { NavHashLink } from 'react-router-hash-link';

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
    <aside id="aside_nav">
      <nav>
        <ul>
          <li><NavHashLink to="/" data-danish="Hjem" data-english="Home" onPointerEnter={glitchText}>{isDanish ? "Hjem" : "Home"}</NavHashLink></li>
          <li><NavHashLink to="/#about" data-danish="Om mig" data-english="About" onPointerEnter={glitchText}>{isDanish ? "Om mig" : "About"}</NavHashLink></li>
          <li><NavHashLink to="/#projects" data-danish="Projekter" data-english="Projects" onPointerEnter={glitchText}>{isDanish ? "Projekter" : "Projects"}</NavHashLink></li>
        </ul>
        <div id="language_selectors">
          <span onClick={languageSwitchDanish}>Dansk</span>
          <hr />
          <span onClick={languageSwitchEnglish}>English</span>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
