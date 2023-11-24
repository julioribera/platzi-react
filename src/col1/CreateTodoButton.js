import React from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { addTodo, inputValue } = React.useContext(TodoContext);

  return (
    <button
      onClick={() => {
        addTodo(inputValue);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
