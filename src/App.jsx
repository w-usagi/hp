import { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import { useGithubGames } from "./hooks/useGithubGames";

function App() {
  const [searchText, setSearchText] = useState("");
  const games = useGithubGames();
  const filteredGames = games.filter((game) =>
    [
      game.title,
      game.description || ""
    ]
      .join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
  return (
    <div className="container">
      <header>
        <h1>白うさぎのゲーム小屋</h1>
        <div className="cloud-comment">
          <h3>ありきたり</h3>
        </div>
        <span className="dot dot1"></span>
        <span className="dot dot2"></span>
        <span className="dot dot3"></span>
        <p>ゲーム一覧</p>
      </header>

      <div className="search-area">
        <input
          type="text"
          placeholder="ゲーム名で検索..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="game-grid">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
