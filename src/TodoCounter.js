import './TodoCounter.css'

function TodoCounter({total, completed}){
  
    return (
      <h4>
        <b>{completed}</b> de <b>{total}</b> completadas
      </h4>
    );
  } 

  export {TodoCounter};