import "./Column2.css";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { TodoContext } from "../TodoContext";

function Column2() {
  return (
    <div class="column">
      <h1 className="gradient-text">Tus tareas</h1>
      <TodoContext.Consumer>
        {({ loading, error, totalTodos, completedTodos }) => (
          <TodoCounter
            loading={loading}
            error={error}
            total={totalTodos}
            completed={completedTodos}
          />
        )}
      </TodoContext.Consumer>

      <TodoContext.Consumer>
        {({ loading, error, searchedTodos, todoCompleted, todoDeleted }) => (
          <TodoList>
            {loading ? (
              <LoadingSkeleton />
            ) : error ? (
              <p>Hubo un error</p>
            ) : (
              searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => todoCompleted(todo.text)}
                  onDelete={() => todoDeleted(todo.text)}
                />
              ))
            )}
          </TodoList>
        )}
      </TodoContext.Consumer>
    </div>
  );
}

export { Column2 };
