import React from "react";
import "./App.css";
import { Column1 } from "../col1/Column1";
import { Column2 } from "../col2/Column2";
import { TodoProvider } from "../TodoContext";

function App() {
  return (
    <div class="container">
      <TodoProvider>
        <Column1 />
        <Column2 />
      </TodoProvider>
    </div>
  );
}

export default App;
