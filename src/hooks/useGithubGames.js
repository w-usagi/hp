import { useEffect, useState } from "react";

export function useGithubGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/w-usagi/repos")
      .then((res) => res.json())
      .then((repos) => {

        console.log(repos);

        const gameRepos = repos.filter(
          (repo) => repo.topics?.includes("game")
        );

        console.log(repos[0]);

        const gameData = gameRepos.map((repo) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description,
          githubUrl: repo.html_url,
          playUrl: repo.homepage,
          image: `https://raw.githubusercontent.com/w-usagi/${repo.name}/main/src/assets/thumbnail.jpg`,
        }));

        setGames(gameData);
      });
  }, []);

  return games;
}