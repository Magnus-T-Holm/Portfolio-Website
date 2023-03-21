import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

// ------------------------- Univesal -------------------------
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop"
import UpdateTitle from "./components/UpdateTitle";

// ------------------------- Pages -------------------------
import Frontpage from "./pages/Frontpage";

// ------------------------- Projects -------------------------
import MemoryGame from "./components/projects/memory_game/MemoryGame";
import CardDraw from "./components/projects/card_draw/CardDraw";
import Tarot from "./components/projects/tarot/Tarot";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <UpdateTitle />
        <Header />
        <Routes>
          <Route path="/portfolio/" element={<Frontpage />} />
          <Route path="/portfolio/projects/card-draw" element={<CardDraw />} />
          <Route path="/portfolio/projects/tarot" element={<Tarot />} />
          <Route path="/portfolio/projects/memory-game" element={<MemoryGame />} />
          <Route path="/portfolio/*" element={<Navigate to="/portfolio/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
