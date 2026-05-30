import "./App.css";
import { games } from "./data/games";
import GameCard from "./components/GameCard";

function App() {
  return (
    <div className="container">
      <header>
        <h1>My Games</h1>
        <p>自作ゲーム一覧</p>
      </header>

      <div className="game-grid">
        {games.map((game) => (
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

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/