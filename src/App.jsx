import React from "react";

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Counter } from "./components/Counter/Counter";
// import { Articles } from "./components/Articles/Articles";


class App extends React.Component {
  // Método responsavel por renderizar a class component no React
  render() {
    return (
      <>
        <Navbar />
        <Articles />
        {/* <Counter /> */}
      </>
    );
  }
}

export default App;
