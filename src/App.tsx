import React from "react";
import ReactDOM from "react-dom/client";

import { Navbar } from "navbar/Navbar"; // se importa el componente navbar, microfronted
import { Counter } from "counterReact/CounterReact"; // se importa el componente counter, microfronted

import "./index.css";

const App = () => (
  <>
    <Navbar />
    <div className="App-container">
      <h2>Counter MF</h2>
      <Counter />
    </div>
  </>
);
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(<App />);
