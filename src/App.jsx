import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sound/:id" element={<NowPlaying />} />
      </Routes>
    </Router>
  );
}

export default App;
