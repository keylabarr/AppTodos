import React from "react";
import './TodoItem.css'
import {BsFillTrashFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import './TodoIconTrash.css'

function TodoItem(props){
    const onComplete = () => {
            alert('Ya completaste todo' + props.text);
    };

    const onDelete = () => {
        alert('Borraste la tarea' + props.text);
};
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
            onClick={props.onComplete}>
              <BsFillCheckCircleFill/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}>
               <BsFillTrashFill/> 
            </span>
        </li>
    );

    
    
}

export { TodoItem };