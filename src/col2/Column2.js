import './Column2.css';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';


function Column2({
    todos,
    setTodos,
    searchedTodos,
    completedTodos,
    totalTodos
}) {

    const todoCompleted = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
    }

    const todoDeleted = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }


    return (
        <div class="column">
            <h1 className='gradient-text'>Tus tareas</h1>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            
            <TodoList>
                {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => todoCompleted(todo.text)}
                    onDelete={() => todoDeleted(todo.text)}
                />
                ))}
            </TodoList>
        </div>
    )
}

export {Column2};