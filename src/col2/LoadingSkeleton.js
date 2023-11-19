import "./TodoItem.css";
import {Check} from "./Check";
import {Cross} from "./Cross";

function LoadingSkeleton() {
  return (
    <li className="skeleton">
      <Check />
      <p>Cargando...</p>
      <Cross />
    </li>
  );
}

export {LoadingSkeleton};
