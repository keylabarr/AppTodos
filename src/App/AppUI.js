import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom";

function AppUI({
  loading,
  error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodo}
    ){
    return( <React.Fragment>

        <TodoCounter
        total = {totalTodos}
        completed= {completedTodos} /> 
      
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        
        />
       
        <TodoList> 
          {error && <p>Un momento, ocurrio un error...</p>}
          {loading && <p>Estamos cargando, no desesperes..</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
          {searchedTodos.map(todo => (
            <TodoItem
             key={todo.text} 
             text = {todo.text}
             completed = {todo.completed}
             onComplete={() => completeTodos(todo.text)}
             onDelete = {() => deleteTodo(todo.text)}/>
          ))}   
          </TodoList>
    
        <CreateTodoButtom />
        
     
        </React.Fragment>
      
     
    
      
      ); 

}

export{ AppUI } 