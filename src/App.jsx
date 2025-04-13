import React from "react";
import Home from "./pages/Home";
import Movie_Trailer from "./pages/Movie_Trailer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mt" element={<Movie_Trailer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
