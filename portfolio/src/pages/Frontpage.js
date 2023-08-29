import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Aside from "../components/Aside";

const Frontpage = () => {
  let isDanish;

  if (localStorage.getItem("isDanish") === "true") {
    isDanish = true
  } else {
    isDanish = false
  }

  return (
    <main id="frontpage">
      <Aside />
      <div id="section_wrapper">
        <section id="home">
          <h1>{isDanish ? "Hej, mit navn er " : "Hi, my name is "} Magnus</h1>
          <span>{isDanish ? "En web udvikler, med fokus på frontend" : "A web developer, with a focus on frontend"}</span>
          <a href="/#own_projects">{isDanish ? "Projekter" : "Projects"}</a>
        </section>
        <section id="about">
          <h2>{isDanish ? "Om mig" : "About me"}</h2>
          <span>{isDanish ? 'Her vil du finde mere information om mig, hvad jeg laver, og mine nuværende "skills" er i forhold til programering og teknologi.' : "Here you will find more information about me, what I do and my current skills, mostly in terms of programming and technology."}</span>
          <div id="about_me_skills_container">
            <div id="about_me">
              <h3>{isDanish ? "Lær mig at kende" : "Get to know me"}</h3>
              <div>
                <p className="info">{isDanish ? <>Jeg er en <strong>junior Frontend Web Udvikler</strong>, som stræber efter at lave velfungerende hjemmesider.</> : <>I'm a <strong>junior Frontend Web Developer</strong>, that strives to create functioning websites</>}</p>
                <p className="info">{isDanish ? <>Jeg er åben for <strong>job muligheder</strong>, hvor jeg kan bidrage, lære og vokse. Hvis du har eller kender til en god stilling, som matcher med mine skills og erfaring, så er du velkommen til at <strong>kontakte mig</strong></> : <>I am open to <strong>job opportunities</strong> where I can contribute, learn and grow. If you have or know of a good position that matches my skills and experience then don't hesitate to <strong>contact me</strong>.</>}</p>
                <div id="contact">
                  <h4>{isDanish ? "Sociale media og mail" : "Social media and mail"}</h4>
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
                </div>
              </div>
            </div>
            <div id="skills">
              <h3>{isDanish ? "Mine skills" : "My skills"}</h3>
              <div id="skill_list">
                <p className="skill">HTML</p>
                <p className="skill">CSS</p>
                <p className="skill">JavaScript</p>
                <p className="skill">jQuery</p>
                <p className="skill">React</p>
                <p className="skill">EJS</p>
                <p className="skill">Node.js</p>
                <p className="skill">NPM</p>
                <p className="skill">SQL</p>
                <p className="skill">GIT</p>
                <p className="skill">GitHub</p>
                <p className="skill">{isDanish ? "Responsivt Design" : "Responsive Design"}</p>
                <p className="skill">REST API</p>
              </div>
            </div>
          </div>
        </section>
        <section id="own_projects">
          <h2>{isDanish ? "Personlige Projekter" : "Personal Projects"}</h2>
          {/* Memory Game */}
          <div className="project_container">
            {/* change src to /cards/ when testing and /cards/ when deploying */}
            <img src="/memory.jpg" alt="" className="memory" />
            <div className="project_info">
              <Link className="project_title" to="/projects/memory-game">
                {isDanish ? "Huskespil projekt v1.5" : "Memory game project v1.5"}
              </Link>
              <div className="project_description">
                <h3>{isDanish ? "Projekt beskrivelse" : "Project description"}</h3>
                <section>
                  <p>
                    {isDanish ? "Et lille huskespil, som vi skulle lave under web-integrator uddannelsens grundforløbets 2. del, opdateret til at bruge React." : "A small memory game that we had to make during the 2nd part of the basic course for the web-integrator education, updated to use React"}
                  </p>
                </section>
              </div>
              <div className="project_extra_details">
                <h3>{isDanish ? "Projekt detaljer" : "Project details"}</h3>
                <p className="site_info">
                  {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
                </p>
                <p className="site_info">{isDanish ? "Sprog: Dansk og engelsk" : "Language: Danish and English"}</p>
              </div>
            </div>
          </div>
          {/* Playing card drawing */}
          <div className="project_container">
            {/* change src to /cards/ when testing and /cards/ when deploying */}
            <img src="/card_draw.jpg" alt="" className="card_draw" />
            <div className="project_info">
              <Link className="project_title" to="/projects/card-draw">
                {isDanish ? "Spillekort projekt v1.0" : "Playing card project v1.0"}
              </Link>
              <div className="project_description">
                <h3>{isDanish ? "Projekt beskrivelse" : "Project description"}</h3>
                <section>
                  <p>
                    {isDanish ? "Et lille simpelt projekt jeg har lavet, hvor man kan trække kort fra et deck kort." : "A small simple project I have made, where you can draw cards from a deck of cards."}
                  </p>
                </section>
              </div>
              <div className="project_extra_details">
                <h3>{isDanish ? "Projekt detaljer" : "Project details"}</h3>
                <p className="site_info">
                  {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
                </p>
                <p className="site_info">{isDanish ? "Sprog: Engelsk" : "Language: English"}</p>
              </div>
            </div>
          </div>
          {/* Major Arcana */}
          <div className="project_container">
            {/* change src to /cards/ when testing and /cards/ when deploying */}
            <img src="/tarot.jpg" alt="" className="tarot" />
            <div className="project_info">
              <Link className="project_title" to="/projects/tarot">
                {isDanish ? "Major Arcana Tarot projekt v1.0" : "Major Arcana Tarot project v1.0"}
              </Link>
              <div className="project_description">
                <h3>{isDanish ? "Projekt beskrivelse" : "Project description"}</h3>
                <section>
                  <p>
                    {isDanish ? "Et lille simpelt projekt jeg har lavet, hvor man kan trække kort fra et deck som indeholder major arcana tarot kort." : "A small simple project I have made, where you can draw cards from a deck that contains major arcana tarot cards."}
                  </p>
                  <p>
                    {isDanish ? "Der er også en checkbox, som kan toggle om man vil se et korts Deck of Many Things effekt fra Dungeons & Dragons 5e." : "There is also a checkbox that can toggle whether you want to see a card's Deck of Many Things effect from Dungeons & Dragons 5e."}
                  </p>
                </section>
              </div>
              <div className="project_extra_details">
                <h3>{isDanish ? "Projekt detaljer" : "Project details"}</h3>
                <p className="site_info">
                  {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
                </p>
                <p className="site_info">{isDanish ? "Sprog: Engelsk" : "Language: English"}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="school_projects">
          <h2>{isDanish ? "Skole Projekter" : "School Projects"}</h2>
          {/* Golfacross */}
          <div className="project_container">
            <img src="/golfacross.jpg" alt="" />
            <div className="project_info">
              <a className="project_title" href="/projects/golfacross">
                Golfacross
              </a>
              <div className="project_description">
                <h3>{isDanish ? "Projekt beskrivelse" : "Project description"}</h3>
                <section>
                  <p>
                    {isDanish ? "En uddannelses opgave, hvor vi skulle lave en hjemmeside for Golfacross." : "An education assignment, where we had to make a website for Golfacross."}
                  </p>
                  <p>
                    {isDanish ? 'Jeg var ansvarlig for at lave "Info" siden, men hjalp også med de andre sider.' : 'I was responsible for making the "Info" page, but I also helped with the other pages.'}
                  </p>
                </section>
              </div>
              <div className="project_extra_details">
                <h3>{isDanish ? "Projekt detaljer" : "Project details"}</h3>
                <p className="site_info">
                  {isDanish ? "Mobil venlig: Delvist" : "Mobil friendly: Kind of"}
                </p>
                <p className="site_info">{isDanish ? "Sprog: Dansk" : "Language: Danish"}</p>
              </div>
            </div>
          </div>
          
          {/* SoundEvent */}
          <div className="project_container">
            <img src="/soundevent.jpg" alt="" />
            <div className="project_info">
              <a className="project_title" href="/projects/soundevent">
              SoundEvent
              </a>
              <div className="project_description">
                <h3>{isDanish ? "Projekt beskrivelse" : "Project description"}</h3>
                <section>
                  <p>
                    {isDanish ? "En uddannelses opgave, hvor vi skulle lave en hjemmeside for firmaet SoundEvent." : "An education assignment, where we had to make a website for company SoundEvent."}
                  </p>
                  <p>
                    {isDanish ? 'Jeg var ansvarlig for at lave størstedelen af hjemmesiden, når det kommer til koden.' : 'I was responsible for making most of the website, when it comes to the code.'}
                  </p>
                </section>
              </div>
              <div className="project_extra_details">
                <h3>{isDanish ? "Projekt detaljer" : "Project details"}</h3>
                <p className="site_info">
                  {isDanish ? "Mobil venlig: Ja" : "Mobil friendly: Yes"}
                </p>
                <p className="site_info">{isDanish ? "Sprog: Dansk" : "Language: Danish"}</p>
              </div>
            </div>
          </div>
        </section>
      </div >
    </main >
  );
};

export default Frontpage;
