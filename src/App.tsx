import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: 01-host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(<App />);
