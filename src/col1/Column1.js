import React from "react";
import "./Column1.css";
import {TodoSearch} from "./TodoSearch";
import {CreateTodoButton} from "./CreateTodoButton";

function Column1({
  searchValue,
  setSearchValue,
  todos,
  setTodos
}) {

  const [inputValue, setInputValue] = React.useState("");

  const addTodo = (text) => {
    if (text === "") {
      return;
    }
    const newTodos = [...todos, {text, completed: false}];
    setTodos(newTodos);
    setInputValue('');
    console.log("addTodo");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(inputValue);
    }
  };



  return (
    <div class="column">
      <h2>Crea una tarea</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <CreateTodoButton 
          addTodo={() => {addTodo(inputValue)}}
        />
      </div>
      <h2>Filtra tareas</h2>
      <div className="input-container">
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
    </div>
  );
}

export {Column1};
