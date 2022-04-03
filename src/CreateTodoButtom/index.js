import react from "react";
import './CreateTodoButtom.css';

function CreateTodoButtom(props){
    const onClickButtom = () => {
        alert('Aqui se deberia abrir el modal');
    }
    return(
        <button className="CreateTodoButton"
        onClick={() => onClickButtom()}
        >+</button>
    );
}

export { CreateTodoButtom};