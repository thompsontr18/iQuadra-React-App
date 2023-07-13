import React from "react";
import { ReactDOM } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        {/* <div className="container">
          <Routes>
            <Route path={process.env.PUBLIC_URL} exact Component={Home} />
            <Route path={process.env.PUBLIC_URL+"movie/:imdbID"} Component={MoveDetails} />
            <Route path={process.env.PUBLIC_URL+"*"} Component={PageNotFound} />
          </Routes>
        </div> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
