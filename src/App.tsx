import { Sparkle } from "phosphor-react";
import { Tweet } from "./components/Tweet";
import { SideBar } from "./components/Sidebar";

export function App() {
  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        <main className="timeline">
          <header className="timeline-header">
            Home
            <Sparkle />
          </header>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/egmarshall.png" alt="user photo" />

              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>
          <div className="separator" />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  );
}
