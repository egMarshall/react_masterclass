import "./style.css";

import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/egmarshall.png" />
      <div className="tweet-content">
        <header>
          <strong>Érico Marshall</strong>
          <span>@_egmarshall</span>
        </header>
        <p>{content}</p>
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
    </Link>
  );
}
