import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeTT from "./components/HomeTT/HomeTT";
import HomeMj from "./components/HomeMJ/HomeMj";

function App() {
  return (
    <div className="App bg-blue-300">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeMj/>} />
          </Routes>
        </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
