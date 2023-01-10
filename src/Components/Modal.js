import React from 'react'
import Poke from '../Poke.jsx'

function Modal({ closeModal }) {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
                <div className="title"><h2>Name of Pokemon</h2></div>
                <div className="body"><Poke /></div>
            </div>
        </div>
    )
}

export default Modal;