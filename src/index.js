import React from "react";
//this was the old way before React 18
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App";

//this was the old way before React 18
// ReactDOM.render(<App />, document.querySelector("#root"));

//render the App component using React 18+ API
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);