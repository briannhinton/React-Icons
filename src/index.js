import React from "react";
import ReactDOM from "react-dom";
import { AddIconSVG, ChatIconSVG } from "./components/svg-icons";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AddIconSVG />
      <ChatIconSVG />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
