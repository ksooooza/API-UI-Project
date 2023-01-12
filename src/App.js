import { useState } from 'react';
import Poke from './Poke.jsx';
import './App.css'
import Modal from './Components/Modal.js'

function App() {
  const [ openModal, setOpenModal ] = useState(false)
  const [pokemon, setPokemon] = useState("")


  return (
    <div className="App">
      <h1>The Funky Poke API</h1>
      <Poke setPokemon={setPokemon} setOpenModal={setOpenModal}/>
      {openModal && <Modal pokemon={pokemon} closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;