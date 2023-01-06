import React from "react";

const AboutMe = () => {
  var isDanish;

  if (localStorage.getItem("isDanish") === "true") {
    isDanish = true
  } else {
    isDanish = false
  }
  return (
    <main id="about_me">
      <h1>{isDanish ? "Hvem er Magnus?" : "Who is Magnus?"}</h1>
      <div id="about_me_description">
        <img id="profile_img" src="profile.jpg" alt="" />
        <p>{isDanish ? "Mit navn er Magnus Holm, jeg er pt 27 år og bor i Roskilde. Jeg er uddannet web-integrator og er i øjeblikket igang med Multimediedesigner uddannelsen i Køge. Jeg bruger primært min fritid på at spille computer og se YouTube, når jeg ikke arbejder på en opgave til uddannelsen." : "My name is Magnus Holm, I am currently 27 years old and live in Roskilde. I have an education as a web integrator and I'm currently studying Multimedia Design in Køge. I mainly spend my free time playing on the computer and watching YouTube, when I'm not working on an assignment for the education."}</p>
      </div>
      <div id="about_me_skills">
        <div >
          <h2>{isDanish ? "Hårde færdigheder" : "Hard skills"}</h2>
          <ul>
            <h3>{isDanish ? "Kodning relateret" : "Coding related"}</h3>
            <li><p>HTML5, CSS og JavaScript</p></li>
            <li><p>React.js</p></li>
            <li><p>EJS</p></li>
            <li><p>REST API</p></li>
            <li><p>MySQL</p></li>
            <li><p>Node.js</p></li>
            <li><p>Git</p></li>
            <h3>{isDanish ? "Programmer" : "Programs"}</h3>
            <li><p>Photoshop / GIMP</p></li>
            <li><p>Microsoft Office</p></li>
            <li><p>Sony Vegas</p></li>
          </ul>
        </div>
        <div >
          <h2>{isDanish ? "Bløde færdigheder" : "Soft skills"}</h2>
          <ul>
            <li><p>{isDanish ? "Hårdt arbejdene" : "Hard working"}</p></li>
            <li><p>{isDanish ? "Punktlig" : "Punctual"}</p></li>
            <li><p>{isDanish ? "Resultatorienteret" : "Result oriented"}</p></li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
