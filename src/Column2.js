import './Column2.css';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el curso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
    { text: 'LALALALA', completed: false },
    { text: 'Hacer la cena', completed: false }
  ];

function Column2() {
    return (
        <div class="column">
            <h1 className='gradient-text'>Tus tareas</h1>
            <TodoCounter total={7} completed={3} />
            
            <TodoList>
                {defaultTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                />
                ))}
            </TodoList>
        </div>
    )
}

export {Column2};