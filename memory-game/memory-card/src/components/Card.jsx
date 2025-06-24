import '../styles/Card.css';
function Card({ pokemon, handleCardClick }) {
  return (
    <div className="card" onClick={() => handleCardClick(pokemon.id)}>
      <div className="card-content">
        <img 
          src={pokemon.image} 
          alt={pokemon.name} 
          className="card-image"
        />
        <h3 className="card-name">{pokemon.name}</h3>
      </div>
    </div>
  );
}

export default Card;