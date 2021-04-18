import Link from "next/link";
import React from "react";
import { Navigation } from "./Navigation";

export const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between align-middle sticky top-0 bg-white dark:bg-gray-800 z-50 mb-8">
      <div className="font-bold my-auto text-xl">
        <Link href="/">
          <a href="/" className="hover:no-underline text-white">
            Bhekani Khumalo
          </a>
        </Link>
      </div>

      <Navigation />
    </header>
  );
};
