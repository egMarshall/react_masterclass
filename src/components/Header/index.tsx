import "./style.css";

import { Sparkle } from "phosphor-react";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="timeline-header">
      {title}
      <Sparkle />
    </header>
  );
}
