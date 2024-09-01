import "./style.css";

import twitterLogo from "../../assets/logo-twitter.svg";
import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from "phosphor-react";
import { Link } from "react-router-dom";

//contexto no react: é uma forma de compartilhar informações entre componentes sem precisar passar props manualmente entre eles (prop drilling).

export function SideBar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="logo" />
      <nav className="main-navigation">
        <Link className="active" to="/">
          <House weight="fill" />
          Home
        </Link>
        <a href="">
          <Hash weight="fill" />
          Explore
        </a>
        <a href="">
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>

      <button className="new-tweet">Tweet</button>
    </aside>
  );
}
