import React from "react";
import "./App.css";
import { useEffect } from "react";
import { AppDispatch } from "./redux/reduxStore";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categoriesSlice";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartList from "./components/CartList";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
    console.log("categories loaded");
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<CartList />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
