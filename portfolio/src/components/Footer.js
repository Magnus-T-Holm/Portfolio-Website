import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          <span>Email:</span> magnusthestrup@hotmail.com
        </p>
        <div>
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/magnus-thestrup-holm/" target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a id="github" href="https://github.com/Magnus_T_Holm" target="blank">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
