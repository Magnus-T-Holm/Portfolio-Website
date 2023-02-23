import Aside from "../components/Aside";
import $ from 'jquery';

const Frontpage = () => {
  let isDanish;

  if (localStorage.getItem("isDanish") === "true") {
    isDanish = true
  } else {
    isDanish = false
  }

  function menuClose() {
    $("#menu_button").removeClass("menu_open_button");
    $("aside").removeClass("aside_open");
    $("nav").addClass("menu_closed");
    $("#section_wrapper").addClass("menu_closed_wrapper");
  }

  return (
    <main id="frontpage">
      <Aside />
      <div id="section_wrapper" className="menu_closed_wrapper" onClick={menuClose}>
        <section id="home">
          <h1>{isDanish ? "Hej, mit navn er " : "Hi, my name is "} Magnus</h1>
          <span>{isDanish ? "En web udvikler, med fokus på frontend" : "A web developer, with a focus on frontend"}</span>
          <a href="./#projects">{isDanish ? "Projekter" : "Projects"}</a>
        </section>
        <section id="about">
          <h2>{isDanish ? "Om mig" : "About me"}</h2>
          <span>{isDanish ? 'Her vil du finde mere information om mig, hvad jeg laver, og mine nuværende "skills" er i forhold til programering og teknologi.' : "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology."}</span>
          <div id="info_skills_container">
            <div id="info">
              <h3>{isDanish ? "Lær mig at kende" : "Get to know me"}</h3>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </div>
            <div id="skills">
              <h3>{isDanish ? "Mine skills" : "My skills"}</h3>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2>{isDanish ? "Projekter" : "Projects"}</h2>

        </section>
      </div >
    </main >
  );
};

export default Frontpage;
