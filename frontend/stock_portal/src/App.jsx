import { useState } from "react";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";
import { Routes, Route } from "react-router-dom";
import Register from "./assets/components/Register";
import Header from "./assets/components/Header";

function App() {
  return (
    <div className="text-gray-100 h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
