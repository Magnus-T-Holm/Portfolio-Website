import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>
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
        <p><FontAwesomeIcon icon={faEnvelope} /> magnusthestrup@hotmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
