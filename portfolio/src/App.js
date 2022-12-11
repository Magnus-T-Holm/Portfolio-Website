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

// DK
import Frontpage from "./pages/Frontpage";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

// EN
import Frontpage_EN from "./pages/Frontpage_EN";
import Skills_EN from "./pages/Skills_EN";
import Projects_EN from "./pages/Projects_EN";

// ------------------------- Projects -------------------------
// DK
import Memory_Game from "./components/projects/memory_game/memory_game";

// EN
import Card_Draw from "./components/projects/card_draw/card_draw";
import Tarot from "./components/projects/tarot/tarot";
import Memory_Game_EN from "./components/projects/memory_game/memory_game_EN";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/en" element={<Frontpage_EN />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/en/skills" element={<Skills_EN />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/en/projects" element={<Projects_EN />} />
          <Route path="/projects/card-draw" element={<Card_Draw />} />
          <Route path="/projects/tarot" element={<Tarot />} />
          <Route path="/projects/memory_game" element={<Memory_Game />} />
          <Route
            path="/en/projects/memory_game"
            element={<Memory_Game_EN />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
