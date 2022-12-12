import HeaderNav from "./components/layout/HeaderNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import TeamPage from "./components/team/TeamPage";
import GalleriPage from "./components/galleri/GalleriPage";
import "../src/styles/styles.css";

function App() {
  return (
    <div className="topptak">
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/galleri" element={<GalleriPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
