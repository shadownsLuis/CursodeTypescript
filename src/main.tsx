import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { TodoApp } from "./Components/TodoApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
