import React, { useState, useEffect } from 'react'

function Poke({setPokemon, setOpenModal}) {
    const [ pokemons, setPokemons ] = useState([])

    useEffect(() => {
        getPoke()
    }, [])

    function getPoke() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then((res) => res.json())
        .then(data => setPokemons(data.results))
        .catch((err) => console.log("Oops something went wrong", err))
    }

    function handleClick(name){
        setPokemon(name)
        setOpenModal(true)
    }

    return(
        <div>
        {pokemons.map((pokemon) => (
            <button key={pokemon.name} onClick={() => handleClick(pokemon.name)}>{pokemon.name}</button>
            ))}
        </div>
    )
}

export default Poke;