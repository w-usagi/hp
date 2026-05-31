function GameCard({ game }) {
  return (
    <div className="game-card">
      <img
        src={game.image}
        alt={game.title}
        className="game-image"
      />

      <h2>{game.title}</h2>

      <p>{game.description}</p>

      <div className="buttons">
        <a
          href={game.playUrl}
          target="_blank"
          rel="noreferrer"
        >
          Play
        </a>

        <a
          href={game.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default GameCard;