import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../features/Login/index";
import InventoryHome from "../../features/Inventory/InventoryHome/index";
import InventoryDetail from "../../features/Inventory/InventoryDetail/index";
import ExampleThree from "../../features/Inventory/ExampleThree";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Application Template</h1>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inventory-Home" element={<InventoryHome />} />
        <Route path="/Inventory-Detail" element={<InventoryDetail />} />
        <Route path="/Example-Three" element={<ExampleThree />} />
      </Routes>
    </div>
  );
}

export default App;
