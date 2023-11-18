import React from "react";
import "./App.css";
import {Column1} from "./col1/Column1";
import {Column2} from "./col2/Column2";

function App() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div class="container">
      <Column1
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        todos={todos}
        setTodos={setTodos}
      />
      <Column2
        todos={todos}
        setTodos={setTodos}
        searchedTodos={searchedTodos}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
    </div>
  );
}

export default App;
