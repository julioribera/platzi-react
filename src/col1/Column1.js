import "./Column1.css";
import {TodoSearch} from "./TodoSearch";
import {CreateTodoButton} from "./CreateTodoButton";

function Column1() {
  return (
    <div class="column">
      <h2>Crea una tarea</h2>
      <div className="input-container">
        <input type="text" placeholder="Escribe una tarea" />
        <CreateTodoButton />
      </div>
      <h2>Filtra tareas</h2>
      <div className="input-container">
        <TodoSearch />
      </div>
    </div>
  );
}

export {Column1};
