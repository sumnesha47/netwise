import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

export const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header>
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </header>
    </header>
  );
};
