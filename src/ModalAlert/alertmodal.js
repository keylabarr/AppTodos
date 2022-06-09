import React from 'react';
import ReactDOM from 'react-dom';
import './alert.css'

function AlertModal({}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
        {children}
        </div>,
         document.getElementById('modal')
    );
}

export {AlertModal};