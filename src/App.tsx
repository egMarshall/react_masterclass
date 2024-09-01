import { Tweet } from "./components/Tweet";
import { SideBar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Separator } from "./components/Separator";

export function App() {
  return (
    <div className="layout">
      <SideBar />
      <div className="content">
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
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  );
}
