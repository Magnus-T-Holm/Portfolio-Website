import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main id="projects">
      <div className="project_container">
        <h1>magnusholm.net</h1>
        <p className="site_info">
          Mobil venlig:
          <FontAwesomeIcon className="is_mobile" icon={faCheck} />
        </p>
        <p className="site_info">Sprog: Dansk og engelsk</p>
        <div className="description_code_container">
          <div className="project_description">
            <h2>Projekt info</h2>
            <section>
              <p>
                Selve hjemmesiden du er på lige nu. Det vil sige startsiden,
                kompetencer og projekter, både på dansk og engelsk.
              </p>
            </section>
          </div>
          <div className="project_code">
            <h2>Projekt kode</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Font Awesome</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project_container">
        <Link className="project_title" to="/projects/card-draw">
          Spillekort projekt v1.0
        </Link>
        <p className="site_info">
          Mobil venlig:
          <FontAwesomeIcon className="is_mobile" icon={faCheck} />
        </p>
        <p className="site_info">Sprog: Engelsk</p>
        <div className="description_code_container">
          <div className="project_description">
            <h2>Projekt info</h2>
            <section>
              <p>
                Et lille simpelt projekt jeg har lavet, hvor man kan trække kort
                fra et deck kort.
              </p>
            </section>
          </div>
          <div className="project_code">
            <h2>Projekt kode</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>
                Node.js pakker:{" "}
                <a href="https://www.npmjs.com/package/cards" target="blank">cards.js</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project_container">
        <Link className="project_title" to="/projects/tarot">
          Major Arcana Tarot projekt v1.0
        </Link>
        <p className="site_info">
          Mobil venlig:
          <FontAwesomeIcon className="is_mobile" icon={faCheck} />
        </p>
        <p className="site_info">Sprog: Engelsk</p>
        <div className="description_code_container">
          <div className="project_description">
            <h2>Projekt info</h2>
            <section>
              <p>
                Et lille simpelt projekt jeg har lavet, hvor man kan trække kort
                fra et deck som indeholder major arcana tarot kort.
                <br />
                Der er også en checkbox, som kan toggle om man vil se et korts
                Deck of Many Things effekt fra Dungeons & Dragons 5E.
              </p>
            </section>
          </div>
          <div className="project_code">
            <h2>Projekt kode</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>
                Node.js pakker:{" "}
                <a href="https://www.npmjs.com/package/cards" target="blank">cards.js</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project_container">
        <Link className="project_title" to="/projects/memory_game">
          Huske spil projekt v1.0
        </Link>
        <p className="site_info">
          Mobil venlig:
          <FontAwesomeIcon className="is_mobile" icon={faCheck} />
        </p>
        <p className="site_info">Sprog: Dansk og engelsk</p>
        <div className="description_code_container">
          <div className="project_description">
            <h2>Projekt info</h2>
            <section>
              <p>
                Et lille huske spil, som vi skulle lave under grundforløbets 2.
                del.
              </p>
            </section>
          </div>
          <div className="project_code">
            <h2>Projekt kode</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
