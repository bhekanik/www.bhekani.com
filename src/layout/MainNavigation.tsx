import Link from "next/link";
import React from "react";

export const MainNavigation = () => {
  return (
    <header>
      <h1>BK</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
