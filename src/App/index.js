import React from "react";
import "./App.css";
import {Column1} from "../col1/Column1";
import {Column2} from "../col2/Column2";
import {useLocalStorage} from "./useLocalStorage";

function App() {
  const [todos, saveTodos] = useLocalStorage("todos", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div class="container">
      <Column1
        todos={todos}
        saveTodos={saveTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Column2
        todos={todos}
        saveTodos={saveTodos}
        searchedTodos={searchedTodos}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
    </div>
  );
}

export default App;
