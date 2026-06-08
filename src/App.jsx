import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import CartTestPage from "./pages/CartTestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sound/:id" element={<NowPlaying />} />
        <Route
  path="/cart-test"
  element={<CartTestPage />}
/>
      </Routes>
    </Router>
  );
}

export default App;
