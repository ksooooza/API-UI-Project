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
            evolvesFrom: statsResponse.data["evolves_from_species"].name
        }
        
        setImage(artResponse.data.sprites.other["official-artwork"]["front_default"])
        setPokeStats(filteredStats)
    }

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
                <div className="title"><h2>{pokemon}</h2></div>
                <div className="body">
                    <img src={image} />
                    <br />
                    <p>
                        Color: {true ? pokeStats.color : "No data on color"}
                        <br />
                        Flavor Text: {true ? pokeStats.flavorText : "No flavor text"}
                        <br />
                        Habitat: {true ? pokeStats.habitat : "No data on habitat"}
                        <br />
                        Legendary: {pokeStats.isLegendary ? "True" : "Not legendary"}
                        <br />
                        Shape: {true ? pokeStats.shape : "No data on shape"}
                        <br />
                        Evolves From: {(pokeStats.evolvesFrom == null) ? "Base form" : pokeStats.evolvesFrom}
                        <br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Modal;