import React from "react";
import "./App.css";
import FetchData from "./components/fetchData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./components/cartPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FetchData />}></Route>
          <Route path="/CartPage" element={<CartPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
