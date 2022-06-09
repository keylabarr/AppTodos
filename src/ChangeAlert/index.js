import React from "react";
import { withStorageListener } from "./withStorageListener";

import './alert.css'; 

function ChangeAlert({show, toggleShow}) {
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
const  ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export {ChangeAlertWithStorageListener};