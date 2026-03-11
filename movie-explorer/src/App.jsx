import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navber from "./components/Navber";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<MovieDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
