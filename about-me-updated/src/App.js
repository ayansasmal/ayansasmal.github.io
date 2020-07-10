import React from "react";
import Classes from "./App.module.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";

const App = (props) => {
  return (
    <div className={Classes.App}>
      <Header />
      <Navbar/>
      <Content/>
    </div>
  );
};

export default App;
