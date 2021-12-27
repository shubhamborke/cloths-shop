import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import FetchData from "../fetchData";
import CartPage from "../cartPage";

const RouteNavigation = () => {
  const [state, setstate] = useState({});

  const dataTraverse = (element) => {
    setstate(element);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<FetchData dataTraverse={dataTraverse} />}
        ></Route>
        <Route path="/CartPage" element={<CartPage state={state}/>}></Route>
      </Routes>
    </Router>
  );
};

export default RouteNavigation;
