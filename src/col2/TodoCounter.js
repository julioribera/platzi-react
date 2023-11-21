function TodoCounter({total, completed}){
  
    return (
      total === 0 ? <h4>Crea una nueva tarea</h4>
      : <h4><b>{completed}</b> de <b>{total}</b> completadas</h4>
    );
  } 

  export {TodoCounter};