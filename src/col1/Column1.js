import React from "react";
import "./Column1.css";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoContext } from "../TodoContext";

function Column1() {
  return (
    <div class="column">
      <h2>Crea una tarea</h2>
      <div className="input-container">
        <TodoContext.Consumer>
          {({ inputValue, handleInputChange, handleKeyPress }) => (
            <input
              type="text"
              placeholder="Escribe una tarea"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
          )}
        </TodoContext.Consumer>

        <CreateTodoButton
        // Usando contexto desde useContext
        />
      </div>
      <h2>Filtra tareas</h2>
      <div className="input-container">
        <TodoContext.Consumer>
          {({ searchValue, setSearchValue }) => (
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          )}
        </TodoContext.Consumer>
      </div>
    </div>
  );
}

export { Column1 };
