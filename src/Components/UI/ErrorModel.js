import React, { Fragment } from "react";
// import Card from "./Card";
import './ErrorModel.css';
import ReactDOM from 'react-dom';

//In this we are using portals

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
    return (
        <div className="modal">
                    <header className="header">
                        <h2>{props.title}</h2>
                    </header>
                    <div className="content">
                        <p>{props.message}</p>
                    </div>
                    <footer className="actions">
                        <button onClick={props.onConfirm}>Okay</button>
                    </footer>
        </div>
    )
}

const ErrorModel = (props) =>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm} />, document.getElementById('backdrop-root') )}
            {ReactDOM.createPortal(<ModalOverlay total={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErrorModel;