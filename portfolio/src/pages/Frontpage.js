const Frontpage = () => {
  var isDanish;

  if (localStorage.getItem("isDanish") === "true") {
    isDanish = true
  } else {
    isDanish = false
  }
  return (
    <main id="frontpage">
      {/* <div id="frontpage_text">
        <h1>Magnus Holm</h1>
        <h2>{isDanish ? "En Front-end Webudvikler" : "A Front-end Webdeveloper"}</h2>
        <h3>{isDanish ? "Velkommen til min portfolio" : "Welcome to my portfolio"}</h3>
        <p>{isDanish ? "Her vil du finde nogle af de projekter jeg har lave, samt noget information om mig" : "Here you will find some of the projects I have done, as well as some information about me"}</p>
      </div> */}
    </main>
  );
};

export default Frontpage;
