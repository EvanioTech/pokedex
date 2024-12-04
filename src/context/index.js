import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios';

export const PokeContext = createContext({});

function PokeProvider({ children }){
  // Estado para armazenar os dados do Pokémon
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);  // Estado para mostrar carregando
  const [error, setError] = useState(null);      // Estado para possíveis erros
  const [pokemonId, setPokemonId] = useState(1);  // Estado para armazenar o ID do Pokémon
  const [pokebola, setPokebola] = useState([]); // Pokémons capturados

  // Função para pegar dados de um Pokémon específico
  const fetchPokemon = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
      setPokemon(response.data);  // Armazena os dados do Pokémon
      setLoading(false);           // Altera o estado de carregamento
    } catch (error) {
      setError('Erro ao carregar Pokémon');
      setLoading(false);
    }
  };

  // Função para incrementar o ID do Pokémon
  const novopoke = () => {
    setPokemonId(prevId => prevId + 1);  // Incrementa o ID de forma correta
  };

  // Função para voltar o ID do Pokémon
  const afterpoke = () => {
    if (pokemonId > 1) {
      setPokemonId(prevId => prevId - 1); 
    } else {
      alert('Você está vendo o primeiro Pokémon da lista');
    }
  };

  // Função para capturar o Pokémon
  const capture = () => {
    if (pokemon) {
      // Adiciona o Pokémon à Pokébola, incluindo o id, nome e imagem
      setPokebola((prevPokes) => [
        ...prevPokes,
        { id: pokemon.id, name: pokemon.name, image: pokemon.sprites.front_default }
      ]);
      console.log(pokemon.id);
    }
  };
  

  const deleted = (idToDelete) => {
    // Filtra a lista removendo o Pokémon com o id correspondente
    setPokebola(prevPokes => prevPokes.filter(poke => poke.id !== idToDelete));
    console.log(`Pokémon com id ${idToDelete} foi excluído`);
  };
  
  

  // UseEffect para chamar a função quando o ID mudar
  useEffect(() => {
    fetchPokemon(); // Recarrega o Pokémon toda vez que o ID mudar
  }, [pokemonId]); // O useEffect depende do pokemonId

  

  return(
    <PokeContext.Provider
      value={{
        pokemon,
        loading,
        error,
        pokemonId,
        pokebola,
        novopoke,
        afterpoke,
        capture,
        deleted
      }}
    >
      {children}
    </PokeContext.Provider>
  )

}

export  {PokeProvider};

