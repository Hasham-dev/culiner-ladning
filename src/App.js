import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Steps from "./components/Steps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Steps />
      <Footer />
    </div>
  );
};

export default App;
