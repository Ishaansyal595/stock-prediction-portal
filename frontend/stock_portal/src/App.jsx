import { useState } from "react";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="text-gray-100 h-screen flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
