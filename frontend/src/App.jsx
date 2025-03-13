import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layoutcomponents/Header";
import SignUpPage from "./views/SignUpPage";
import LoginPage from "./views/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
