import { useState, useEffect, useCallback } from 'react';
import '../styles/CardGrid.css';
import Card from './Card';

import _ from 'lodash';

function CardGrid({setCurrentScore, setBestScore, currentScore, bestScore}) {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize shuffle function to prevent unnecessary recreations
  const shuffleCards = useCallback(() => {

  setPokemonList(prev => _.shuffle(prev));

  }, []); // No dependencies needed

  // Fetch Pokemon data
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
        const data = await response.json();
        
        const pokemonData = await Promise.all(
          data.results.map(async (pokemon, index) => {
            const res = await fetch(pokemon.url);
            const pokemonDetails = await res.json();
            return {
              id: index + 1,
              name: pokemon.name,
              image: pokemonDetails.sprites.other['official-artwork'].front_default
            };
          })
        );
        
        setPokemonList(pokemonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, []); // Empty dependency array to run only once

  // Shuffle cards on initial load and when score changes
  useEffect(() => {
    if (pokemonList.length > 0) {
      shuffleCards();
    }
  }, [pokemonList.length, shuffleCards]); // Only depend on length and memoized shuffle

  // Handle card click
  const handleCardClick = (id) => {
    if (selectedCards.includes(id)) {
      // Card already selected - game over
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setSelectedCards([]);
    } else {
      // New card selected
      setSelectedCards([...selectedCards, id]);
      setCurrentScore(currentScore + 1);
    }
    shuffleCards(); // Shuffle after each click
  };

  if (isLoading) {
    return <div className="loading">Loading Pokémon...</div>;
  }

  return (
    <>
    <div className="card-grid">
      {pokemonList.map((pokemon) => (
        <Card 
          key={pokemon.id} 
          pokemon={pokemon} 
          handleCardClick={handleCardClick} 
        />
      ))}
    </div>
    </>
    
  );
}

export default CardGrid;