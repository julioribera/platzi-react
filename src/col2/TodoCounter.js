import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  // Usando contexto desde useContext
  const {
    loading,
    error,
    totalTodos: total,
    completedTodos: completed,
  } = React.useContext(TodoContext);

  return loading ? (
    <h4>Cargando...</h4>
  ) : error ? (
    <h4>Hubo un error</h4>
  ) : total === 0 ? (
    <h4>Crea una nueva tarea</h4>
  ) : (
    <h4>
      <b>{completed}</b> de <b>{total}</b> completadas
    </h4>
  );
}

export { TodoCounter };
