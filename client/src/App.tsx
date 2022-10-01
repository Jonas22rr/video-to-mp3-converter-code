import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ConvertMp3 from "./components/ConvertMp3";

const App: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/convert-mp3" element={<ConvertMp3 />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default App;
