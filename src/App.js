import { useEffect, useState } from "react";
import Home from "./routes/Home";
import Detail from "./routes/detail";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
