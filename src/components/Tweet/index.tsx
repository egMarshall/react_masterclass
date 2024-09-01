import "./style.css";

import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";

export function Tweet() {
  return (
    <a href="" className="tweet">
      <img src="https://github.com/egmarshall.png" />
      <div className="tweet-content">
        <header>
          <strong>Érico Marshall</strong>
          <span>@_egmarshall</span>
        </header>
        <p>o Twitter ta morto, sdds dele.</p>
        <footer>
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </footer>
      </div>
    </a>
  );
}
