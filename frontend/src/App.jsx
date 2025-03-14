import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layoutcomponents/Header";
import SignUpPage from "./views/SignUpPage";
import LoginPage from "./views/LoginPage";
import Menu from "./views/Menu";
import CartPage from "./views/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
