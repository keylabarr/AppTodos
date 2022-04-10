import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";


function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal
  } = React.useContext(TodoContext); 

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      
          <TodoList>
            {error && <TodosError error = {error} />}
            {loading && new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
          {(!loading && !searchedTodos.length) &&  <EmptyTodos />}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
      {!!openModal && (
          <Modal>
          <TodoForm />
        </Modal>
      )}
 

      <CreateTodoButtom
      setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };