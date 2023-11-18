import './TodoItem.css';
import { Check } from './Check';
import { Cross } from './Cross';

function TodoItem({
  text,
  completed,
  onComplete,
  onDelete
}){
    return (
      <li className={completed ? 'completed' : ''}>
        <Check
          onClick={onComplete}
        />
        <p>{text}</p>
        <Cross
          onClick={onDelete}
        />
      </li>
    )
  }

  
export {TodoItem};