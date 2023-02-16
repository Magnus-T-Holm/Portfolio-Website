import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Projects = () => {
  let isDanish;

  if (localStorage.getItem("isDanish") === "true") {
    isDanish = true
  } else {
    isDanish = false
  }
  return (
    <main id="projects">

      <h1>{isDanish ? "Web-integrator projekter" : "Web-integrator projects"}</h1>

      <div className="project_category">
        <div className="project_container">
          <Link className="project_title" to="/projects/memory-game">
            {isDanish ? "Huskespil projekt v1.5" : "Memory game project v1.5"}
          </Link>
          <p className="site_info">
            {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
          </p>
          <p className="site_info">{isDanish ? "Sprog: Dansk og engelsk" : "Language: Danish and English"}</p>
          <div className="project_description">
            <h2>{isDanish ? "Projekt info" : "Project info"}</h2>
            <section>
              <p>
                {isDanish ? "Et lille huskespil, som vi skulle lave under web-integrator uddannelsens grundforløbets 2. del, opdateret til at bruge React." : "A small memory game that we had to make during the 2nd part of the basic course for the web-integrator education, updated to use React"}
              </p>
            </section>
          </div>
          <div className="project_tools">
            <h2>{isDanish ? "Værktøjer brugt" : "Tools used"}</h2>
            <ul>
              <li><p>HTML, CSS, JavaScript</p></li>
              <li><p>React.js</p></li>
            </ul>
          </div>
        </div>
      </div>


      <h1>{isDanish ? "Multimediedesigner projekter" : "Multimedia designer projects"}</h1>

      <div className="project_category">
        <div className="project_container">
          <a href="/projects/web-basic" className="project_title" >Web-basic</a>
          <p className="site_info">
            {isDanish ? "Mobil venlig: Kun stylet til mobil" : "Mobil friendly: Only styled for mobile"}
          </p>
          <p className="site_info">{isDanish ? "Sprog: Dansk" : "Language: Danish"}</p>
          <div className="project_description">
            <h2>{isDanish ? "Projekt info" : "Project info"}</h2>
            <section>
              <p>{isDanish ? "Et lille projekt vi skulle lave i starten af multimediedesigner uddannelsen, hvor vi skulle lave en mobil side for Dyreværnet" : "A small project we had to do at the start of the multimedia design course, where we had to make a mobile site for Dyreværnet"}
              </p>
            </section>
          </div>
          <div className="project_tools">
            <h2>{isDanish ? "Værktøjer brugt" : "Tools used"}</h2>
            <ul>
              <li><p>HTML, CSS, JavaScript</p></li>
              <li><p>Font Awesome</p></li>
            </ul>
          </div>
          <div className="project_repository">
            <h2>GitHub Repository</h2>
            <a className="github" href="https://github.com/Magnus-T-Holm/web-basic" target="blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
          </div>
        </div>

        <div className="project_container">
          <p className="project_title">How to Win a Duel</p>
          <div className="project_description">
            <h2>{isDanish ? "Projekt info" : "Project info"}</h2>
            <section>
              <p>{isDanish ? "Det første støre projekt på multimediedesigner uddannelsen, som jeg skulle lave, var en gruppe opgave, hvor vi skulle lave en tutorial video. Jeg var en skuespiller, lavede voiceover og hjalp med redigering" : "The first big project on the multimedia design course that I had to do was a group assignment where we had to make a tutorial video. I was an actor, did the voiceover and helped with editing"}
              </p>
            </section>
          </div>
          <div className="project_tools">
            <h2>{isDanish ? "Værktøjer brugt" : "Tools used"}</h2>
            <ul>
              <li><p>{isDanish ? "Et kamera" : "A camera"}</p></li>
              <li><p>Adobe Premiere Pro / After Effects / Media Encoder</p></li>
            </ul>
          </div>
          <div className="project_repository">
            <h2>YouTube link</h2>
            <a className="youtube" href="https://www.youtube.com/watch?v=lMZ6V4ZXMNA" target="blank" ><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>

        <div className="project_container">
          <a href="/projects/startup" className="project_title" >Startup</a>
          <p className="site_info">
            {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
          </p>
          <p className="site_info">{isDanish ? "Sprog: Dansk, med en smule engelsk" : "Language: Danish, with a bit of English"}</p>
          <div className="project_description">
            <h2>{isDanish ? "Projekt info" : "Project info"}</h2>
            <section>
              <p>{isDanish ? "Den første store kode opgave på multimediedesigner uddannelsen. Hvert medlem af gruppen skulle lave mindst en side, så jeg endte med at lave vores header, footer og kaffe siden." : "The first major code assignment on the multimedia design course. Each member of the group had to create at least one page, so I ended up creating our header, footer and the coffee page."}
              </p>
            </section>
          </div>
          <div className="project_tools">
            <h2>{isDanish ? "Værktøjer brugt" : "Tools used"}</h2>
            <ul>
              <li><p>HTML, CSS, JavaScript</p></li>
              <li><p>Font Awesome</p></li>
            </ul>
          </div>
          <div className="project_repository">
            <h2>GitHub Repository</h2>
            <a className="github" href="https://github.com/Magnus-T-Holm/startup" target="blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
          </div>
        </div>

        <div className="project_container">
          <a href="/projects/golfacross" className="project_title" >Golfacross</a>
          <p className="site_info">
            {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
          </p>
          <p className="site_info">{isDanish ? "Sprog: Mix af Dansk og engelsk" : "Language: Mix of Danish and English"}</p>
          <div className="project_description">
            <h2>{isDanish ? "Projekt info" : "Project info"}</h2>
            <section>
              <p>{isDanish ? "Den anden store kode opgave på multimediedesigner uddannelsen. Hvert medlem af gruppen skulle igen lave mindst en side, så jeg endte med at lave vores header, footer og info siden." : "The second major code assignment on the multimedia design course. Each member of the group again had to create at least one page, so I ended up creating our header, footer and the info page."}
              </p>
            </section>
          </div>
          <div className="project_tools">
            <h2>{isDanish ? "Værktøjer brugt" : "Tools used"}</h2>
            <ul>
              <li><p>HTML, CSS, JavaScript</p></li>
              <li><p>Font Awesome</p></li>
            </ul>
          </div>
          <div className="project_repository">
            <h2>GitHub Repository</h2>
            <a className="github" href="https://github.com/Magnus-T-Holm/golfacross" target="blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
          </div>
        </div>

      </div>


      <h1>{isDanish ? "Personlige projekter" : "Personal projects"}</h1>

      <div className="project_category">
        <div className="project_container">
          <p className="project_title">magnusholm.net</p>
          <p className="site_info">
            {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
          </p>
          <p className="site_info">{isDanish ? "Sprog: Dansk og engelsk" : "Language: Danish and English"}</p>
          <div className="project_description">
            <h2>{isDanish ? "Projekt info" : "Project info"}</h2>
            <section>
              <p>{isDanish ? "Selve hjemmesiden du er på lige nu." : "The website you are currently on"}
              </p>
            </section>
          </div>
          <div className="project_tools">
            <h2>{isDanish ? "Værktøjer brugt" : "Tools used"}</h2>
            <ul>
              <li><p>HTML, CSS, JavaScript</p></li>
              <li><p>React.js</p></li>
              <li><p>Font Awesome</p></li>
            </ul>
          </div>
          <div className="project_repository">
            <h2>GitHub Repository</h2>
            <a className="github" href="https://github.com/Magnus-T-Holm/Portfolio-Website" target="blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
          </div>
        </div>

        <div className="project_container">
          <Link className="project_title" to="/projects/card-draw">
            {isDanish ? "Spillekort projekt v1.0" : "Playing card project v1.0"}
          </Link>
          <p className="site_info">
            {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
          </p>
          <p className="site_info">{isDanish ? "Sprog: Engelsk" : "Language: English"}</p>
          <div className="project_description">
            <h2>{isDanish ? "Projekt info" : "Project info"}</h2>
            <section>
              <p>{isDanish ? "Et lille simpelt projekt jeg har lavet, hvor man kan trække kort fra et deck kort." : "A small simple project I have made, where you can draw cards from a deck of cards."}
              </p>
            </section>
          </div>
          <div className="project_tools">
            <h2>{isDanish ? "Værktøjer brugt" : "Tools used"}</h2>
            <ul>
              <li><p>HTML, CSS, JavaScript</p></li>
              <li><p>React.js</p></li>
              <li>
                <a href="https://www.npmjs.com/package/cards" target="blank">cards.js</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="project_container">
          <Link className="project_title" to="/projects/tarot">
            {isDanish ? "Major Arcana Tarot projekt v1.0" : "Major Arcana Tarot project v1.0"}
          </Link>
          <p className="site_info">
            {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
          </p>
          <p className="site_info">{isDanish ? "Sprog: Engelsk" : "Language: English"}</p>
          <div className="project_description">
            <h2>{isDanish ? "Projekt info" : "Project info"}</h2>
            <section>
              <p>{isDanish ? "Et lille simpelt projekt jeg har lavet, hvor man kan trække kort fra et deck som indeholder major arcana tarot kort." : "A small simple project I have made, where you can draw cards from a deck that contains major arcana tarot cards."}
              </p>
              <p>{isDanish ? "Der er også en checkbox, som kan toggle om man vil se et korts Deck of Many Things effekt fra Dungeons & Dragons 5e." : "There is also a checkbox that can toggle whether you want to see a card's Deck of Many Things effect from Dungeons & Dragons 5e."}
              </p>
            </section>
          </div>
          <div className="project_tools">
            <h2>{isDanish ? "Værktøjer brugt" : "Tools used"}</h2>
            <ul>
              <li><p>HTML, CSS, JavaScript</p></li>
              <li><p>React.js</p></li>
              <li>
                <a href="https://www.npmjs.com/package/cards" target="blank">cards.js</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
