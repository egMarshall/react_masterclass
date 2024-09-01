import "./style.css";

import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import { FormEvent, KeyboardEvent, useState } from "react";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState<string[]>([
    "Elon Musk matou o twitter",
    "teste teste teste",
    "Meu primeiro tweet",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/egmarshall.png" alt="user photo" />
          <textarea
            onKeyDown={handleHotKeySubmit}
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
            id="tweet"
            placeholder="What's happening?"
          />
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
