import Link from "next/link";
import React from "react";

export const MainNavigation = (): JSX.Element => {
  return (
    <header>
      <h1 className="text-6xl font-bold text-center">BK</h1>
      <nav className="my-4">
        <ul className="flex flex-row justify-center space-x-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
