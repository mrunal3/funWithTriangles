import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}
