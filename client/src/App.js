import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeMj from "./components/HomeMJ/HomeMj";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
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
