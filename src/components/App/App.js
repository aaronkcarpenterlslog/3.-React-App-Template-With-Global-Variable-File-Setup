import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../features/Login/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Application Template</h1>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
