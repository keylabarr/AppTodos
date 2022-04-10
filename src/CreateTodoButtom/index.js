import React from "react";
import react from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButtom.css';

function CreateTodoButtom(props){

    const {
        setOpenModal, 
        openModal,
    } = React.useContext(TodoContext);
    const handleClick = () => {
        setOpenModal(!openModal);
    }

    const onClickButtom = () => {
      props.setOpenModal(true);
    }
    return(
        <button className="CreateTodoButton"
        onClick={handleClick}
        >
            +
        
        </button>
    );
}

export { CreateTodoButtom};