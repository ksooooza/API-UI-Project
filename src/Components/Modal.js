import {useState, useEffect} from 'react';
import axios from 'axios';

function Modal({ closeModal, pokemon }) {
    const [image, setImage] = useState("")
    const [pokeStats, setPokeStats] = useState({})

    useEffect(()=>{
        fetchPokemonInfo()
    }, [])

    async function fetchPokemonInfo(){
        const artResponse = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const statsResponse = await axios(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)

        let filteredStats = {
            name: statsResponse.data.name,
            color: statsResponse.data.color.name,
            flavorText: statsResponse.data["flavor_text_entries"][0]["flavor_text"],
            habitat: statsResponse.data.habitat.name,
            isLegendary: statsResponse.data["is_legendary"],
            shape: statsResponse.data.shape.name,
            evolvesFrom: statsResponse.data["evolves_from_species"],
        }
        
        setImage(artResponse.data.sprites.other["official-artwork"]["front_default"])
        setPokeStats(filteredStats)
    }

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
                <div className="title"><h2>Name of Pokemon</h2></div>
                <div className="body">
                    <img src={image} />
                </div>
            </div>
        </div>
    )
}

export default Modal;