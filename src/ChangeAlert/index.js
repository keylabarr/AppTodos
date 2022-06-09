import React from "react";
import { useStorageListener } from "./useStorageListener";

import './alert.css'; 

function ChangeAlert({sincronize}) {
    const {show, toggleShow} = useStorageListener(sincronize);
    
    if(show) {
        return (

           <div className="ChageAlert-bg">
            <div className="alert-container ">
                <p>Han ocurrido cambios, ¿Te gustaria refrescar la información?</p>
                <button className="btn"
                onClick={() => toggleShow(false)}
                >
                    Refresh </button>
            </div>
            </div> 
        );
       
        
    }
    else{
        return null;
    }
}
   

export {ChangeAlert};