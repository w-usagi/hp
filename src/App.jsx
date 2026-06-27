import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./App.css";
import GameCard from "./components/GameCard";
import { useGithubGames } from "./hooks/useGithubGames";

function App() {
  const { t } = useTranslation();
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
    <>
    <div className="container">
      <header>
        <div className="title-wrap">
          {/* ★吹き出しをここ（title-wrapの中）に移動 */}
          <div className="thought-bubble">
            <div className="cloud-comment">
              <h3>{t("bubble")}</h3>
            </div>
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>

          <h1>{t("title")}</h1>
          <p>{t("note")}</p>
        </div>
    </header>

      <div className="search-area">
        <input
          type="text"
          placeholder={t("search")}
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
    </>
  );
}

export default App;
