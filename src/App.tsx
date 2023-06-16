import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Navbar } from "navbar/Navbar"; // se importa el componente navbar, microfronted

import { Counter } from "counterReact/CounterReact";

const App = () => (
  <>
    <Navbar />
    <h2>Host App</h2>

    <Counter />
  </>
);
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(<App />);
