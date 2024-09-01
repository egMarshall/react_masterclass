import "./style.css";

import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";

const answers = ["Concordo...", "Olha, faz sentido!"];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, non pariatur eaque similique hic sunt quaerat dolorem harum vitae voluptates perferendis error id quis, reprehenderit delectus ad ex, omnis nesciunt!" />
      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/egmarshall.png" alt="user photo" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
