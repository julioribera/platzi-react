import './TodoItem.css';
import { Check } from './Check';
import { Cross } from './Cross';

function TodoItem({text, completed}){
    return (
      <li className={completed ? 'completed' : ''}>
        <Check/>
        <p>{text}</p>
        <Cross/>
      </li>
    )
  }

  
export {TodoItem};