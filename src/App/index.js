import React from 'react';
import { useTodos } from './useTodos';
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import {TodoHeader } from "../TodoHeader";
import {TodoCounter} from "../TodoCounter"; 
import {TodoSearch} from '../TodoSearch';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];


function App() {
  const  {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal, 
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue, 
    addTodo
  } =  useTodos();

  return (
    <React.Fragment>

     <TodoHeader>
     <TodoCounter 
      totalTodos= {totalTodos}
      completedTodos = {completedTodos}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue= {setSearchValue}
       />
     </TodoHeader>

     <TodoList 
     error ={error}
     loading = {loading}
     searchedTodos = {searchedTodos}
     onError = {() => <TodosError /> }
     onLoading = {() => <TodosLoading />}
     onEmptyTodos = {() => <EmptyTodos />}
     render = {todo => (
      <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text)}
      onDelete={() => deleteTodo(todo.text)}
      />
     )}
     />

         
      {!!openModal && (
          <Modal>
          <TodoForm 
          addTodo={addTodo}
          setOpenModal = {setOpenModal}
           />
        </Modal>
      )}
 

      <CreateTodoButtom
       setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );

}

export default App;