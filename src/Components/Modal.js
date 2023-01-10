import React from 'react'

function Modal({ closeModal }) {
    return(
        <div classNam="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
                <div className="title"><h2>Name of fruit</h2></div>
                <div className="body">Some facts about a fruit</div>
            </div>
        </div>
    )
}

export default Modal;