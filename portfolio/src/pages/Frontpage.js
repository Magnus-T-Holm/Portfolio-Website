const Frontpage = () => {
  let isDanish;

  if (localStorage.getItem("isDanish") === "true") {
    isDanish = true
  } else {
    isDanish = false
  }

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  function glitchText(e) {
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
    }, 30);
  }
  return (
    <main id="frontpage">
      <section id="home">
        <h1 data-danish="Hej, mit navn er Magnus Holm" data-english="Hello there, I'm Magnus Holm" onPointerEnter={glitchText}>{isDanish ? "Hej, mit navn er " : "Hello there, I'm "} Magnus Holm</h1>
        <p>{isDanish ? "En frontend web udvikler" : "A frontend web developer"}</p>
        <a href="./#projects">{isDanish ? "Projekter" : "Projects"}</a>
      </section>
      <section id="about">
        <h2>{isDanish ? "Om mig" : "About me"}</h2>
      </section>
      <section id="projects"></section>
    </main>
  );
};

export default Frontpage;
