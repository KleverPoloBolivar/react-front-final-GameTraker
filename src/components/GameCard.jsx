function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.imagesrc} alt={game.name} />
      <h3>{game.name}</h3>
      <p>{game.genre}</p>
      <p>{game.developer}</p>
    </div>
  );
}

export default GameCard;
