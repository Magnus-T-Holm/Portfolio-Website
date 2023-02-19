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
          <h1>{isDanish ? "Hej, mit navn er " : "Hello there, I'm "} Magnus Holm</h1>
          <p>{isDanish ? "En frontend web udvikler" : "A frontend web developer"}</p>
          <a href="./#projects">{isDanish ? "Projekter" : "Projects"}</a>
        </section>
        <section id="about">
          <h2>{isDanish ? "Om mig" : "About me"}</h2>
        </section>
        <section id="projects"></section>
      </div>
    </main>
  );
};

export default Frontpage;
