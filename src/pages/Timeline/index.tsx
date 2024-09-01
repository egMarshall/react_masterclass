import "./style.css";

import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";

const tweets = [
  "Elon Musk matou o twitter",
  "teste teste teste",
  "Meu primeiro tweet",
];

// forEach / map
// Ambos são métodos de iteração de arrays
// forEach: não retorna nada
// map: retorna um novo array

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />
      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/egmarshall.png" alt="user photo" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
