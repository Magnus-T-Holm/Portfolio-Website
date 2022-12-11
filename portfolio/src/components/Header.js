import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Changes nav links based on current language
  var links;
  if (/en/.test(window.location.href)) {
    links = [
      { name: "Home", href: "/en/" },
      { name: "Skills", href: "/en/skills" },
      { name: "Projects", href: "/en/projects" },
    ];
  } else {
    links = [
      { name: "Hjem", href: "/" },
      { name: "Kompetencer", href: "/skills" },
      { name: "Projekter", href: "/projects" },
    ];
  }

  // Changes language links based on current site
  var da = "/";
  var en = "/en/";

  if (/skills/.test(window.location.href)) {
    da += "skills";
    en += "skills";
  }

  if (/projects/.test(window.location.href)) {
    da += "projects";
    en += "projects";
  }

  function mobileOpenClose() {
    const mobile_links = document.querySelector("#mobile_links");
    if (mobile_links.style.display === "block") {
      mobile_links.style.display = "none";
    } else {
      mobile_links.style.display = "block";
    }
  }

  return (
    <header>
      <nav>
        <div id="desktop">
          <ul>
            {links.map((link, i) => (
              <li><Link to={link.href} key={i}>{link.name}</Link></li>
            ))}
          </ul>
          <div className="lang_switch">
            <Link to={da}>DK</Link>
            <p>/</p>
            <Link to={en}>EN</Link>
          </div>
        </div>
        <div id="mobile">
          <p>Menu</p>
          <div id="mobile_links">
            <ul>
              {links.map((link, i) => (
                <li><Link name={link.name} href={link.href} key={i} /></li>
              ))}
              <li>
                <div className="lang_switch">
                  <Link to={da}>DK</Link>
                  <p>/</p>
                  <Link to={en}>EN</Link>
                </div>
              </li>
            </ul>
          </div>
          <button className="menu_button" onClick={mobileOpenClose}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
