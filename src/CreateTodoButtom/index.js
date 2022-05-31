import React from "react";


import './CreateTodoButtom.css';

function CreateTodoButtom({setOpenModal, 
    openModal}){

    

    const handleClick = () => {
        setOpenModal(!openModal);
    }

    const onClickButtom = () => {
      setOpenModal(true);
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