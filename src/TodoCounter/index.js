import React, { useContext } from "react";

import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos, loading}){
    
 

    return(

        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >   
        Has completado {completedTodos} de {totalTodos} tareas</h2>
    )
}

export {TodoCounter };  