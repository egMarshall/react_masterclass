import "./style.css";

import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import { useState, FormEvent } from "react";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([
    "Concordo...",
    "Olha, faz sentido!",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, non pariatur eaque similique hic sunt quaerat dolorem harum vitae voluptates perferendis error id quis, reprehenderit delectus ad ex, omnis nesciunt!" />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/egmarshall.png" alt="user photo" />
          <textarea
            value={newAnswer}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
            id="tweet"
            placeholder="Tweet your answer"
          />
        </label>
        <button type="submit">Answer</button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
