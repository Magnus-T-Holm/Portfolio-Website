import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

// ------------------------- Main Page -------------------------
// Univesal
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"
import UpdateTitle from "./components/UpdateTitle";

// Pages
import Frontpage from "./pages/Frontpage";
// import Projects from "./pages/Projects";
// import AboutMe from "./pages/AboutMe";

// ------------------------- Projects -------------------------
// import MemoryGame from "./components/projects/memory_game/MemoryGame";
// import CardDraw from "./components/projects/card_draw/CardDraw";
// import Tarot from "./components/projects/tarot/Tarot";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <UpdateTitle />
        <Header />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          {/* <Route path="/projects/card-draw" element={<CardDraw />} />
          <Route path="/projects/tarot" element={<Tarot />} />
          <Route path="/projects/memory-game" element={<MemoryGame />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
