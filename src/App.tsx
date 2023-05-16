import React from "react";

import { Outlet } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default App;
